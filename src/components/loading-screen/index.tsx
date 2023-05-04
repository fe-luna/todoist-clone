import React from "react";
import { Spinner } from "@chakra-ui/react";
import { LogoIcon } from "components/icon";
import styles from "./style.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <LogoIcon boxSize={16} />
      <Spinner size="md" className={styles.spinner} />
    </div>
  );
};

export default LoadingScreen;
