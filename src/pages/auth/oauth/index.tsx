import React from "react";
import { Box, Button, ButtonProps, IconProps, VStack } from "@chakra-ui/react";
import { GoogleIcon, FacebookIcon, AppleIcon } from "components/icon";

function Oauth() {
  const btnProps: ButtonProps = {
    size: "lg",
    variant: "outline",
    width: "100%",
    borderColor: "#eee",
    iconSpacing: 2.5,
  };
  const iconProps: IconProps = {
    boxSize: 4,
  };
  return (
    <div>
      <VStack spacing={3}>
        <Button leftIcon={<GoogleIcon {...iconProps} />} {...btnProps}>
          Continue with Google
        </Button>
        <Button leftIcon={<FacebookIcon {...iconProps} />} {...btnProps}>
          Continue with Facebook
        </Button>
        <Button leftIcon={<AppleIcon {...iconProps} />} {...btnProps}>
          Continue with Apple
        </Button>
      </VStack>
      <Box my={4} borderTop="1px solid #f5f5f5" />
    </div>
  );
}

export default Oauth;
