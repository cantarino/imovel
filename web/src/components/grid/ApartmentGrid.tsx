import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Apartment,
  useApartmentsQuery,
  useDeleteApartmentMutation,
} from "../../generated/graphql";
import { getImagesUrls } from "../../utils/getImage";
import { DeleteModal } from "../modal/DeleteModal";
import { DetailModal } from "../modal/DetailModal";
import { SelectNeighborhood } from "../select/SelectNeighborhood";

interface ApartmentGridProps {}

export const ApartmentGrid: React.FC<ApartmentGridProps> = () => {
  //Router hook
  const router = useRouter();

  //Images hook
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getImagesUrls("apartment", 200);
      setImages(result);
    };

    fetchData();
  }, []);

  //modal hooks
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isInfoOpen,
    onOpen: onInfoOpen,
    onClose: onInfoClose,
  } = useDisclosure();

  //neighborhood hook
  const [neighborhoodId, setNeighborhoodId] = useState<number | undefined>(
    undefined
  );

  //Apartment hooks
  const [, deleteApartment] = useDeleteApartmentMutation();
  const [{ data, fetching, error }, getApartments] = useApartmentsQuery({
    variables: { neighborhoodId },
  });
  const [selectedApartment, setSelectedApartment] = useState<
    Apartment | undefined
  >(undefined);
  return (
    <Box mt={3}>
      <SimpleGrid minChildWidth="300px" spacing={5}>
        <SelectNeighborhood
          flex
          noRegister
          selectNeighborhood={(id?: number) => setNeighborhoodId(id)}
        />
        <Button
          leftIcon="add"
          variantColor="teal"
          variant="solid"
          onClick={() => router.push("/register/apartment")}
        >
          Cadastrar apartamento
        </Button>
      </SimpleGrid>
      {data && data.apartments.length > 0 ? (
        <SimpleGrid mt={3} minChildWidth="400px" spacing={5}>
          {data.apartments.map((apt) => (
            <Box key={apt.id} p={5} maxW="700px" shadow="md" borderWidth="1px">
              <Flex>
                <Image
                  size="10rem"
                  src={images ? images[apt.id % 200] : ""}
                  fallbackSrc="https://via.placeholder.com/200?text=Not+Found"
                />
                <Box paddingLeft={4}>
                  <Heading fontSize="xl">
                    Apartamento em {apt.address?.street}, {apt.address?.number}
                  </Heading>
                  <Text
                    mt={3}
                    fontSize="sm"
                    color="gray.500"
                    textTransform="uppercase"
                  >
                    {apt.bedrooms} Quartos &bull; {apt.suites} Suítes &bull;{" "}
                    {apt.livingRooms} Salas
                  </Text>
                  <Text mt={3}>R$ {apt.rent.toFixed(2)}</Text>
                  <Text mt={3}>{apt.description?.substring(0, 50)}</Text>
                  <Flex justify="flex-end" align="right">
                    <Box mr={3}>
                      <IconButton
                        size="sm"
                        variantColor="blue"
                        aria-label="delete"
                        icon="info"
                        onClick={() => {
                          setSelectedApartment(apt as Apartment);
                          onInfoOpen();
                        }}
                      />
                      <DetailModal
                        images={images}
                        apartment={selectedApartment}
                        isOpen={isInfoOpen}
                        onClose={onInfoClose}
                      />
                    </Box>
                    <Box>
                      <IconButton
                        size="sm"
                        variantColor="red"
                        aria-label="delete"
                        icon="delete"
                        onClick={onDeleteOpen}
                      />
                      <DeleteModal
                        onDelete={() => {
                          deleteApartment({ id: apt.id }).then(() =>
                            getApartments({ requestPolicy: "network-only" })
                          );
                        }}
                        isOpen={isDeleteOpen}
                        onClose={onDeleteClose}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text fontSize="3xl" textAlign="center" mt={10}>
          Não foi encontrado nenhum registro
        </Text>
      )}
    </Box>
  );
};
