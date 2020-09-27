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
  useToast,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  House,
  useDeleteHouseMutation,
  useHousesQuery,
  useUpdateHouseMutation,
} from "../../generated/graphql";
import { getImagesUrls } from "../../utils/getImage";
import { DeleteModal } from "../modal/DeleteModal";
import { DetailModal } from "../modal/DetailModal";
import { EditHouseModal } from "../modal/EditHouseModal";
import { SelectNeighborhood } from "../select/SelectNeighborhood";

interface HouseGridProps {}

export const HouseGrid: React.FC<HouseGridProps> = () => {
  //router
  const router = useRouter();

  //image hook
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getImagesUrls("house", 200);
      setImages(result);
    };

    fetchData();
  }, []);

  //toast hook
  const toast = useToast();

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
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  //neighborhood hooks
  const [neighborhoodId, setNeighborhoodId] = useState<number | undefined>(
    undefined
  );

  //house hooks
  const [{ data }, getHouses] = useHousesQuery({
    variables: { neighborhoodId },
  });
  const [, deleteHouse] = useDeleteHouseMutation();
  const [, updateHouse] = useUpdateHouseMutation();
  const [selectedHouse, setSelectedHouse] = useState<House | undefined>(
    undefined
  );
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
          onClick={() => router.push("/register/house")}
        >
          Cadastrar casa
        </Button>
      </SimpleGrid>
      {data && data.houses.length > 0 ? (
        <SimpleGrid mt={3} minChildWidth="400px" spacing={5}>
          {data.houses.map((house) => (
            <Box
              key={house.id}
              p={5}
              maxW="700px"
              shadow="md"
              borderWidth="1px"
            >
              <Flex>
                <Image
                  size="10rem"
                  src={images ? images[house.id % 200] : ""}
                  fallbackSrc="https://via.placeholder.com/200?text=Not+Found"
                />
                <Box paddingLeft={4}>
                  <Heading fontSize="xl">
                    Casa em {house.address?.street}, {house.address?.number}
                  </Heading>
                  <Text
                    mt={3}
                    fontSize="sm"
                    color="gray.500"
                    textTransform="uppercase"
                  >
                    {house.bedrooms} Quartos &bull; {house.suites} Suítes &bull;{" "}
                    {house.livingRooms} Salas
                  </Text>
                  <Text mt={3}>R$ {house.rent.toFixed(2)}</Text>
                  <Text mt={3}>
                    {house.description
                      ? house.description.length > 50
                        ? house.description.substring(0, 50).concat("...")
                        : house.description
                      : ""}
                  </Text>
                  <Flex justify="flex-end" align="right">
                    <IconButton
                      mr={3}
                      size="sm"
                      aria-label="edit"
                      icon="edit"
                      onClick={() => {
                        setSelectedHouse(house as House);
                        onEditOpen();
                      }}
                    />
                    <IconButton
                      mr={3}
                      size="sm"
                      variantColor="blue"
                      aria-label="delete"
                      icon="info"
                      onClick={() => {
                        setSelectedHouse(house as House);
                        onInfoOpen();
                      }}
                    />
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
                          deleteHouse({ id: house.id }).then(() =>
                            getHouses({ requestPolicy: "network-only" })
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
          <DetailModal
            images={images}
            house={selectedHouse}
            isOpen={isInfoOpen}
            onClose={onInfoClose}
          />
          <EditHouseModal
            house={selectedHouse}
            isOpen={isEditOpen}
            onClose={onEditClose}
            onSave={(data: any) => {
              updateHouse({ data, id: selectedHouse!.id }).then((res) => {
                let errors = res.data?.updateHouse?.errors;
                if (errors) {
                  errors.forEach((error) => {
                    toast({
                      title: "Erro",
                      description: error.message,
                      position: "top-right",
                      status: "error",
                      duration: 4000,
                      isClosable: true,
                    });
                  });
                } else {
                  toast({
                    title: "Sucesso",
                    description: "Casa atualizada com sucesso",
                    position: "top-right",
                    status: "success",
                    duration: 7000,
                    isClosable: true,
                  });
                  getHouses({ requestPolicy: "network-only" });
                }
              });
            }}
          />
        </SimpleGrid>
      ) : (
        <Text fontSize="3xl" textAlign="center" mt={10}>
          Não foi encontrado nenhum registro
        </Text>
      )}
    </Box>
  );
};
