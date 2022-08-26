import React from "react";
import { Box, Text ,Heading,Icon} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF,FaPinterestP} from "react-icons/fa"
import {ImInstagram,ImYoutube} from "react-icons/im"

const Footer = () => {
  return (
    <Box w={"100%"} h={"360px"} bg={"#fefffcfc"} >
      <Grid
        h="320px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem  pl={"25px"} mt={"35px"}>
          <Text cursor={"pointer"} fontSize={"12px"} fontWeight={"600"}><routerLink>ABOUT R+F</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>PRESS ROOM</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>COMPANY INFO</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>EXECUTIVE TEAM</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>CAREERS</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>R+F RECYCLING PROGRAM</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>BLOG</routerLink></Text>
        </GridItem>
        <GridItem  pl={"30px"} mt={"35px"}>
          <Text cursor={"pointer"} fontSize={"12px"} fontWeight={"600"}><routerLink>HELP</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>PRODUCT & HELP CENTER</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>SHIPPING</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>SATISFACTION GUARANTEE</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>PROMOTIONAL TERMS & CONDITIONS</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>R+F FAQS</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}> <routerLink>KLARNA</routerLink></Text>
          <Text cursor={"pointer"} fontSize={"11px"} mt={"18px"} fontWeight={"550"}><routerLink>SITE MAP</routerLink></Text>
        </GridItem>
        <GridItem colSpan={2} pt={"35px"} pl={"220px"} >
          <Box><Heading fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"25px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"1px"}
              maxWidth={"none"}>Let’s Get Social</Heading>
              <Box mt={"28px"} display={"flex"} w={"380px"} h={"50px"}  justifyContent={"space-between"} paddingTop={"15px"}>
              <Box width={"50px"}>
                <routerLink><Icon as={FaFacebookF} w={"18px"} h={"18px"}></Icon></routerLink>
                </Box>
                <Box width={"50px"}>
                  <routerLink><Icon as={BsTwitter} w={"18px"} h={"18px"}></Icon></routerLink>
                </Box>
                
                <Box width={"50px"}>
                <routerLink><Icon as={ImInstagram} w={"18px"} h={"18px"}></Icon></routerLink>
                </Box>
                <Box width={"50px"}>
                <routerLink><Icon as={ImYoutube} w={"18px"} h={"18px"}></Icon></routerLink>
                </Box>
                <Box width={"50px"}>
                <routerLink><Icon as={FaPinterestP} w={"18px"} h={"18px"}></Icon></routerLink>
                </Box>
              </Box>
              
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
