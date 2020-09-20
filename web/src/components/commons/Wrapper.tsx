import { Box } from "@chakra-ui/core";
import React from "react";

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box mt={8} mx="auto" maxW={variant === "regular" ? "80%" : "40%"}>
      {children}
    </Box>
  );
};
