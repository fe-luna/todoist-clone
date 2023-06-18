import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const MenuIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 5h15a.5.5 0 110 1h-15a.5.5 0 010-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1z"
    />
  </Icon>
);

export { MenuIcon };
