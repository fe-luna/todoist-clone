import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { PROJECT_MENU_COLOR } from "consts";
import { InboxIcon, DotIcon, TriangleDownIcon } from "components/icon";
import { useStore } from "stores";

interface Props {
  value?: number;
  onChange: (projectId: number) => void;
}

const SelectProject = (props: Props) => {
  const projects = useStore((state) => state.getProjectsExceptInbox());

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<InboxIcon boxSize={4} />}
        rightIcon={<TriangleDownIcon boxSize={4} />}
        paddingLeft="4px"
        paddingRight="4px"
        variant="ghost"
      >
        Inbox
      </MenuButton>
      <MenuList>
        {projects.map((item) => (
          <MenuItem key={item.id}>
            <DotIcon color={PROJECT_MENU_COLOR[item.color?.toUpperCase()]} />
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectProject;
