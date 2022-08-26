import React from "react";
import { Box, Text, Heading, Icon } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { ImInstagram, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <Box w={"100%"} h={"360px"} bg={"#fefffcfc"}>
      <Grid
        h="320px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem pl={"25px"} mt={"35px"}>
          <Text cursor={"pointer"} fontSize={"12px"} fontWeight={"600"}>
            ABOUT R+F
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            PRESS ROOM
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            COMPANY INFO
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            EXECUTIVE TEAM
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            CAREERS
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            R+F RECYCLING PROGRAM
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            BLOG
          </Text>
        </GridItem>
        <GridItem pl={"30px"} mt={"35px"}>
          <Text cursor={"pointer"} fontSize={"12px"} fontWeight={"600"}>
            HELP
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            PRODUCT & HELP CENTER
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            SHIPPING
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            SATISFACTION GUARANTEE
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            PROMOTIONAL TERMS & CONDITIONS
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            R+F FAQS
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            {" "}
            KLARNA
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={"11px"}
            mt={"18px"}
            fontWeight={"550"}
          >
            SITE MAP
          </Text>
        </GridItem>
        <GridItem colSpan={2} pt={"35px"} pl={"220px"}>
          <Box>
            <Heading
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"25px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"1px"}
              maxWidth={"none"}
            >
              Let’s Get Social
            </Heading>
            <Box
              mt={"28px"}
              display={"flex"}
              w={"380px"}
              h={"50px"}
              justifyContent={"space-between"}
              paddingTop={"15px"}
            >
              <Box width={"50px"}>
                <Icon as={FaFacebookF} w={"18px"} h={"18px"}></Icon>
              </Box>
              <Box width={"50px"}>
                <Icon as={BsTwitter} w={"18px"} h={"18px"}></Icon>
              </Box>

              <Box width={"50px"}>
                <Icon as={ImInstagram} w={"18px"} h={"18px"}></Icon>
              </Box>
              <Box width={"50px"}>
                <Icon as={ImYoutube} w={"18px"} h={"18px"}></Icon>
              </Box>
              <Box width={"50px"}>
                <Icon as={FaPinterestP} w={"18px"} h={"18px"}></Icon>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
