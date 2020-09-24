import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/core";
import React from "react";

interface DeleteModalProps {
  title?: string;
  body?: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: any;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  title = "Deseja deletar?",
  body = "Essa açāo é irreversível",
  onDelete,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variantColor="red"
              onClick={() => {
                onClose();
                onDelete();
              }}
            >
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
