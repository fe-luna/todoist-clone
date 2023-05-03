import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const AddIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(4 3)">
      <mask id="jd4FBg" fill="#fff">
        <path d="M9 8h7a.5.5 0 110 1H9v7a.5.5 0 11-1 0V9H1a.5.5 0 010-1h7V1a.5.5 0 011 0v7z"></path>
      </mask>
      <g mask="url(#jd4FBg)">
        <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
      </g>
    </g>
  </Icon>
);

export { AddIcon };
