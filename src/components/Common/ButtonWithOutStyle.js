import React from "react";
import { Box } from "@chakra-ui/react";

export const ButtonWithOutStyle = ({ label, push }) => {
  return (
    <Box
      color="#f77f3c"
      cursor={"pointer"}
      onClick={() =>
        push({
          startingLocation: "",
          date: "",
          time: "",
        })
      }
      fontSize="sm"
    >
      {label}
    </Box>
  );
};
