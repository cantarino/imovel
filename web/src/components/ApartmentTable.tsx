import { Button, Image, Stack } from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { useApartmentsQuery } from "../generated/graphql";
import Table from "./commons/Table";
import { SelectNeighborhood } from "./SelectNeighborhood";

interface ApartmentTableProps {}

export const ApartmentTable: React.FC<ApartmentTableProps> = () => {
  const router = useRouter();
  const [apartmentsResponse, getApartments] = useApartmentsQuery();
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
            <Table.THead.TH>Condomínio</Table.THead.TH>
          </Table.THead.TR>
        </Table.THead>

        <Table.TBody>
          {apartmentsResponse.data ? (
            apartmentsResponse.data.apartments.map((apartment) => (
              <Table.TBody.TR key={apartment.id}>
                <Table.TBody.TD>
                  <Image
                    size="2rem"
                    rounded="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                </Table.TBody.TD>
                <Table.TBody.TD>{apartment.bedrooms}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.suites}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.livingRooms}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.parkingSpots}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.size}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.rent}</Table.TBody.TD>
                <Table.TBody.TD>{apartment.buildingRent}</Table.TBody.TD>
              </Table.TBody.TR>
            ))
          ) : (
            <Table.TBody.TR>
              <Table.TBody.TD>
                Nao foi encontrado nenhum apartamento
              </Table.TBody.TD>
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
        onClick={() => router.push("/register/apartment")}
      >
        Cadastrar novo apartamento
      </Button>
    </Stack>
  );
};
