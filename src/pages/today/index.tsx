import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from "components/icon";

function Today() {
  return (
    <div>
      <div>Button theme test:</div>
      <Button>default</Button>
      <Button variant="ghost">default ghost</Button>
      <Button colorScheme="primary">primary</Button>
      <Button colorScheme="primary" size="lg">
        primary
      </Button>
      <div>IconButton theme test:</div>
      <IconButton
        aria-label="add"
        icon={<AddIcon />}
        size="sm"
        variant="ghost"
      />
      <IconButton
        aria-label="add"
        icon={<AddIcon />}
        size="xs"
        variant="ghost"
      />
      <IconButton
        aria-label="add"
        icon={<AddIcon />}
        size="sm"
        variant="outline"
      />
    </div>
  );
}

export default Today;
