import { Center, Flex, Image } from "@chakra-ui/react";
import React from "react";

export const UploadUI = () => {
  return (
    <Flex flexDirection={"column"}>
      {" "}
      <Center
        // bgColor={"blackAlpha.600"}
        w="12rem"
        h="8rem"
        borderTop={"1px dashed #808080"}
        borderLeft={"1px dashed #808080"}
        borderRight={"1px dashed #808080"}
        borderTopRadius="8px"
        // borderRightRadius="8px"
      >
        <Image src="/assets/img/upload.png" h="2rem" w="rem" />
      </Center>
      <Center
        w="12rem"
        h="2rem"
        border={"1px solid #808080"}
        // borderLeft={"1px solid black"}
        // borderRight={"1px solid black"}
        borderBottomRadius="8px"
      >
        Upload Image
      </Center>
    </Flex>
  );
};
