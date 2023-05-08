import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useBoolean } from "@chakra-ui/hooks";
import localForage from "localforage";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEY } from "consts";
import * as userSvc from "services/user";

function Login() {
  const [loading, setLoading] = useBoolean();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading.on();
    let deviceId = await localForage.getItem<string>(STORAGE_KEY.DEVICE_ID);
    if (!deviceId) {
      deviceId = uuidv4();
      localForage.setItem(STORAGE_KEY.DEVICE_ID, deviceId);
    }
    const payload = {
      email,
      password,
      device_id: deviceId,
      permanent_login: true,
      pkce_oauth: null,
      web_session: true,
    };
    const res = await userSvc.login(payload);
    setLoading.off();
    console.info(res);
  };

  return (
    <div>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button isLoading={loading} onClick={handleLogin}>
        Log in
      </Button>
    </div>
  );
}

export default Login;
