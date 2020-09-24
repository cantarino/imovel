import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  SimpleGrid,
  Stack,
  useToast,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import { InputField } from "../../components/commons/Inputs/InputField";
import { SwitchField } from "../../components/commons/Inputs/SwitchField";
import { Wrapper } from "../../components/commons/Wrapper";
import { SelectNeighborhood } from "../../components/SelectNeighborhood";
import { useRegisterApartmentMutation } from "../../generated/graphql";

interface registerApartmentProps {}

const RegisterApartmentSchema = Yup.object().shape({
  bedrooms: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  suites: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  livingRooms: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  parkingSpots: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  size: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  postalCode: Yup.string().required("Campo obrigatório"),
  neighborhoodId: Yup.number().required("Campo obrigatório"),
  street: Yup.string().required("Campo obrigatório"),
  number: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  rent: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
  description: Yup.string(),
  floor: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
  apartmentNumber: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
  buildingRent: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
});

const RegisterApartment: React.FC<registerApartmentProps> = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [, registerApartment] = useRegisterApartmentMutation();
  return (
    <Wrapper>
      <Heading size={"2xl"} mb={4}>
        Cadastrar apartamento
      </Heading>
      <Formik
        validationSchema={RegisterApartmentSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          bedrooms: "",
          suites: "",
          livingRooms: "",
          parkingSpots: "",
          size: "",
          hasCloset: false,
          description: "",
          rent: "",
          //address
          street: "",
          number: "",
          postalCode: "",
          neighborhoodId: "",
          //apartment
          floor: "",
          apartmentNumber: "",
          buildingRent: "",
          hasDoorman: false,
        }}
        onSubmit={async (values) => {
          const response = await registerApartment({
            data: {
              hasCloset: values.hasCloset,
              hasDoorman: values.hasDoorman,
              floor: parseInt(values.floor),
              apartmentNumber: parseInt(values.apartmentNumber),
              buildingRent: parseInt(values.buildingRent),
              bedrooms: parseInt(values.bedrooms),
              size: parseInt(values.size),
              suites: parseInt(values.suites),
              livingRooms: parseInt(values.livingRooms),
              parkingSpots: parseInt(values.parkingSpots),
              rent: parseInt(values.rent),
              description: values.description,
              address: {
                street: values.street,
                postalCode: values.postalCode,
                neighborhoodId: parseInt(values.neighborhoodId),
                number: parseInt(values.number),
              },
            },
          });
          if (response.data?.insertApartment?.errors) {
            let errors = response.data?.insertApartment?.errors;
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
              description: "Apartamento cadastrado com sucesso",
              position: "top-right",
              status: "success",
              duration: 7000,
              isClosable: true,
            });
          }
        }}
      >
        {({ isSubmitting, errors, values }) => (
          <Form>
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
                  name="description"
                  placeholder="Informe alguma descriçāo adicional"
                  label="Descrição"
                  type="textarea"
                />
              </Box>
              <SimpleGrid minChildWidth="200px" spacing={4}>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  variantColor="teal"
                >
                  Cadastrar
                </Button>
                <Button onClick={() => router.push("/")}>Voltar</Button>
              </SimpleGrid>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default RegisterApartment;
