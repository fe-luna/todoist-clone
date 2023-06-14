import React from "react";
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { CloseIcon, PriorityStrokeIcon } from "components/icon";
import { PRIORITY } from "consts";

interface Props {
  value?: number;
  onChange: (value: number) => void;
}

const SelectPriority = (props: Props) => {
  const isP4 = props.value !== PRIORITY.P4;
  const list = [
    { value: PRIORITY.P1, color: "#d1453b" },
    { value: PRIORITY.P2, color: "#eb8909" },
    { value: PRIORITY.P3, color: "#246fe0" },
    { value: PRIORITY.P4, color: "#808080" },
  ];
  const current = list.find((item) => item.value === props.value);

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        leftIcon={
          isP4 ? (
            <PriorityStrokeIcon boxSize={4} />
          ) : (
            <PriorityStrokeIcon color={current?.color} boxSize={4} />
          )
        }
        rightIcon={
          isP4 ? (
            <Box
              _hover={{ background: "#e5e5e5", borderRadius: 2 }}
              onClick={props.onChange.bind(null, PRIORITY.P4)}
            >
              <CloseIcon boxSize={4} />
            </Box>
          ) : undefined
        }
        iconSpacing="4px"
        isActive={!!props.value}
        color={current?.color}
      >
        Priority
      </MenuButton>
      <MenuList minWidth="140px">
        {list.map((item) => (
          <MenuItem
            key={item.value}
            onClick={props.onChange.bind(null, item.value)}
          >
            <HStack>
              {isP4 ? (
                <PriorityStrokeIcon />
              ) : (
                <PriorityStrokeIcon color={item.color} />
              )}
              <span>Priority {item.value}</span>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectPriority;
