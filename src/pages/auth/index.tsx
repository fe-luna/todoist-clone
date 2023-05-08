import React, { FunctionComponent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogoAndText } from "components/illustration";
import Login from "./login";
import Signup from "./signup";
import Password from "./password";
import styles from "./style.module.scss";

const ACTIONS = ["login", "signup", "password"];
type Action = (typeof ACTIONS)[number];

function Auth() {
  const navigate = useNavigate();
  const { action } = useParams<{ action: Action }>();
  const isValidAction = ACTIONS.includes(action as Action);
  useEffect(() => {
    if (!isValidAction) {
      navigate("/auth/login", { replace: true });
    }
  }, []);
  if (!isValidAction) {
    return null;
  }

  const titleMap: Record<Action, string> = {
    login: "Log in",
    signup: "Sign Up",
    password: "Forgot your password?",
  };
  const compMap: Record<Action, FunctionComponent> = {
    login: Login,
    signup: Signup,
    password: Password,
  };
  const Comp = compMap[action as Action];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoAndText />
      </div>
      <div className={styles.title}>{titleMap[action as Action]}</div>
      <Comp />
    </div>
  );
}

export default Auth;
