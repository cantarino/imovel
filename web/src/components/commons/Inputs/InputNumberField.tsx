import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputNumberFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  precision?: number;
  step?: number;
};

export const InputNumberField: React.FC<InputNumberFieldProps> = ({
  label,
  size: _,
  precision = 2,
  step = 1,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <NumberInput precision={precision} step={step}></NumberInput>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
