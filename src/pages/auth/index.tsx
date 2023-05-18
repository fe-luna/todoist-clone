import React, { FunctionComponent, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { LogoAndText } from "components/illustration";
import { LoginForm, LoginBranding } from "./login";
import { SignupForm, SignupBranding } from "./signup";
import { PasswordForm, PasswordBranding } from "./password";
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

  if (!action || !isValidAction) {
    return null;
  }

  const titleMap: Record<Action, string> = {
    login: "Log in",
    signup: "Sign up",
    password: "Forgot your password?",
  };
  const formMap: Record<Action, FunctionComponent> = {
    login: LoginForm,
    signup: SignupForm,
    password: PasswordForm,
  };
  const brandingMap: Record<Action, FunctionComponent> = {
    login: LoginBranding,
    signup: SignupBranding,
    password: PasswordBranding,
  };
  const Form = formMap[action];
  const Branding = brandingMap[action];

  return (
    <Box className={styles.container}>
      <Box className={styles.logo}>
        <LogoAndText />
      </Box>
      <Box className={styles.title}>{titleMap[action as Action]}</Box>
      <Box className={styles.main}>
        <Box className={styles.form}>
          <Form />
        </Box>
        <Box className={styles.branding}>
          <Branding />
        </Box>
      </Box>
    </Box>
  );
}

export default Auth;
