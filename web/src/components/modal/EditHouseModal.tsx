import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/core";
import { Formik } from "formik";
import React from "react";
import { House } from "../../generated/graphql";
import { parseFromHouseForm } from "../../utils/parsers";
import { RegisterHouseSchema } from "../../utils/schemas";
import { HouseForm } from "../form/HouseForm";

interface EditHouseModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  house?: House;
  onSave: any;
}

export const EditHouseModal: React.FC<EditHouseModalProps> = ({
  isOpen,
  onClose,
  house,
  onSave,
  title = "Editar Informações",
}) => {
  return (
    <Box>
      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Formik
                validationSchema={RegisterHouseSchema}
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                  bedrooms: house?.bedrooms.toString() ?? "",
                  suites: house?.suites.toString() ?? "",
                  livingRooms: house?.livingRooms.toString() ?? "",
                  parkingSpots: house?.parkingSpots.toString() ?? "",
                  size: house?.size.toString() ?? "",
                  hasCloset: house?.hasCloset ?? false,
                  description: house?.description ?? "",
                  rent: house?.rent.toString() ?? "",
                  //address
                  street: house?.address?.street ?? "",
                  number: house?.address?.number.toString() ?? "",
                  postalCode: house?.address?.postalCode ?? "",
                  neighborhoodId:
                    house?.address?.neighborhoodId.toString() ?? "",
                }}
                onSubmit={(values) => {
                  onClose();
                  onSave(parseFromHouseForm(values));
                }}
              >
                {({ isSubmitting, errors, values }) => (
                  <HouseForm
                    showModalButtons
                    house={house}
                    isSubmitting={isSubmitting}
                    errors={errors}
                    values={values}
                    onClose={onClose}
                  />
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
