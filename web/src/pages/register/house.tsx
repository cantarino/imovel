import { Box, Button, Stack } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputField } from "../../components/commons/InputField";
import { Wrapper } from "../../components/commons/Wrapper";
import { SelectNeighborhood } from "../../components/SelectNeighborhood";
import styles from "../../styles/styles.module.css";

interface registerHouseProps {}

const RegisterHouse: React.FC<registerHouseProps> = ({}) => {
  const [neighborhoodId, setNeighborhoodId] = useState<number | undefined>(
    undefined
  );
  return (
    <Wrapper>
      <Formik
        initialValues={{
          bedrooms: "",
          suites: "",
          livingRooms: "",
          parkingSpots: "",
          size: "",
          hasCloset: "",
          description: "",
          rent: "",
          address: {
            street: "",
            number: "",
            postalCode: "",
            neighborhoodId: neighborhoodId,
          },
        }}
        onSubmit={(values) => {
          values.address.neighborhoodId = neighborhoodId;
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
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
                <div style={{ width: "45%" }}>
                  <InputField
                    name="parkingSpots"
                    placeholder="Informe o número de vagas"
                    label="Vagas"
                    type="number"
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <InputField
                    name="size"
                    placeholder="Informe a área"
                    label="Área"
                    type="number"
                  />
                </div>
              </Box>
              <InputField
                name="hasCloset"
                placeholder="Informe a área (em metros quadrados)"
                label="Possui armario embutido?(olhar)"
                type="number"
              />
              <InputField
                name="rent"
                placeholder="Informe o aluguel do apartamento"
                label="Aluguel"
                type="number"
              />
              <Box>
                <SelectNeighborhood
                  selectNeighborhood={(id?: number) => setNeighborhoodId(id)}
                  placeHolder={"Selecione o bairro"}
                />
              </Box>
              <InputField
                name="postalCode"
                placeholder="Informe o CEP"
                label="CEP"
                type="textarea"
              />
              <InputField
                name="street"
                placeholder="Informe o nome da rua"
                label="Rua"
                type="textarea"
              />
              <InputField
                name="number"
                placeholder="Informe o número do prédio"
                label="Número"
                type="number"
              />
              <InputField
                name="description"
                placeholder="Informe alguma descriçāo adicional"
                label="Descrição"
                type="textarea"
              />
              <Button
                mt={4}
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
