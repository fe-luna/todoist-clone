import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CalendarIcon } from "components/icon";

interface Props {
  date?: string;
}

const TodoDate = (props: Props) => {
  const { date } = props;
  if (!date) {
    return null;
  }

  const target = dayjs(date);
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  let info = {
    color: "#692ec2",
    text: target.format("dddd"),
  };
  if (date === today.format("YYYY-MM-DD")) {
    info = {
      color: "#058527",
      text: "Today",
    };
  } else if (date === tomorrow.format("YYYY-MM-DD")) {
    info = {
      color: "#ad6200",
      text: "Tomorrow",
    };
  }

  return (
    <Flex alignItems="center" color={info.color}>
      <CalendarIcon boxSize={3} />
      <Text fontSize="12px" marginLeft="2px">
        {info.text}
      </Text>
    </Flex>
  );
};

export default TodoDate;
