import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const MoreIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      transform="translate(3 10)"
    >
      <circle cx="2" cy="2" r="2"></circle>
      <circle cx="9" cy="2" r="2"></circle>
      <circle cx="16" cy="2" r="2"></circle>
    </g>
  </Icon>
);

export { MoreIcon };
