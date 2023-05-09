import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  InputRightElement,
  InputGroup,
  Box,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import localForage from "localforage";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEY } from "consts";
import { EyeOpenIcon, EyeCloseIcon } from "components/icon";
import * as userSvc from "services/user";
import img from "assets/images/login-branding.png";

function LoginForm() {
  const [loading, setLoading] = useBoolean();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPwd, setIsShowPwd] = useBoolean();

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
    <Box>
      <VStack spacing="18px">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="xs"
            variant="unstyled"
            placeholder="Enter your email..."
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size="xs" variant="unstyled">
            <Input
              type={isShowPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
            />
            <InputRightElement>
              <IconButton
                aria-label="Toggle password visibility"
                icon={isShowPwd ? <EyeOpenIcon /> : <EyeCloseIcon />}
                onClick={setIsShowPwd.toggle}
                size="xs"
                variant="ghost"
                transform="translate(6px, 2px)"
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          isLoading={loading}
          onClick={handleLogin}
          colorScheme="primary"
          size="lg"
          width="100%"
        >
          Log in
        </Button>
        <Box alignSelf="flex-start" lineHeight={1}>
          <Link as={NavLink} to="/auth/password" color="gray">
            Forgot your password?
          </Link>
        </Box>
        <Box fontSize="13px" lineHeight={1.2}>
          By continuing with Google, Apple, or Email, you agree to Todoist’s{" "}
          <Link href="https://todoist.com/terms">Terms of Service</Link> and{" "}
          <Link href="https://todoist.com/privacy">Privacy Policy</Link>
        </Box>
        <Box my={4} width="100%" borderTop="1px solid #f5f5f5" />
        <Box lineHeight={1}>
          Don’t have an account?{" "}
          <Link as={NavLink} to="/auth/signup">
            Sign up
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}

function LoginBranding() {
  return <img src={img} alt="" />;
}

export { LoginForm, LoginBranding };
