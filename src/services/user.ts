import { request } from "./_request";
import { syncBaseParams } from "./_base";

export interface LoginPayload {
  email: string;
  password: string;
  device_id: string;
  permanent_login: boolean;
  pkce_oauth: any;
  web_session: boolean;
}

export function login(payload: LoginPayload) {
  return request({
    path: "/API/v9.0/user/login",
    method: "POST",
    data: payload,
  });
}

export interface RegisterPayload {
  email: string;
  password: string;
  accept_terms: boolean;
  lang: string;
  permanent_login: boolean;
  pkce_oauth: any;
  sample_projects: any;
  timezone: string;
  web_session: boolean;
}

export function register(payload: RegisterPayload) {
  return request({
    path: "/API/v9.0/user/register",
    method: "POST",
    data: payload,
  });
}

export interface SendResetPassword {
  email: string;
}

export function sendResetPassword(payload: SendResetPassword) {
  return request({
    path: "/Users/sendResetPassword",
    method: "POST",
    data: payload,
  });
}
export interface UserInfo {
  id: string;
  email: string;
  full_name: string;
  inbox_project_id: string;
}

export function getUserInfo(): Promise<UserInfo> {
  const payload = {
    ...syncBaseParams,
    resource_types: ["user"],
  };

  return request({
    path: "/API/v9.0/sync",
    method: "POST",
    data: payload,
  }).then((res) => res.user);
}
