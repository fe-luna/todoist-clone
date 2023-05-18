import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useStore } from "stores";
import TodoList from "components/todo-list";
import Empty from "components/empty";
import { OptionIcon } from "components/icon";
import styles from "./style.module.scss";

function Today() {
  const todayTodos = useStore((state) => state.getTodayTodos());
  const overdueTodos = useStore((state) => state.getOverdueTodos());
  const isEmpty = !todayTodos.length && !overdueTodos.length;
  const today = dayjs();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Today</span>
          <span className={styles.subTitle}>{today.format("ddd D MMM")}</span>
        </div>
        <Button leftIcon={<OptionIcon />} size="xs" variant="ghost">
          View
        </Button>
      </div>
      {isEmpty && <Empty page="today" />}
      {!!overdueTodos.length && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Overdue</div>
          <TodoList todos={overdueTodos} />
        </div>
      )}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>{`${today.format(
          "D MMM"
        )} ‧ Today ‧ ${today.format("ddd")}`}</div>
        <TodoList todos={todayTodos} />
      </div>
    </div>
  );
}

export default Today;
