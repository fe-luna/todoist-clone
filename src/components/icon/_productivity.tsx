import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const ProductivityIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" boxSize={6} {...props}>
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M12 3a9 9 0 11-.001 18.001A9 9 0 0112 3zm0 1a8 8 0 00-7.74 10.031l2.886-2.885a.502.502 0 01.708 0l2.646 2.647 4.793-4.794L13 9a.5.5 0 010-1h3.52l.052.005L16.5 8a.52.52 0 01.105.011l.046.012.04.015c.014.005.027.012.04.019a.307.307 0 01.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013a.31.31 0 01.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12a.5.5 0 01-1 0V9.706l-5.146 5.148a.502.502 0 01-.708 0L7.5 12.207 4.618 15.09A8 8 0 1012 4z"
    ></path>
  </Icon>
);

export { ProductivityIcon };
