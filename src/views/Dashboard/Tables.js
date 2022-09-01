// Chakra imports
import {
  Flex,
  Grid,
  GridItem,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Box,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
  Center,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { LeftSideLabelInput } from "components/Common/LeftSideLabelInput";
import { LeftSideLabelSelect } from "components/Common/LeftSideLabelSelect";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card>
        <Grid templateRows={"repeat(3 , 1fr)"} rowGap="1rem">
          <GridItem>
            <LeftSideLabelInput label="Type of trip" type="text" />
          </GridItem>
          <GridItem>
            <LeftSideLabelInput label="Type of Flight" type="text" />
          </GridItem>
          <GridItem>
            <LeftSideLabelInput label="Location" type="text" />
          </GridItem>
        </Grid>
        <Tabs mt="4rem">
          <TabList variant="unstyled" fontSize={"sm"} gap="5rem">
            <Tab _selected={{ color: "white", bg: "#f77f3c" }}>
              Cargo Details
            </Tab>
            <Tab _selected={{ color: "white", bg: "#f77f3c" }}>
              Payment Details
            </Tab>
            <Tab _selected={{ color: "white", bg: "#f77f3c" }}>
              Flight Details{" "}
            </Tab>
            <Tab _selected={{ color: "white", bg: "#f77f3c" }}>Remarks </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns={"repeat(2,1fr)"}>
                <GridItem>
                  {" "}
                  <Grid templateRows={"1fr ,1fr"} rowGap="1rem">
                    <GridItem>
                      {" "}
                      <LeftSideLabelSelect label=" Select Unit" />
                    </GridItem>
                    <GridItem>
                      {" "}
                      <LeftSideLabelInput label="Total Kgs" />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Flex flexDirection={"column"}>
                    {" "}
                    <Box
                      // bgColor={"blackAlpha.600"}
                      w="12rem"
                      h="8rem"
                      borderTop={"1px dashed #808080"}
                      borderLeft={"1px dashed #808080"}
                      borderRight={"1px dashed #808080"}
                      borderTopRadius="8px"
                      // borderRightRadius="8px"
                    ></Box>
                    <Center
                      w="12rem"
                      h="2rem"
                      border={"1px solid #808080"}
                      // borderLeft={"1px solid black"}
                      // borderRight={"1px solid black"}
                      borderBottomRadius="8px"
                    >
                      Upload
                    </Center>
                  </Flex>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Flex>
  );
}

export default Tables;
