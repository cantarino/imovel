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
import { Apartment } from "../../generated/graphql";
import { parseFromAcitivityForm } from "../../utils/parsers";
import { RegisterApartmentSchema } from "../../utils/schemas";
import { ApartmentForm } from "../form/ApartmentForm";

interface EditApartmentModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  apartment?: Apartment;
  onSave: any;
}

export const EditApartmentModal: React.FC<EditApartmentModalProps> = ({
  isOpen,
  onClose,
  apartment,
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
                validationSchema={RegisterApartmentSchema}
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                  bedrooms: apartment?.bedrooms.toString() ?? "",
                  suites: apartment?.suites.toString() ?? "",
                  livingRooms: apartment?.livingRooms.toString() ?? "",
                  parkingSpots: apartment?.parkingSpots.toString() ?? "",
                  size: apartment?.size.toString() ?? "",
                  hasCloset: apartment?.hasCloset ?? false,
                  description: apartment?.description ?? "",
                  rent: apartment?.rent.toString() ?? "",
                  //address
                  street: apartment?.address?.street ?? "",
                  number: apartment?.address?.number.toString() ?? "",
                  postalCode: apartment?.address?.postalCode ?? "",
                  neighborhoodId:
                    apartment?.address?.neighborhoodId.toString() ?? "",
                  //apartment
                  floor: apartment?.floor.toString() ?? "",
                  apartmentNumber: apartment?.apartmentNumber.toString() ?? "",
                  buildingRent: apartment?.buildingRent.toString() ?? "",
                  hasDoorman: apartment?.hasDoorman ?? false,
                }}
                onSubmit={(values) => {
                  onClose();
                  onSave(parseFromAcitivityForm(values));
                }}
              >
                {({ isSubmitting, errors, values }) => (
                  <ApartmentForm
                    showButtons
                    apartment={apartment}
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
