import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Switch,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  swSize?: "sm" | "md" | "lg";
};

export const SwitchField: React.FC<SwitchProps> = ({
  label,
  size: _,
  swSize = "sm",
  style,
  className,
  value,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl className={className} isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Switch
        defaultIsChecked={field.value}
        {...field}
        {...props}
        size={swSize}
        id={field.name}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
