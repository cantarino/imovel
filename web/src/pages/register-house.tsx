import { Button, Stack } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

interface registerHouseProps {}

const RegisterHouse: React.FC<registerHouseProps> = ({}) => {
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
          neighborhood: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              <InputField
                name="bedrooms"
                placeholder="Informe a quantidade de quartos que a casa possui"
                label="Quartos"
                type="number"
              />
              <InputField
                name="suites"
                placeholder="Informe a quantidade de suítes que a casa possui"
                label="Suítes"
                type="number"
              />
              <InputField
                name="livingRooms"
                placeholder="Informe a quantidade de salas de estar que a casa possui"
                label="Salas de estar"
                type="number"
              />
              <InputField
                name="parkingSpots"
                placeholder="Informe o número de vagas na garagem"
                label="Vagas"
                type="number"
              />
              <InputField
                name="size"
                placeholder="Informe a área (em metros quadrados)"
                label="Área"
                type="number"
              />
              <InputField
                name="hasCloset"
                placeholder="Informe a área (em metros quadrados)"
                label="Possui armario embutido?(olhar)"
                type="number"
              />
              <InputField
                name="description"
                placeholder="Informe alguma descriçāo adicional(mudar para textarea)"
                label="Descrição"
                type="textarea"
              />
              Bairro(Select)
              <Button
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
