import { create } from "zustand";
import { createProjectSlice, ProjectState } from "./project";
import { createTodoSlice, TodoState } from "./todo";
import { createUISlice, UIState } from "./ui";
import { createUserSlice, UserState } from "./user";

export const useStore = create<ProjectState & TodoState & UIState & UserState>(
  (...a) => ({
    ...createProjectSlice(...a),
    ...createTodoSlice(...a),
    ...createUISlice(...a),
    ...createUserSlice(...a),
  })
);
