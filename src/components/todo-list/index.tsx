import React from "react";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Todo } from "services/todo";
import styles from "./style.module.scss";
import { CheckedIcon } from "components/icon";

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
            <Text className={styles.description} noOfLines={1}>
              {item.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
