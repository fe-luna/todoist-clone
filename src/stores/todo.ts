import { StateCreator } from "zustand";
import { getTodos, Todo } from "services/todo";
import dayjs from "dayjs";

export interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<Todo[]>;
  getTodosByProject: (projectId: string) => Todo[];
  getTodosCount: () => Record<string, number>;
  getTodayTodos: () => Todo[];
  getOverdueTodos: () => Todo[];
}

export const createTodoSlice: StateCreator<TodoState> = (set, get) => ({
  todos: [],
  fetchTodos: async () => {
    const todos = await getTodos();
    set({ todos });
    return todos;
  },
  getTodosByProject: (projectId: string) => {
    const todos = get().todos;
    return todos
      .filter((item) => item.project_id === projectId)
      .sort((a, b) => a.child_order - b.child_order);
  },
  getTodosCount: () => {
    const todos = get().todos;
    const count: Record<string, number> = {};
    todos.forEach((todo) => {
      count[todo.project_id] = (count[todo.project_id] || 0) + 1;
    });
    const todayTodos = get().getTodayTodos();
    const overdueTodos = get().getOverdueTodos();
    count.today = todayTodos.length + overdueTodos.length;
    return count;
  },
  getTodayTodos: () => {
    const todos = get().todos;
    const today = dayjs().format("YYYY-MM-DD");
    return todos.filter((item) => item.due?.date === today);
  },
  getOverdueTodos: () => {
    const todos = get().todos;
    const today = dayjs().startOf("d");
    return todos.filter(
      (item) => !!item.due?.date && dayjs(item.due.date).isBefore(today)
    );
  },
});
