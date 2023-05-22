import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonProps, HStack, IconButton } from "@chakra-ui/react";
import { useStore } from "stores";
import TodoList from "components/todo-list";
import { CommentIcon, MoreIcon, OptionIcon } from "components/icon";
import notFoundImg from "assets/images/project-not-found.jpg";
import styles from "./style.module.scss";
import Empty from "components/empty";

function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = useStore((state) => state.getProjectById(projectId!));
  const todos = useStore((state) => state.getTodosByProject(projectId!));
  const isInbox = project?.inbox_project;
  const isEmpty = !todos.length;
  const btnProps: ButtonProps = { size: "xs", variant: "ghost" };

  const navigate = useNavigate();
  const toToday = () => {
    navigate("/app/today");
  };

  if (!project) {
    return (
      <div className={styles.notFound}>
        <img src={notFoundImg} alt="not found" />
        <div className={styles.notFoundTitle}>Project not found.</div>
        <Button colorScheme="primary" onClick={toToday}>
          Back to Home view
        </Button>
      </div>
    );
  }

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
      {isEmpty && <Empty page={isInbox ? "inbox" : "project"} />}
      {!isEmpty && <TodoList todos={todos} />}
    </div>
  );
}

export default Project;
