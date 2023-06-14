import React, { useState } from "react";
import {
  Button,
  IconButton,
  Divider,
  Flex,
  HStack,
  Input,
} from "@chakra-ui/react";
import cx from "classnames";
import { PRIORITY } from "consts";
import SelectDate from "components/select-date";
import SelectPriority from "components/select-priority";
import SelectProject from "components/select-project";
import { AlarmIcon, LocationIcon, MoreIcon } from "components/icon";
import { createTodo } from "services/todo";
import { useStore } from "stores";
import styles from "./style.module.scss";

interface Props {
  size?: "default" | "small";
  onClose: () => void;
}

function AddTodo(props: Props) {
  const userInfo = useStore((state) => state.userInfo);
  const project = useStore((state) => state.projects);
  const fetchTodos = useStore((state) => state.fetchTodos);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(PRIORITY.P4);
  const [loading, setLoading] = useState(false);
  const isSmall = props.size === "small";
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await createTodo({
        content,
        description,
        priority,
        project_id: project[0].id,
        user_id: userInfo.id,
      });
      props.onClose();
      fetchTodos();
    } catch {}
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Input
        className={cx(styles.inputTitle, isSmall && styles.inputTitleSmall)}
        placeholder="Task name"
        variant="ghost"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        placeholder="Description"
        size="sm"
        variant="ghost"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        padding={0}
      />
      <HStack className={styles.tools}>
        <SelectDate onChange={() => {}} />
        <SelectPriority value={priority} onChange={setPriority} />
        <Button
          variant="outline"
          size="sm"
          leftIcon={<AlarmIcon boxSize={4} />}
          rightIcon={<div className={styles.tag}>PRO</div>}
          iconSpacing="4px"
          color="#808080"
        >
          Reminders
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<LocationIcon boxSize={4} />}
          rightIcon={<div className={styles.tag}>PRO</div>}
          iconSpacing="4px"
          color="#808080"
        >
          Location
        </Button>
        <IconButton
          aria-label="more"
          variant="outline"
          size="sm"
          icon={<MoreIcon boxSize={4} />}
          color="#808080"
        />
      </HStack>
      <Divider className={cx(styles.divider, isSmall && styles.dividerSmall)} />
      <Flex justifyContent="space-between" paddingTop="16px">
        <SelectProject onChange={() => {}} />
        <HStack>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button
            colorScheme="primary"
            isLoading={loading}
            isDisabled={!content}
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </HStack>
      </Flex>
    </div>
  );
}

export default AddTodo;
