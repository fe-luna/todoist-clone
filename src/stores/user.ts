import { StateCreator } from "zustand";
import localForage from "localforage";
import { STORAGE_KEY } from "consts";
import { getUserInfo, UserInfo } from "services/user";

export interface UserState {
  userInfo: UserInfo;
  fetchUserInfo: () => Promise<UserInfo>;
  checkHasLogged: () => Promise<boolean>;
  logout: () => Promise<void>;
}

export const createUserSlice: StateCreator<UserState> = (set) => ({
  userInfo: {} as UserInfo,
  fetchUserInfo: async () => {
    const userInfo = await getUserInfo();
    set({ userInfo });
    localForage.setItem(STORAGE_KEY.USER_INFO, userInfo);
    return userInfo;
  },
  checkHasLogged: async () => {
    const userInfo = await localForage.getItem<UserInfo>(STORAGE_KEY.USER_INFO);
    return !!userInfo;
  },
  logout: async () => {
    // TODO logout api to clear cookies
    await localForage.removeItem(STORAGE_KEY.USER_INFO);
  },
});
