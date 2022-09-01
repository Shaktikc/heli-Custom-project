import { Text } from "@chakra-ui/react";
import React from "react";

export const PageTitle = ({ title }) => {
  return (
    <Text fontSize={"xl"} color="blackAlpha.900">
      {title}
    </Text>
  );
};
