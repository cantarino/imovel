import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  ModalFooter,
  SimpleGrid,
  Stack,
} from "@chakra-ui/core";
import { Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { House } from "../../generated/graphql";
import { InputField } from "../commons/Inputs/InputField";
import { SwitchField } from "../commons/Inputs/SwitchField";
import { SelectNeighborhood } from "../select/SelectNeighborhood";

interface HouseFormProps {
  house?: House;
  errors: any;
  values: any;
  onClose: () => void;
  isSubmitting: boolean;
  showModalButtons?: boolean;
}

export const HouseForm: React.FC<HouseFormProps> = ({
  errors,
  house,
  values,
  onClose,
  isSubmitting,
  showModalButtons,
}) => {
  const router = useRouter();

  return (
    <Form>
      <Stack spacing={4}>
        <SimpleGrid minChildWidth="200px" spacing={4}>
          <InputField
            name="bedrooms"
            placeholder="Informe a quantidade"
            label="Quartos"
            type="number"
          />
          <InputField
            name="suites"
            placeholder="Informe a quantidade"
            label="Suítes"
            type="number"
          />
          <InputField
            name="livingRooms"
            placeholder="Informe a quantidade"
            label="Salas de estar"
            type="number"
          />
        </SimpleGrid>
        <SimpleGrid minChildWidth="200px" spacing={4}>
          <InputField
            name="parkingSpots"
            placeholder="Informe a quantidade"
            label="Vagas"
            type="number"
          />
          <InputField
            name="size"
            placeholder="Informe a área"
            label="Área"
            type="number"
          />
        </SimpleGrid>
        <Box>
          <InputField
            name="rent"
            placeholder="Informe o aluguel da casa"
            label="Aluguel"
            type="number"
          />
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.neighborhoodId}>
            <SelectNeighborhood
              initialValue={house?.address?.neighborhoodId}
              selectNeighborhood={(id?: number) => {
                values.neighborhoodId = id?.toString() ?? "";
              }}
              placeHolder={"Selecione o bairro"}
            />
            {errors.neighborhoodId ? (
              <FormErrorMessage>{errors.neighborhoodId}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Box>
        <Box>
          <InputField
            name="postalCode"
            placeholder="Informe o CEP"
            label="CEP"
            type="textarea"
          />
        </Box>
        <Box>
          <InputField
            name="street"
            placeholder="Informe o nome da rua"
            label="Rua"
            type="textarea"
          />
        </Box>
        <Box>
          <InputField
            name="number"
            placeholder="Informe o número da casa"
            label="Número"
            type="number"
          />
        </Box>
        <Box>
          <InputField
            textarea
            name="description"
            placeholder="Informe alguma descriçāo adicional"
            label="Descrição"
            type="textarea"
          />
        </Box>
        <SwitchField
          color="green"
          swSize="lg"
          name="hasCloset"
          label="Armário embutido?"
        />
        {showModalButtons ? (
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variantColor="teal" isLoading={isSubmitting}>
              Salvar
            </Button>
          </ModalFooter>
        ) : (
          <SimpleGrid minChildWidth="200px" spacing={4}>
            <Button onClick={() => router.push("/")}>Voltar</Button>
            <Button type="submit" isLoading={isSubmitting} variantColor="teal">
              Cadastrar
            </Button>
          </SimpleGrid>
        )}
      </Stack>
    </Form>
  );
};
