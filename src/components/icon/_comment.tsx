import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const CommentIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path
      fill="currentColor"
      d="M11.707 20.793A1 1 0 0110 20.086V18H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h6v3.086z"
    ></path>
  </Icon>
);

export { CommentIcon };
