import React, {
  ReactElement,
  Fragment,
  cloneElement,
  ChangeEvent,
  useState,
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { PROJECT_MENU_COLOR } from "consts";
import { DotIcon } from "components/icon";
import { addProject } from "services/project";
import { useStore } from "stores";

interface Props {
  children: ReactElement;
}

function AddProject(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const isValid = !!name.trim().length;

  const [color, setColor] = useState("CHARCOAL");
  const colorToText = (c: string) => c.replace("_", "").toLowerCase();

  const projects = useStore((state) => state.getProjectsExceptInbox());
  const fetchProjects = useStore((state) => state.fetchProjects);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await addProject({
        name: name.trim(),
        color: color.toLowerCase(),
        is_favorite: false,
        view_style: "list",
        parent_id: null,
        child_order: projects.length,
      });
      onClose();
      fetchProjects();
    } catch {}
    setLoading(false);
  };

  return (
    <Fragment>
      {cloneElement(props.children, { onClick: onOpen })}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add project</ModalHeader>
          <ModalBody>
            <Box fontWeight="bold">Name</Box>
            <Input value={name} onChange={handleInput} size="sm" />
            <Box fontWeight="bold" marginTop={4}>
              Color
            </Box>
            <Menu>
              <MenuButton
                as={Box}
                width="100"
                border="1px solid #e2e8f0"
                borderRadius="3px"
              >
                <DotIcon color={PROJECT_MENU_COLOR[color]} />
                {colorToText(color)}
              </MenuButton>
              <MenuList width="400px" height="300px" overflow="auto">
                {Object.keys(PROJECT_MENU_COLOR).map((c) => (
                  <MenuItem key={c} onClick={setColor.bind(null, c)}>
                    <DotIcon color={PROJECT_MENU_COLOR[c]} />
                    {colorToText(c)}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="primary"
              isDisabled={!isValid}
              onClick={handleSubmit}
              isLoading={loading}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default AddProject;
