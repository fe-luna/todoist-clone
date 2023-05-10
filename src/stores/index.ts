import { create } from "zustand";
import { createUISlice, UIState } from "./ui";
import { createUserSlice, UserState } from "./user";

export const useStore = create<UIState & UserState>((...a) => ({
  ...createUISlice(...a),
  ...createUserSlice(...a),
}));
