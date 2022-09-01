import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const StatusUI = ({ title, number, color }) => {
  return (
    <Box
      bgColor={"gray.200"}
      w="10rem"
      // h="5rem"
      p="0.5rem"
      borderRadius={"4px"}
      lineHeight="1.8rem"
      mt="1rem"
    >
      <Text fontSize={"xs"}>{title}</Text>
      <Text fontSize={"4xl"} fontWeight="bold" color={color ? color : ""}>
        {number}
      </Text>
    </Box>
  );
};
