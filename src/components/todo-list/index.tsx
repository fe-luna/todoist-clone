import React from "react";
import { Checkbox, Text } from "@chakra-ui/react";
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
            <Text className={styles.title} noOfLines={4}>
              {item.content}
            </Text>
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
