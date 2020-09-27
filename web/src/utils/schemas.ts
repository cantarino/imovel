import * as Yup from "yup";

export const RegisterApartmentSchema = Yup.object().shape({
  bedrooms: Yup.number()
    .min(1, "Somente números positivos")
    .required("Campo obrigatório"),
  suites: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
  livingRooms: Yup.number()
    .min(0, "Somente números positivos")
    .required("Campo obrigatório"),
  parkingSpots: Yup.number()
    .min(0, "Somente números positivos")
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

export const RegisterHouseSchema = Yup.object().shape({
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
