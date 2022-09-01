import React from "react";
import { Box, Flex, Select } from "@chakra-ui/react";

export const LeftSideLabelSelect = ({ label }) => {
  return (
    <Flex alignItems={"center"}>
      <Box w="7rem" fontSize={"sm"}>
        {label}
      </Box>
      <Box>
        <Select placeholder="Select option" w="15rem" size={"sm"}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Flex>
  );
};
