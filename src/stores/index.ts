import { create } from "zustand";
import { createProjectSlice, ProjectState } from "./project";
import { createUISlice, UIState } from "./ui";
import { createUserSlice, UserState } from "./user";

export const useStore = create<ProjectState & UIState & UserState>((...a) => ({
  ...createProjectSlice(...a),
  ...createUISlice(...a),
  ...createUserSlice(...a),
}));
