import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const DotIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path fill="currentColor" d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
  </Icon>
);

export { DotIcon };
