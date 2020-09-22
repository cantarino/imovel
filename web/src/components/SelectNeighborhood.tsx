import {
  Button,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/core";
import React, { useState } from "react";
import {
  useNeighborhoodsQuery,
  useRegisterNeighborhoodMutation,
} from "../generated/graphql";
import styles from "../styles/styles.module.css";

interface SelectNeighborhoodProps {
  selectNeighborhood: any;
  placeHolder?: string;
}

export const SelectNeighborhood: React.FC<SelectNeighborhoodProps> = ({
  selectNeighborhood,
  placeHolder = "Todos",
}) => {
  let input = "";
  const toast = useToast();
  const [insertNewNeighborhood, toggleSelect] = useState(false);
  const [{ data, fetching }, getNeighborhoods] = useNeighborhoodsQuery();
  const [, insertNeighborhood] = useRegisterNeighborhoodMutation();
  return !insertNewNeighborhood ? (
    <>
      <FormLabel>Bairro</FormLabel>
      <Select
        aria-label="Bairro"
        isDisabled={fetching}
        onChange={async (event) => {
          if (event.target.value == "0") toggleSelect(true);
          else selectNeighborhood(parseInt(event.target.value));
        }}
        placeholder={placeHolder}
      >
        {data ? (
          data.neighborhoods.map((x: any) => (
            <option value={x.id} key={x.id}>
              {x.name}
            </option>
          ))
        ) : (
          <option value="0" key={0}>
            Carregando...
          </option>
        )}
        <option value="0">Outro</option>
      </Select>
    </>
  ) : (
    <Stack spacing={3}>
      <Input
        name="newNeighborhood"
        placeholder="Informe o novo bairro a ser cadastrado"
        type="textarea"
        onChange={(evt: any) => (input = evt.target.value)}
      />
      <div className={styles.justifyContent}>
        <Button
          type="submit"
          variantColor="teal"
          onClick={async () => {
            const response = await insertNeighborhood({ neighborhood: input });
            let errors = response.data?.insertNeighborhood?.errors;
            if (errors) {
              let message: string;
              message = errors[0].message;
              toast({
                title: "Erro",
                description: message,
                position: "top-right",
                status: "error",
                duration: 4000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Sucesso",
                description: "Bairro cadastrado com sucesso",
                position: "top-right",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }
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
  );
};
