import { Button, Input, Select, Stack } from "@chakra-ui/core";
import React, { useState } from "react";
import Table from "../components/Table";
import { Wrapper } from "../components/Wrapper";
const USERS = [
  {
    id: 1,
    name: "Felippe Rodrigo Puhle",
    city: "São José do Cedro",
    state: "Santa Catarina",
  },
  {
    id: 2,
    name: "Robson Perasolli",
    city: "São Miguel do Oeste",
    state: "Santa Catarina",
  },
  {
    id: 3,
    name: "Marcelo Both",
    city: "São Miguel do Oeste",
    state: "Santa Catarina",
  },
  {
    id: 4,
    name: "Fernando Almeida",
    city: "São Miguel do Oeste",
    state: "Santa Catarina",
  },
];

const Index = () => {
  const [insertNewNeighborhood, toggleSelect] = useState(false);
  return (
    <Wrapper>
      <Stack spacing={3}>
        {!insertNewNeighborhood ? (
          <Select
            onChange={(event) => {
              if (event.target.value == "") toggleSelect(true);
            }}
            placeholder="Selecione o bairro"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="">Outro</option>
          </Select>
        ) : (
          <Stack spacing={3}>
            <Input
              name="newNeighborhood"
              placeholder="Informe o novo bairro a ser cadastrado"
              type="textarea"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                type="submit"
                variantColor="teal"
                onClick={() => {
                  console.log("cadastrar");
                  toggleSelect(false);
                }}
              >
                Cadastrar novo bairro
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  toggleSelect(false);
                }}
              >
                Mostrar bairros cadastrados
              </Button>
            </div>
          </Stack>
        )}
        <Table>
          <Table.THead>
            <Table.THead.TR>
              <Table.THead.TH>ID</Table.THead.TH>
              <Table.THead.TH>Name</Table.THead.TH>
              <Table.THead.TH>City</Table.THead.TH>
              <Table.THead.TH>State</Table.THead.TH>
            </Table.THead.TR>
          </Table.THead>

          <Table.TBody>
            {USERS.map((user) => (
              <Table.TBody.TR key={user.id}>
                <Table.TBody.TD>{user.id}</Table.TBody.TD>
                <Table.TBody.TD>{user.name}</Table.TBody.TD>
                <Table.TBody.TD>{user.city}</Table.TBody.TD>
                <Table.TBody.TD>{user.state}</Table.TBody.TD>
              </Table.TBody.TR>
            ))}
          </Table.TBody>
        </Table>
      </Stack>
    </Wrapper>
  );
};

export default Index;
