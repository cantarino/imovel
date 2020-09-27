import { Heading, useToast } from "@chakra-ui/core";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper } from "../../components/commons/Wrapper";
import { ApartmentForm } from "../../components/form/ApartmentForm";
import { useRegisterApartmentMutation } from "../../generated/graphql";
import { RegisterApartmentSchema } from "../../utils/schemas";

interface registerApartmentProps {}

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
          <ApartmentForm
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

export default RegisterApartment;
