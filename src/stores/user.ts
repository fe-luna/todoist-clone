import { StateCreator } from "zustand";
import localForage from "localforage";
import { STORAGE_KEY } from "consts";
import * as userSvc from "services/user";

type UserInfo = userSvc.UserInfo;

export interface UserState {
  userInfo: UserInfo;
  fetchUserInfo: () => Promise<UserInfo>;
  setUserInfo: (userInfo: UserInfo) => void;
  checkHasLogged: () => Promise<boolean>;
}

export const createUserSlice: StateCreator<UserState> = (set) => ({
  userInfo: {} as UserInfo,
  fetchUserInfo: async () => {
    const userInfo = await userSvc.getUserInfo();
    set({ userInfo });
    return userInfo;
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
    localForage.setItem(STORAGE_KEY.USER_INFO, userInfo);
  },
  checkHasLogged: async () => {
    const userInfo = await localForage.getItem<UserInfo>(STORAGE_KEY.USER_INFO);
    return !!userInfo;
  },
});
