import React from "react";
import dayjs from "dayjs";
import { Icon, IconProps } from "@chakra-ui/icons";

const TodayIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} style={{ color: "#4b9244" }} {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path
        fillRule="nonzero"
        d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
        opacity="0.1"
      ></path>
      <path
        fillRule="nonzero"
        d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm1 3h10a.5.5 0 110 1H7a.5.5 0 010-1z"
      ></path>
      <text
        fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
        fontSize="9"
        fontWeight="500"
        transform="translate(4 2)"
      >
        <tspan x="8" y="15" textAnchor="middle">
          {dayjs().format("DD")}
        </tspan>
      </text>
    </g>
  </Icon>
);

export { TodayIcon };
