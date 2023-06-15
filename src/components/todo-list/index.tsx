import React from "react";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { CheckedIcon } from "components/icon";
import TodoDate from "components/todo-date";
import { Todo } from "services/todo";
import styles from "./style.module.scss";

interface Props {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  return (
    <div className={styles.list}>
      {props.todos.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.checkbox}>
            <Checkbox icon={<CheckedIcon />} />
          </div>
          <div className={styles.main}>
            <Box className={styles.title} noOfLines={4}>
              <ReactMarkdown children={item.content} linkTarget="_blank" />
            </Box>
            {!!item.description && (
              <Text className={styles.description} noOfLines={1}>
                {item.description}
              </Text>
            )}
            <TodoDate date={item.due?.date} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
