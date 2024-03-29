import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const ActivityIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 5h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2zm0 1a1 1 0 00-1 1v5h2.691l1.362-2.724a.5.5 0 01.917.053l1.473 4.05 1.576-5.516a.5.5 0 01.938-.066L15.825 12H19V7a1 1 0 00-1-1H6zm13 7h-3.5a.5.5 0 01-.457-.297l-1.44-3.241-1.622 5.675a.5.5 0 01-.95.034l-1.604-4.408-.98 1.96A.5.5 0 018 13H5v4a1 1 0 001 1h12a1 1 0 001-1v-4z"
      clipRule="evenodd"
    ></path>
  </Icon>
);

export { ActivityIcon };
