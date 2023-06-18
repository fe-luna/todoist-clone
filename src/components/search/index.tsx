import React, { useEffect, useRef, useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useBoolean,
} from "@chakra-ui/react";
import { SearchIcon } from "components/icon";
import { useStore } from "stores";

const Search = () => {
  const sidebarWidth = useStore((state) => state.sidebarWidth);
  const [active, setActive] = useBoolean();

  // FIXME CSS flickering
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    setLeft(rect?.left || 0);
  }, []);

  return (
    <InputGroup style={{ width: active ? 450 : sidebarWidth - left }} ref={ref}>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Search"
        onFocus={setActive.on}
        onBlur={setActive.off}
      />
    </InputGroup>
  );
};

export default Search;
