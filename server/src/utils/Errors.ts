import { FieldError } from "./FieldError";

function getErrorMessage(key: string) {
  const errorMessages = require("./ErrorMessages.json");
  return errorMessages[key];
}

export const NEIGHBORHOOD_NOT_FOUND_ERROR: FieldError = {
  field: "neighborhoodId",
  message: getErrorMessage("neighborhood_not_found"),
};

export const ADDRESS_NOT_FOUND_ERROR: FieldError = {
  field: "addressId",
  message: getErrorMessage("address_not_found"),
};

export const NO_ADDRESS_ERRORS: FieldError[] = [
  {
    field: "addressId",
    message: getErrorMessage("address_needed"),
  },
  {
    field: "address",
    message: getErrorMessage("address_needed"),
  },
];

export const REPEATED_ADDRESS_ERROR: FieldError = {
  field: "address",
  message: getErrorMessage("repeated_address"),
};

export const REPEATED_ENTITY_ERROR: FieldError = {
  field: "all",
  message: getErrorMessage("repeated_entity"),
};

export const ID_NOT_FOUND_ERROR: FieldError = {
  field: "id",
  message: getErrorMessage("id_not_found"),
};
