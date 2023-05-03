import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useBoolean,
} from "@chakra-ui/react";
import { SearchIcon } from "components/icon";

const Search = () => {
  const [active, setActive] = useBoolean();

  return (
    <InputGroup style={{ width: active ? 450 : 300 }}>
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
