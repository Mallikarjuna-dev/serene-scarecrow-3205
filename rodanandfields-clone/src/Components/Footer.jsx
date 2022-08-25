import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w={"100%"} h={"400px"} border={"1px solid green"}>
      <Grid
        h="360px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem bg="tomato">
          <Text>ABOUT R+F</Text>
          <Text>PRESS ROOM</Text>
          <Text>COMPANY INFO</Text>
          <Text>EXECUTIVE TEAM</Text>
          <Text>CAREERS</Text>
          <Text>R+F RECYCLING PROGRAM</Text>
          <Text>BLOG</Text>
        </GridItem>
        <GridItem bg="papayawhip">
          <Text>HELP</Text>
          <Text>PRODUCT & HELP CENTER</Text>
          <Text>SHIPPING</Text>
          <Text>SATISFACTION GUARANTEE</Text>
          <Text>PROMOTIONAL TERMS & CONDITIONS</Text>
          <Text>R+F FAQS</Text>
          <Text>KLARNA</Text>
          <Text>SITE MAP</Text>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
      </Grid>
    </Box>
  );
};

export default Footer;
