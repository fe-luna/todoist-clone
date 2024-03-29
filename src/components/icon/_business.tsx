import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const BusinessIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path
      fill="currentColor"
      d="M8 13c3.778 0 7 1.837 7 4.25 0 1.132-.742 1.75-2 1.75H3c-1.258 0-2-.618-2-1.75C1 14.837 4.222 13 8 13zm8 0c3.778 0 7 1.837 7 4.25 0 1.132-.742 1.75-2 1.75h-5.575c.23-.281.396-.617.49-1H21c.742 0 1-.215 1-.75 0-1.71-2.701-3.25-6-3.25-.529 0-1.042.04-1.531.113a6.786 6.786 0 00-1.114-.799A11.068 11.068 0 0116 13zm-8 1c-3.299 0-6 1.54-6 3.25 0 .535.258.75 1 .75h10c.742 0 1-.215 1-.75C14 15.54 11.299 14 8 14zm0-9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm8 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM8 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm8 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
    ></path>
  </Icon>
);

export { BusinessIcon };
