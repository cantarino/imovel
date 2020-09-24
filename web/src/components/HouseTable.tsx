import {
  Button,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDeleteHouseMutation, useHousesQuery } from "../generated/graphql";
import Table from "./commons/Table";
import { DeleteModal } from "./DeleteModal";
import { SelectNeighborhood } from "./SelectNeighborhood";

interface HouseTableProps {}

export const HouseTable: React.FC<HouseTableProps> = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [neighborhoodId, setNeighborhoodId] = useState<number | undefined>(
    undefined
  );
  const [{ data }, getHouses] = useHousesQuery({
    variables: { neighborhoodId },
  });
  const [, deleteHouse] = useDeleteHouseMutation();
  return (
    <Stack mt={2} spacing={3}>
      <SelectNeighborhood
        selectNeighborhood={(id?: number) => setNeighborhoodId(id)}
      />
      <Table>
        <Table.THead>
          <Table.THead.TR>
            <Table.THead.TH>Foto</Table.THead.TH>
            <Table.THead.TH>Quartos</Table.THead.TH>
            <Table.THead.TH>Suítes</Table.THead.TH>
            <Table.THead.TH>Salas de estar</Table.THead.TH>
            <Table.THead.TH>Vagas</Table.THead.TH>
            <Table.THead.TH>Área</Table.THead.TH>
            <Table.THead.TH>Aluguel</Table.THead.TH>
            <Table.THead.TH></Table.THead.TH>
          </Table.THead.TR>
        </Table.THead>

        <Table.TBody>
          {data && data.houses.length > 0 ? (
            data.houses.map((house) => (
              <Table.TBody.TR key={house.id}>
                <Table.TBody.TD>
                  <Image
                    size="2rem"
                    rounded="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                </Table.TBody.TD>
                <Table.TBody.TD>{house.bedrooms}</Table.TBody.TD>
                <Table.TBody.TD>{house.suites}</Table.TBody.TD>
                <Table.TBody.TD>{house.livingRooms}</Table.TBody.TD>
                <Table.TBody.TD>{house.parkingSpots}</Table.TBody.TD>
                <Table.TBody.TD>{house.size}</Table.TBody.TD>
                <Table.TBody.TD>{house.rent}</Table.TBody.TD>
                <Table.TBody.TD>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="delete"
                    icon="delete"
                    onClick={onOpen}
                  />
                  <DeleteModal
                    onDelete={() => {
                      deleteHouse({ id: house.id }).then(() =>
                        getHouses({ requestPolicy: "network-only" })
                      );
                    }}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </Table.TBody.TD>
              </Table.TBody.TR>
            ))
          ) : (
            <Table.TBody.TR>
              <Table.TBody.TD></Table.TBody.TD>
              <Table.TBody.TD></Table.TBody.TD>
              <Table.TBody.TD></Table.TBody.TD>
              <Table.TBody.TD>Nao foi encontrada nenhuma casa</Table.TBody.TD>
              <Table.TBody.TD></Table.TBody.TD>
              <Table.TBody.TD></Table.TBody.TD>
              <Table.TBody.TD></Table.TBody.TD>
            </Table.TBody.TR>
          )}
        </Table.TBody>
      </Table>
      <Button
        mt={2}
        leftIcon="add"
        variantColor="teal"
        variant="solid"
        onClick={() => router.push("/register/house")}
      >
        Cadastrar casa
      </Button>
    </Stack>
  );
};
