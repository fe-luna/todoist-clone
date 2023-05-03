import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const StarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="#FFD093"
      fillRule="evenodd"
      stroke="#FFD093"
      strokeLinejoin="bevel"
      d="M8.2 18.6l3.8-2.3 3.8 2.3a.8.8 0 001-.9l-.9-4.2 3.3-2.8a.8.8 0 00-.4-1.3L14.4 9l-1.7-4a.8.8 0 00-1.4 0L9.6 9l-4.4.4a.8.8 0 00-.4 1.3l3.3 2.8-1 4.2a.8.8 0 001.1.9z"
    ></path>
  </Icon>
);

export { StarIcon };
