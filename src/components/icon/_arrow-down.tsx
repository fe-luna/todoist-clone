import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const ArrowDownIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" boxSize={6} {...props}>
    <path
      fill="currentColor"
      d="M14 5.758L13.156 5 7.992 9.506l-.55-.48.002.002-4.588-4.003L2 5.77 7.992 11 14 5.758"
    ></path>
  </Icon>
);

export { ArrowDownIcon };
