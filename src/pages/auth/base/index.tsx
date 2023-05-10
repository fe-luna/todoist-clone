import React, { useState, KeyboardEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  InputRightElement,
  InputGroup,
  Box,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import { EyeOpenIcon, EyeCloseIcon } from "components/icon";
import Oauth from "../oauth";

export interface FormData {
  email: string;
  password: string;
}

interface Props {
  action: "login" | "signup";
  onSubmit: (formData: FormData) => Promise<void>;
}

function BaseForm(props: Props) {
  const [loading, setLoading] = useBoolean();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPwd, setIsShowPwd] = useBoolean();
  const [submitErr, setSubmitErr] = useState<{ error: string }>();
  const isLogin = props.action === "login";
  const isSignup = props.action === "signup";

  // TODO handle errors
  const handleSubmit = async () => {
    setLoading.on();
    const formData = { email, password };
    try {
      await props.onSubmit(formData);
    } catch (err) {
      setSubmitErr(err as { error: string });
    }
    setLoading.off();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box>
      <Oauth />
      <VStack spacing="18px">
        {!!submitErr?.error && (
          <Box color="primary.500" fontSize="xs" width="100%">
            {submitErr.error}
          </Box>
        )}
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
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
              onKeyDown={handleKeyDown}
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
          onClick={handleSubmit}
          colorScheme="primary"
          size="lg"
          width="100%"
        >
          {isLogin && "Log in"}
          {isSignup && "Sign up with Email"}
        </Button>
        {isLogin && (
          <Box alignSelf="flex-start" lineHeight={1}>
            <Link as={NavLink} to="/auth/password" color="gray">
              Forgot your password?
            </Link>
          </Box>
        )}
        <Box fontSize="13px" lineHeight={1.2}>
          By continuing with Google, Apple, or Email, you agree to Todoist’s{" "}
          <Link href="https://todoist.com/terms">Terms of Service</Link> and{" "}
          <Link href="https://todoist.com/privacy">Privacy Policy</Link>
        </Box>
        <Box my={4} width="100%" borderTop="1px solid #f5f5f5" />
        {isLogin && (
          <Box lineHeight={1}>
            Don’t have an account?{" "}
            <Link as={NavLink} to="/auth/signup">
              Sign up
            </Link>
          </Box>
        )}
        {isSignup && (
          <Box lineHeight={1}>
            Already signed up? Go to login{" "}
            <Link as={NavLink} to="/auth/login">
              Log in
            </Link>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default BaseForm;
