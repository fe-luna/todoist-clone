import React, { ReactElement, Fragment, cloneElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import AddTodo from "components/add-todo";
import styles from "./style.module.scss";

interface Props {
  children: ReactElement;
}

function AddProjectModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      {cloneElement(props.children, { onClick: onOpen })}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="transparent" />
        <ModalContent className={styles.modalContent}>
          <AddTodo onClose={onClose} />
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default AddProjectModal;
