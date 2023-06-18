import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const CloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path
      fill="currentColor"
      d="M5.146 5.146a.5.5 0 01.708 0L12 11.293l6.146-6.147a.5.5 0 01.638-.057l.07.057a.5.5 0 010 .708L12.707 12l6.147 6.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.708 0L12 12.707l-6.146 6.147a.5.5 0 01-.638.057l-.07-.057a.5.5 0 010-.708L11.293 12 5.146 5.854a.5.5 0 01-.057-.638z"
    ></path>
  </Icon>
);

export { CloseIcon };
