import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const CalendarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" boxSize={6} {...props}>
    <path
      fill="currentColor"
      d="M12 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zm-1.25 7a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5a.5.5 0 110 1h-7a.5.5 0 010-1h7z"
    ></path>
  </Icon>
);

export { CalendarIcon };
