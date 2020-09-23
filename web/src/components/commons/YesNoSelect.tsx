import { FormLabel, Select } from "@chakra-ui/core";
import React from "react";

interface YesNoSelectProps {
  label: string;
  selectOption: any;
  className?: any;
}

export const YesNoSelect: React.FC<YesNoSelectProps> = ({
  label,
  selectOption,
  className,
}) => {
  return (
    <div className={className}>
      <FormLabel>{label}</FormLabel>
      <Select
        onChange={(event) => {
          selectOption(event.target.value == "true");
        }}
      >
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </Select>
    </div>
  );
};
