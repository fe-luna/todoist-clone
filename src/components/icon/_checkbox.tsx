import React from "react";
import { Icon } from "@chakra-ui/icons";

const CheckedIcon = (props: any) => {
  const { isIndeterminate, isChecked, ...rest } = props;

  return (
    <Icon viewBox="0 0 24 24" boxSize={6} {...rest}>
      <path
        fill="currentColor"
        d="M11.23 13.7l-2.15-2a.55.55 0 00-.74-.01l.03-.03a.46.46 0 000 .68L11.24 15l5.4-5.01a.45.45 0 000-.68l.02.03a.55.55 0 00-.73 0l-4.7 4.35z"
      ></path>
    </Icon>
  );
};

export { CheckedIcon };
