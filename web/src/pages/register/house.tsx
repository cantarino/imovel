import { Heading, useToast } from "@chakra-ui/core";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper } from "../../components/commons/Wrapper";
import { HouseForm } from "../../components/form/HouseForm";
import { useRegisterHouseMutation } from "../../generated/graphql";
import { RegisterHouseSchema } from "../../utils/schemas";

interface registerHouseProps {}

const RegisterHouse: React.FC<registerHouseProps> = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [, registerHouse] = useRegisterHouseMutation();
  return (
    <Wrapper>
      <Heading size={"2xl"} mb={4}>
        Cadastrar casa
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
          hasCloset: false,
          description: "",
          rent: "",
          //address
          street: "",
          number: "",
          postalCode: "",
          neighborhoodId: "",
        }}
        onSubmit={async (values) => {
          debugger;
          const response = await registerHouse({
            data: {
              hasCloset: values.hasCloset,
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
          <HouseForm
            isSubmitting={isSubmitting}
            errors={errors}
            values={values}
            onClose={() => {}}
          />
        )}
      </Formik>
    </Wrapper>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default RegisterHouse;
