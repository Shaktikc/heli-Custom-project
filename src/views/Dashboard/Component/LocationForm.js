import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Button, Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { InputField } from "./InputField";
import { ButtonWithOutStyle } from "components/Common/ButtonWithOutStyle";
import { SubmitButton } from "components/Common/SubmitButton";
import { CancelButton } from "components/Common/CancelButton";

const initialValues = {
  addLocation: [
    {
      startingLocation: "",
      date: "",
      time: "",
      destinationLocation: "",
      dlDate: "",
      dlTime: "",
    },
  ],
};

export const LocationForm = () => {
  return (
    <>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="addLocation">
                {({ insert, remove, push }) => (
                  <Box>
                    {values.addLocation.length > 0 &&
                      values.addLocation.map((friend, index) => (
                        <Grid
                          templateColumns="repeat(3, 1fr)"
                          columnGap="2rem"
                          mt="2rem"
                          w="90%"
                        >
                          <GridItem>
                            <InputField
                              label="Starting Location"
                              type="text"
                              name={`addLocation.${index}.startingLocation`}
                            />
                          </GridItem>
                          <GridItem>
                            <InputField
                              label="Date"
                              type="Date"
                              name={`addLocation.${index}.date`}
                            />
                          </GridItem>
                          <GridItem>
                            <InputField
                              label="Time"
                              type="time"
                              name={`addLocation.${index}.time`}
                            />
                          </GridItem>
                          <GridItem>
                            <InputField
                              label="Destination Location"
                              type="text"
                              name={`addLocation.${index}.destinationLocation`}
                            />
                          </GridItem>
                          <GridItem>
                            <InputField
                              label="Date"
                              type="Date"
                              name={`addLocation.${index}.dlDate`}
                            />
                          </GridItem>
                          <GridItem>
                            <InputField
                              label="Time"
                              type="time"
                              name={`addLocation.${index}.dlTime`}
                            />
                          </GridItem>
                          {/* <Button bg="green.400" onClick={() => remove(index)}>
                            Remove Location
                          </Button> */}
                        </Grid>
                      ))}
                    <ButtonWithOutStyle
                      label={"Add Another Location"}
                      push={push}
                    />
                  </Box>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
        <Flex gap="1.5rem">
          <SubmitButton />
          <CancelButton />
        </Flex>
      </Box>
    </>
  );
};
