import React from "react";
import { useNavigate } from "react-router-dom";
import localForage from "localforage";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEY } from "consts";
import * as userSvc from "services/user";
import img from "assets/images/login-branding.png";
import BaseForm, { FormData } from "../base";

function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = async (formData: FormData) => {
    let deviceId = await localForage.getItem<string>(STORAGE_KEY.DEVICE_ID);
    if (!deviceId) {
      deviceId = uuidv4();
      localForage.setItem(STORAGE_KEY.DEVICE_ID, deviceId);
    }
    const payload = {
      ...formData,
      device_id: deviceId,
      permanent_login: true,
      pkce_oauth: null,
      web_session: true,
    };
    await userSvc.login(payload);
    navigate("/app/today");
  };

  return <BaseForm action="login" onSubmit={handleLogin} />;
}

function LoginBranding() {
  return <img src={img} alt="" />;
}

export { LoginForm, LoginBranding };
