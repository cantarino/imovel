import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Stack,
  useToast,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import styles from "../../assets/styles/styles.module.css";
import { InputField } from "../../components/commons/InputField";
import { Wrapper } from "../../components/commons/Wrapper";
import { YesNoSelect } from "../../components/commons/YesNoSelect";
import { SelectNeighborhood } from "../../components/SelectNeighborhood";
import { useRegisterHouseMutation } from "../../generated/graphql";

interface registerHouseProps {}

const RegisterHouseSchema = Yup.object().shape({
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
});

const RegisterHouse: React.FC<registerHouseProps> = ({}) => {
  const toast = useToast();
  const [hasCloset, toggleCloset] = useState<boolean>(true);
  const [, registerHouse] = useRegisterHouseMutation();
  return (
    <Wrapper>
      <Heading size={"2xl"} mb={4}>
        Cadastrar nova casa
      </Heading>
      <Formik
        validationSchema={RegisterHouseSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          bedrooms: "",
          suites: "",
          livingRooms: "",
          parkingSpots: "",
          size: "",
          hasCloset: hasCloset,
          description: "",
          rent: "",
          //address
          street: "",
          number: "",
          postalCode: "",
          neighborhoodId: "",
        }}
        onSubmit={async (values) => {
          const response = await registerHouse({
            data: {
              hasCloset,
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
          if (response.data?.insertHouse?.errors) {
            let errors = response.data?.insertHouse?.errors;
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
              description: "Casa cadastrada com sucesso",
              position: "top-right",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
          }
        }}
      >
        {({ isSubmitting, errors, values }) => (
          <Form>
            <Stack spacing={4}>
              <Box className={styles.justifyContent}>
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
              </Box>
              <Box className={styles.justifyContent}>
                <InputField
                  className={styles.w30}
                  name="parkingSpots"
                  placeholder="Informe a quantidade"
                  label="Vagas"
                  type="number"
                />
                <InputField
                  className={styles.w30}
                  name="size"
                  placeholder="Informe a área"
                  label="Área"
                  type="number"
                />
                <YesNoSelect
                  className={styles.w30}
                  label={"Armário embutido?"}
                  selectOption={(opt: boolean) => toggleCloset(opt)}
                />
              </Box>
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
                  name="description"
                  placeholder="Informe alguma descriçāo adicional"
                  label="Descrição"
                  type="textarea"
                />
              </Box>
              <Button
                mt={2}
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                Cadastrar
              </Button>
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

export default RegisterHouse;
