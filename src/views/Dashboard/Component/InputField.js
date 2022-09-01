import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const InputField = ({ label, type }) => {
  return (
    <>
      {" "}
      <FormControl>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          {label}
        </FormLabel>
        <Input
          variant="auth"
          fontSize="sm"
          ms="4px"
          type={type}
          placeholder="Your full name"
          mb="24px"
          size="sm"
        />
      </FormControl>
    </>
  );
};
