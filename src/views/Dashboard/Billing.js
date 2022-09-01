// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { PageTitle } from "components/Common/PageTitle";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";

function Billing() {
  // Chakra color mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "transparent");
  const { colorMode } = useColorMode();

  console.log(colorMode);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card>
        <PageTitle title="Reports" />
        <Box
          bgColor={"gray.200"}
          w="10rem"
          // h="5rem"
          p="0.5rem"
          borderRadius={"4px"}
          lineHeight="1.8rem"
          mt="1rem"
        >
          <Text fontSize={"xs"}>Total Trips</Text>
          <Text fontSize={"4xl"} fontWeight="bold">
            500
          </Text>
        </Box>
      </Card>
    </Flex>
  );
}

export default Billing;
