import React from "react";
import { Flex, Box, Input } from "@chakra-ui/react";

export const LeftSideLabelInput = ({ label, type }) => {
  return (
    <Flex gap="1.2rem">
      <Box w="7rem" fontSize={"sm"}>
        {label}
      </Box>
      <Box>
        <Input type={type} size="sm" w="15rem" />
      </Box>
    </Flex>
  );
};
