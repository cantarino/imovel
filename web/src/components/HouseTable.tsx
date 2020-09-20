import { Button, Image, Stack } from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { useHousesQuery } from "../generated/graphql";
import Table from "./commons/Table";
import { SelectNeighborhood } from "./SelectNeighborhood";

interface HouseTableProps {}

export const HouseTable: React.FC<HouseTableProps> = () => {
  const router = useRouter();
  const [housesResponse, getHouses] = useHousesQuery();
  return (
    <Stack mt={2} spacing={3}>
      <SelectNeighborhood />
      <Table>
        <Table.THead>
          <Table.THead.TR>
            <Table.THead.TH>Imagem</Table.THead.TH>
            <Table.THead.TH>Quartos</Table.THead.TH>
            <Table.THead.TH>Suítes</Table.THead.TH>
            <Table.THead.TH>Salas de estar</Table.THead.TH>
            <Table.THead.TH>Vagas</Table.THead.TH>
            <Table.THead.TH>Área</Table.THead.TH>
            <Table.THead.TH>Aluguel</Table.THead.TH>
          </Table.THead.TR>
        </Table.THead>

        <Table.TBody>
          {housesResponse.data ? (
            housesResponse.data.houses.length > 0 ? (
              housesResponse.data.houses.map((house) => (
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
            )
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
        ml={"70%"}
        leftIcon="add"
        variantColor="teal"
        variant="solid"
        onClick={() => router.push("/register/house")}
      >
        Cadastrar nova casa
      </Button>
    </Stack>
  );
};
