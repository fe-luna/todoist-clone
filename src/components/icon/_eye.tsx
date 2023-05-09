import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const EyeOpenIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <g fill="none" fillRule="evenodd" stroke="gray">
      <path d="M21.358 12C17.825 7.65 14.692 5.5 12 5.5c-2.624 0-5.67 2.043-9.097 6.181a.5.5 0 000 .638C6.331 16.457 9.376 18.5 12 18.5c2.692 0 5.825-2.15 9.358-6.5z"></path>
      <circle cx="12" cy="12" r="3.5"></circle>
    </g>
  </Icon>
);

const EyeCloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <g fill="gray" fillRule="evenodd" transform="translate(2 4)">
      <path
        fillRule="nonzero"
        d="M13.047 2.888C11.962 2.294 10.944 2 10 2 7.56 2 4.63 3.966 1.288 8c1.133 1.368 2.218 2.497 3.253 3.394l-.708.708c-1.068-.93-2.173-2.085-3.315-3.464a1 1 0 010-1.276C4.031 3.121 7.192 1 10 1c1.196 0 2.456.385 3.78 1.154l-.733.734zm-6.02 10.263C8.084 13.72 9.076 14 10 14c2.443 0 5.373-1.969 8.712-6-1.11-1.34-2.176-2.453-3.193-3.341l.708-.709C17.437 5.013 18.695 6.363 20 8c-3.721 4.667-7.054 7-10 7-1.175 0-2.411-.371-3.709-1.113l.735-.736z"
      ></path>
      <path
        fillRule="nonzero"
        d="M8.478 11.7l.79-.79a3 3 0 003.642-3.642l.79-.79A4 4 0 018.477 11.7zM6.334 9.602a4 4 0 015.268-5.268l-.78.78A3.002 3.002 0 007.113 8.82l-.78.78z"
      ></path>
      <rect
        width="21"
        height="1"
        x="-0.722"
        y="7.778"
        rx="0.5"
        transform="rotate(-45 9.778 8.278)"
      ></rect>
    </g>
  </Icon>
);

export { EyeOpenIcon, EyeCloseIcon };
