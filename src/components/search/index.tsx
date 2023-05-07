import React, { useEffect, useRef, useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  useBoolean,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import cx from "classnames";
import { CloseIcon, QuestionIcon, SearchIcon } from "components/icon";
import { useStore } from "stores";
import styles from "./style.module.scss";

const Search = () => {
  const sidebarWidth = useStore((state) => state.sidebarWidth);
  const [active, setActive] = useBoolean();
  const [hover, setHover] = useBoolean();

  // FIXME CSS flickering
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    setLeft(rect?.left || 0);
  }, []);

  return (
    <InputGroup
      size="sm"
      colorScheme="alpha"
      variant="contained"
      style={{ width: active ? 450 : sidebarWidth - left }}
      ref={ref}
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
    >
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        colorScheme="alpha"
        placeholder="Search"
        onFocus={setActive.on}
        onBlur={setActive.off}
      />
      <InputRightElement>
        {!active && (
          <div className={cx(styles.tip, hover && styles.tipHover)}>/</div>
        )}
        {active && (
          <HStack spacing="2px" className={styles.rightBtn}>
            <IconButton
              aria-label="help"
              size="xs"
              variant="ghost"
              icon={<QuestionIcon boxSize={5} />}
            />
            <IconButton
              aria-label="close"
              size="xs"
              variant="ghost"
              icon={<CloseIcon boxSize={5} />}
            />
          </HStack>
        )}
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
