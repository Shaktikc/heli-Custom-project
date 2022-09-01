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
  Image,
  Textarea,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { CancelButton } from "components/Common/CancelButton";
import { LeftSideLabelInput } from "components/Common/LeftSideLabelInput";
import { LeftSideLabelSelect } from "components/Common/LeftSideLabelSelect";
import { SaveButton } from "components/Common/SaveButton";
import { UploadUI } from "components/Common/UploadUI";
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
              <Grid templateColumns={"repeat(2,1fr)"} mt="2rem">
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
                  <UploadUI />
                </GridItem>
                <GridItem>
                  <Flex gap="1rem">
                    <SaveButton />
                    <CancelButton />
                  </Flex>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns={"repeat(2,1fr)"} mt="2rem">
                <GridItem>
                  {" "}
                  <Grid templateRows={"1fr ,1fr"} rowGap="1rem">
                    <GridItem>
                      {" "}
                      <LeftSideLabelSelect label="Currency" />
                    </GridItem>
                    <GridItem>
                      {" "}
                      <LeftSideLabelInput label="Amount" />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <UploadUI />
                </GridItem>
                <GridItem>
                  <Flex gap="1rem">
                    <SaveButton />
                    <CancelButton />
                  </Flex>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns={"repeat(2,1fr)"} mt="2rem">
                <GridItem>
                  {" "}
                  <Grid templateRows={"1fr ,1fr"} rowGap="1rem">
                    <GridItem>
                      {" "}
                      <LeftSideLabelSelect label="Currency" />
                    </GridItem>
                    <GridItem>
                      {" "}
                      <LeftSideLabelInput label="Amount" />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem></GridItem>
                <GridItem>
                  <Flex gap="1rem">
                    <SaveButton />
                    <CancelButton />
                  </Flex>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateRows={"repeat(2 , 1fr)"}>
                <GridItem>
                  {" "}
                  <Flex flexDirection={"column"}>
                    <Box>
                      {" "}
                      <Text>Notes:</Text>
                    </Box>
                    <Textarea w="80%" mt="1rem"></Textarea>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem">
                    {" "}
                    <SaveButton />
                    <CancelButton />
                  </Flex>
                </GridItem>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Flex>
  );
}

export default Tables;
