import React from "react";
import { Container, Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import UpperNavbar from "./UpperNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Consultant = () => {
  return (
    <>
      <UpperNavbar />
      <Navbar />
      <Container maxW="90%" border="1px solid black">
        <Box w={"100%"} h="600px" border="1px solid transparent">
          <Flex>
            <Box w="35%" bg="#9fbbd0">
              <Box margin="65px 140px 30px 65px">
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  textAlign="left"
                  color="#222222"
                  fontStyle="normal"
                >
                  Build a Business.
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Join a
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Community.
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Make a
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Difference.
                </Text>
                <Text
                  mt="35px"
                  fontFamily="ProximaNovaRegular"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="24px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Join the #1 Premium Skincare Regimen Brand in the U.S.
                  2018-2021* and start changing skin + lives.
                </Text>
                <Button
                  mt="70px"
                  fontFamily="ProximaNovaRegular"
                  color="#222222"
                  fontSize="16px"
                  fontWeight="500"
                  borderRadius="5px"
                  variant="outline"
                  p="15px 110px"
                  bg="#FFFFFF"
                  borderColor="1px solid black"
                  _hover="none"
                >
                  JOIN NOW
                </Button>
              </Box>
            </Box>
            <Box w="65%">
              <Image src="https://www.rodanandfields.com/en-us/medias/LandingPage-Hero-Desktop-947x600.jpg?context=bWFzdGVyfHJvb3R8NTQ5OTg4fGltYWdlL2pwZWd8aDkyL2gzNy8xMzkxNjM2Nzc0OTE1MC5qcGd8OGZhNGVlOGVkYTQ2MWNkNDRkNjQ3ZTNiODNkZGZlNjc2MDY1YjIwOGY4YTNkNDkxZDllMWQwZTVjMzdhOTg0Ng" />
            </Box>
          </Flex>
        </Box>

        <Box w={"97%"} m="auto" h="580px" mt="15px" border="1px solid red">
          <Flex>
            <Box w="35%">
              <Image src="https://www.rodanandfields.com/en-us/medias/3-Reasons-Module-Image-AU.png?context=bWFzdGVyfHJvb3R8MTM3MDM2NnxpbWFnZS9wbmd8aDc2L2hkNy8xNTM1MjQ4MDIwMjc4Mi5wbmd8MzM0NmFhZDZmODZiODgwYzgwZjg3MDJlZTFlMjk1YWNjYWFmNWFkNGMyZWIzYjgzZjNiMGJhYTNmNzUxNWNmZg" />
            </Box>
            <Box w="65%" bg="#E2D3CC" border="1px solid blue">
              <Box w="100%" h="23%" border="1px solid pink"></Box>
              <Box w="100%" h="77%" border="1px solid orange">
                <Flex>
                  <Box></Box>
                  <Box></Box>
                  <Box></Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Consultant;
