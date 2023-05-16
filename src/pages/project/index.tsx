import React from "react";
import { useParams } from "react-router-dom";
import { Button, ButtonProps, HStack, IconButton } from "@chakra-ui/react";
import { useStore } from "stores";
import TodoList from "components/todo-list";
import { CommentIcon, MoreIcon, OptionIcon } from "components/icon";
import styles from "./style.module.scss";

function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = useStore((state) => state.getProjectById(projectId!));
  const todos = useStore((state) => state.getTodosByProject(projectId!));

  if (!project) {
    return <div>project not found</div>;
  }

  const btnProps: ButtonProps = { size: "xs", variant: "ghost" };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{project.name}</div>
        <HStack>
          <Button leftIcon={<OptionIcon />} {...btnProps}>
            View
          </Button>
          <Button leftIcon={<CommentIcon />} {...btnProps}>
            Comments
          </Button>
          <IconButton aria-label="more" icon={<MoreIcon />} {...btnProps} />
        </HStack>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default Project;
