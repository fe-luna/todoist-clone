import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import * as userSvc from "services/user";
import img from "assets/images/password-branding.png";

function PasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useBoolean();
  const handleSubmit = async () => {
    setLoading.on();
    const payload = { email };
    try {
      const res = await userSvc.sendResetPassword(payload);
      console.log(res);
    } catch {}
    setLoading.off();
  };

  return (
    <VStack spacing={4} paddingTop={4}>
      <Text fontSize={13}>
        To reset your password, please enter the email address of your Todoist
        account.
      </Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="sm"
          variant="unstyled"
        />
      </FormControl>
      <Button
        isLoading={loading}
        onClick={handleSubmit}
        colorScheme="primary"
        size="lg"
        width="100%"
      >
        Reset my password
      </Button>
      <Box my={4} width="100%" borderTop="1px solid #f5f5f5" />
      <Link as={NavLink} to="/auth/login">
        Go to login
      </Link>
    </VStack>
  );
}

function PasswordBranding() {
  return <img src={img} alt="" />;
}

export { PasswordForm, PasswordBranding };
