import { create } from "zustand";
import { createUISlice, UIState } from "./ui";

export const useStore = create<UIState>((...a) => ({
  ...createUISlice(...a),
}));
