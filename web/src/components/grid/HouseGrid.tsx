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
  House,
  useDeleteHouseMutation,
  useHousesQuery,
} from "../../generated/graphql";
import { getImagesUrls } from "../../utils/getImage";
import { DeleteModal } from "../modal/DeleteModal";
import { DetailModal } from "../modal/DetailModal";
import { SelectNeighborhood } from "../select/SelectNeighborhood";

interface HouseGridProps {}

export const HouseGrid: React.FC<HouseGridProps> = () => {
  //router
  const router = useRouter();

  //image hook
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getImagesUrls("house", 100);
      setImages(result);
    };

    fetchData();
  }, []);

  //modal hooks
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

  //neighborhood hooks
  const [neighborhoodId, setNeighborhoodId] = useState<number | undefined>(
    undefined
  );

  //house hooks
  const [{ data }, getHouses] = useHousesQuery({
    variables: { neighborhoodId },
  });
  const [, deleteHouse] = useDeleteHouseMutation();
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
                  <Text mt={3}>{house.description?.substring(0, 50)}</Text>
                  <Flex justify="flex-end" align="right">
                    <Box mr={3}>
                      <IconButton
                        size="sm"
                        variantColor="blue"
                        aria-label="delete"
                        icon="info"
                        onClick={() => {
                          setSelectedHouse(house as House);
                          onInfoOpen();
                        }}
                      />
                      <DetailModal
                        images={images}
                        house={selectedHouse}
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
        </SimpleGrid>
      ) : (
        <Text fontSize="3xl" textAlign="center" mt={10}>
          Não foi encontrado nenhum registro
        </Text>
      )}
    </Box>
  );
};
