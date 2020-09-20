import { Button, Input, Select, Stack } from "@chakra-ui/core";
import React, { useState } from "react";
import { OperationResult } from "urql";
import Table from "../components/Table";
import { Wrapper } from "../components/Wrapper";
import {
  RegisterNeighborhoodMutation,
  useNeighborhoodsQuery,
  useRegisterNeighborhoodMutation,
} from "../generated/graphql";
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

function SelectNeighborhood(props) {
  return (
    <Select
      onChange={(event) => {
        if (event.target.value == "") props.toggleSelect(true);
      }}
      placeholder="Selecione o bairro"
    >
      {props.data ? (
        props.data.neighborhoods.map((x) => (
          <option value={x.id} key={x.id}>
            {x.name}
          </option>
        ))
      ) : (
        <option value="0" key={0}>
          Carregando...
        </option>
      )}
      <option value="">Outro</option>
    </Select>
  );
}

function RegisterNeighborhood(props) {
  let input = "";
  return (
    <Stack spacing={3}>
      <Input
        name="newNeighborhood"
        placeholder="Informe o novo bairro a ser cadastrado"
        type="textarea"
        onChange={(evt) => (input = evt.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          variantColor="teal"
          onClick={async () => {
            const response: OperationResult<RegisterNeighborhoodMutation> = await props.insertNeighborhood(
              { neighborhood: input }
            );
            if (response.data?.insertNeighborhood?.errors)
              console.log("error", response.data.insertNeighborhood.errors);
            props.toggleSelect(false);
          }}
        >
          Cadastrar novo bairro
        </Button>
        <Button
          type="submit"
          onClick={() => {
            props.toggleSelect(false);
          }}
        >
          Mostrar bairros cadastrados
        </Button>
      </div>
    </Stack>
  );
}

const Index = () => {
  const [insertNewNeighborhood, toggleSelect] = useState(false);
  const [neighborhoodReponse, getNeighborhoods] = useNeighborhoodsQuery();
  const [, insertNeighborhood] = useRegisterNeighborhoodMutation();
  return (
    <Wrapper>
      <Stack spacing={3}>
        {!insertNewNeighborhood ? (
          <SelectNeighborhood
            data={neighborhoodReponse.data}
            toggleSelect={toggleSelect}
          />
        ) : (
          <RegisterNeighborhood
            insertNeighborhood={insertNeighborhood}
            toggleSelect={toggleSelect}
          />
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
