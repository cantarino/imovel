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
import { Apartment } from "../../generated/graphql";
import { InputField } from "../commons/Inputs/InputField";
import { SwitchField } from "../commons/Inputs/SwitchField";
import { SelectNeighborhood } from "../select/SelectNeighborhood";

interface ApartmentFormProps {
  apartment?: Apartment;
  errors: any;
  values: any;
  onClose: () => void;
  isSubmitting: boolean;
  showButtons?: boolean;
}

export const ApartmentForm: React.FC<ApartmentFormProps> = ({
  errors,
  apartment,
  values,
  onClose,
  isSubmitting,
  showButtons,
}) => {
  const router = useRouter();

  return (
    <Form onChange={() => console.log("teste")}>
      <Stack spacing={4}>
        <SimpleGrid columns={3} spacing={4}>
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
        <SimpleGrid columns={2} spacing={4}>
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
            placeholder="Informe o aluguel do apartamento"
            label="Aluguel"
            type="number"
          />
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.neighborhoodId}>
            <SelectNeighborhood
              initialValue={apartment?.address?.neighborhoodId}
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
            placeholder="Informe o número do prédio"
            label="Número"
            type="number"
          />
        </Box>
        <SimpleGrid minChildWidth="200px" spacing={4}>
          <InputField
            name="floor"
            placeholder="Informe o andar"
            label="Andar"
            type="number"
          />
          <InputField
            name="apartmentNumber"
            placeholder="Informe o número do apartamento"
            label="Apartamento"
            type="number"
          />
          <InputField
            name="buildingRent"
            placeholder="Informe o valor"
            label="Condomínio"
            type="number"
          />
        </SimpleGrid>
        <SimpleGrid minChildWidth="200px" spacing={4}>
          <SwitchField
            color="green"
            swSize="lg"
            name="hasCloset"
            label="Armário embutido?"
            type="number"
          />
          <SwitchField
            color="green"
            swSize="lg"
            name="hasDoorman"
            label="Possui porteiro?"
          />
        </SimpleGrid>
        <Box>
          <InputField
            textarea
            name="description"
            placeholder="Informe alguma descriçāo adicional"
            label="Descrição"
            type="textarea"
          />
        </Box>
      </Stack>
      {showButtons ? (
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
    </Form>
  );
};
