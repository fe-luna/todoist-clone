import { StateCreator } from "zustand";
import { getTodos, Todo } from "services/todo";

export interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<Todo[]>;
  getTodosByProject: (projectId: string) => Todo[];
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
});
