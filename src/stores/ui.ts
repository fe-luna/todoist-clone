import { StateCreator } from "zustand";
import localForage from "localforage";
import { STORAGE_KEY, UI } from "consts";

export interface UIState {
  sidebarWidth: number;
  getSidebarWidth: () => Promise<number>;
  setSidebarWidth: (width: number) => void;
}

export const createUISlice: StateCreator<UIState> = (set) => ({
  sidebarWidth: 0,
  getSidebarWidth: async () => {
    const prevWidth = await localForage.getItem<number>(
      STORAGE_KEY.SIDEBAR_WIDTH
    );
    const width = prevWidth || UI.SIDEBAR_DEFAULT_WIDTH;
    set({ sidebarWidth: width });
    return width;
  },
  setSidebarWidth: (width) => {
    localForage.setItem(STORAGE_KEY.SIDEBAR_WIDTH, width);
    set({ sidebarWidth: width });
  },
});
