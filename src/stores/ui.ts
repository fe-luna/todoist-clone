import { StateCreator } from "zustand";
import localForage from "localforage";
import { STORAGE_KEY, UI } from "consts";

export interface UIState {
  sidebarWidth: number;
  getSidebarWidth: () => Promise<void>;
  setSidebarWidth: (width: number) => void;
}

export const createUISlice: StateCreator<UIState> = (set) => ({
  sidebarWidth: 0,
  getSidebarWidth: async () => {
    const width = await localForage.getItem<number>(STORAGE_KEY.SIDEBAR_WIDTH);
    set({ sidebarWidth: width || UI.SIDEBAR_DEFAULT_WIDTH });
  },
  setSidebarWidth: (width) => {
    localForage.setItem(STORAGE_KEY.SIDEBAR_WIDTH, width);
    set({ sidebarWidth: width });
  },
});
