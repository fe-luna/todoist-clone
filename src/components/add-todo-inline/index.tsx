import React from "react";
import { useBoolean, Flex } from "@chakra-ui/react";
import AddTodo from "components/add-todo";
import { AddIcon } from "components/icon";
import styles from "./style.module.scss";

function AddTodoInline() {
  const [isActive, setIsActive] = useBoolean();
  const [isHover, setIsHover] = useBoolean();

  if (isActive) {
    return (
      <div className={styles.addContainer}>
        <AddTodo onClose={setIsActive.off} size="small" />
      </div>
    );
  }

  return (
    <Flex
      className={styles.wrapper}
      alignItems="center"
      onMouseEnter={setIsHover.on}
      onMouseLeave={setIsHover.off}
    >
      <AddIcon
        boxSize="18px"
        color={isHover ? "white" : "primary.500"}
        bg={isHover ? "primary.500" : ""}
        borderRadius="50%"
      />
      <span className={styles.text} onClick={setIsActive.on}>
        Add task
      </span>
    </Flex>
  );
}

export default AddTodoInline;
