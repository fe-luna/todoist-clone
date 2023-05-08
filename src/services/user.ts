import { request } from "./_request";

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
