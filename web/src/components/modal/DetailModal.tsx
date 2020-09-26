import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { Apartment, House } from "../../generated/graphql";

interface DetailModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  apartment?: Apartment;
  house?: House;
  images: any[];
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title = "Detalhes",
  apartment,
  house,
  images,
}) => {
  let home = apartment ?? house;
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading fontSize="xl">
                {apartment ? "Apartamento" : "Casa"} em {home?.address?.street},{" "}
                {home?.address?.number} - {home?.address?.neighborhood?.name}
              </Heading>
              <Flex mt={3}>
                <Image
                  size="200px"
                  fallbackSrc="https://via.placeholder.com/200?text=Not+Found"
                  src={images ? images[home?.id ?? 0 % 200] : ""}
                />
                <Image
                  ml={2}
                  size="200px"
                  src={images ? images[(home?.id ?? 0 % 100) + 50] : ""}
                  fallbackSrc="https://via.placeholder.com/200?text=Not+Found"
                />
              </Flex>
              <Text
                mt={3}
                fontSize="sm"
                color="gray.500"
                textTransform="uppercase"
              >
                {home?.bedrooms} Quartos &bull; {home?.suites} Suítes &bull;{" "}
                {home?.livingRooms} Salas &bull; {home?.parkingSpots} Vagas na
                garagem
              </Text>
              <Text mt={3}>{apartment?.description}</Text>
              <Text mt={3}>
                <b>Aluguel</b> - R$ {home?.rent.toFixed(2)}
              </Text>
              {apartment ? (
                <Text>
                  <b>Condomínio</b> - R$ {apartment?.buildingRent.toFixed(2)}
                </Text>
              ) : null}
              <Text mt={3}>
                <b>Área</b> - {home?.size.toFixed(1)} m&sup2;
                <br />
                <b>Armário embutido?</b> - {home?.hasCloset ? "Sim" : "Nāo"}
                <br />
              </Text>
              {apartment ? (
                <Text>
                  <b>Prédio com porteiro?</b> -{" "}
                  {apartment?.hasDoorman ? "Sim" : "Nāo"}
                </Text>
              ) : null}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="red" onClick={() => onClose()}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
