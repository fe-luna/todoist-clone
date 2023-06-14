import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const LocationIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" boxSize={6} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.8 6.8c0 1.495-.977 3.054-2.142 4.344A16.316 16.316 0 018 12.729a16.315 16.315 0 01-1.658-1.585C5.177 9.854 4.2 8.295 4.2 6.8a3.8 3.8 0 017.6 0zm1 0C12.8 10.571 8 14 8 14s-4.8-3.429-4.8-7.2a4.8 4.8 0 119.6 0zM8 8a1.25 1.25 0 100-2.5A1.25 1.25 0 008 8z"
      clipRule="evenodd"
    ></path>
  </Icon>
);

export { LocationIcon };
