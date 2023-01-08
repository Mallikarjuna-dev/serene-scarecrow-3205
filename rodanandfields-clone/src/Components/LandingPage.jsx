import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import Slider from "./Slider";
import DrImage from "./Image/DrImage.png";
import clinically from "./Image/Clinically.png";
import Results from "./Image/Results.png";
import eyeblinker from "./Image/eyeblinker.webp";
import UpperNavbar from "./UpperNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";
import DermDesigned from "./DermDesigned";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box margin={0} p={0}>
      <UpperNavbar />
      <Navbar />
      <Box
        width={"100%"}
        h={"550px"}
        display={"flex"}
        backgroundImage={`url(${eyeblinker})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Box w={"36%"} h={"550px"} paddingLeft={"60px"} paddingTop={"30px"}>
          <Box width={"290px"}>
            {" "}
            <Heading
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"40px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              maxWidth={"none"}
            >
              Rodan + Fields is the #1 Premium Lash Serum In The U.S. In 2021*
            </Heading>
          </Box>
          <Box mt={"30px"}>
            <Text
              colorScheme={"#000000"}
              fontSize={"14px"}
              fontFamily={"ProximaNovaRegular,Arial,Sans-Serif"}
            >
              Real Life, Real Lashes
            </Text>
          </Box>
          <Box w={"290px"} mt={"30px"}>
            <Text
              colorScheme={"#000000"}
              fontFamily={"ProximaNovaRegular,Arial,Sans-Serif"}
              fontSize={"12px"}
              letterSpacing={"0.3px"}
            >
              *Source: Euromonitor International Limited; Beauty and Personal
              Care 2022 Edition, retail value RSP terms; all channels; Lash
              Serum including Lash Serum products sold as parts of Sets and Kits
            </Text>
          </Box>
          <Box mt={"30px"}>
            <Link to ="/productDetails"><Button
              padding={"12px 105px 12px 105px"}
              backgroundColor={"white"}
              border={"1px solid black"}
            >
              Shop Now
            </Button></Link>
          </Box>
        </Box>
        
      </Box>
      <Box textAlign={"right"}>
        {" "}
        <Link to="/productpage"><Button backgroundColor={"white"}
              padding={"10px 25px 10px 25px"}
              letterSpacing={"0.5px"}
              fontWeight={"500"}
              border={"1px solid black"}
              fontSize={"14px"}
              fontFamily={"ProximaNovaRegular,Arial,Sans-Serif"}
              >see your best seller</Button></Link>
      </Box>
      <ProductSlider />
      <DermDesigned />
      <Box
        boxSizing="border-box"
        w={"100%"}
        h={"450px"}
        padding={"30px"}
        pt={"40px"}
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"#fcfcfc"}
      >
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={DrImage}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
            borderRadius={"5px"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Derm-Designed
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              Dr. Katie Rodan + Dr. Kathy Fields founded R+F to give everyone
              access to life- changing skincare.
            </Text>
          </Box>

          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Meet Our Doctors
          </Text>
        </Box>
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={clinically}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Clinically Tested
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              Our innovative formulas are tested in our lab and designed to work
              together to deliver real results.
            </Text>
          </Box>

          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Discover Multi-Med Therapy
          </Text>
        </Box>
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={Results}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
            borderRadius={"10px"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Results Guaranteed
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              See and feel the best skin of your life within 60 days or your
              money back. Even on empty bottles.
            </Text>
          </Box>
          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Our Money-Back Guarantee
          </Text>
        </Box>
      </Box>
      <Box w={"100%"} h={"50px"}>
          <Text fontSize={"18px"} fontWeight={"500"} ml={"10px"} mt={"15px"}>@Rodanandfields</Text>
      </Box>
      <Slider />
      <Box w={"100%"} h={"180px"} backgroundColor={"#d8e0e6a7"} pt={"5px"} mt={"20px"}>
        <Box
          w={"78%"}
          h={"72%"}
          m={"auto"}
          mt={"35px"}
          display={"flex"}
          backgroundColor={"white"}
        >
          <Box w={"35%"} h={"125px"} paddingLeft={"90px"}>
            <Text
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"30px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"0.3px"}
              mt={"20px"}
            >
              Personalized Skincare
            </Text>
            <Text
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"30px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"0.3px"}
              ml={"55px"}
            >
              Services
            </Text>
          </Box>
          <Box w={"30%"} h={"100px"} paddingLeft={"25px"}>
            <Text mt={"20px"} fontSize={"15px"} fontWeight={"550"}>
              • Customized recommendations
            </Text>
            <Text fontSize={"15px"} fontWeight={"550"}>
              • Learn more about our products
            </Text>
            <Text fontSize={"15px"} fontWeight={"550"}>
              • Enjoy ongoing skincare advice
            </Text>
          </Box>
          <Box w={"35%"} h={"100px"} paddingTop={"25px"} paddingLeft={"100px"}>
           <Link to="/become-a-consultant"> <Button
              backgroundColor={"white"}
              padding={"10px 25px 10px 25px"}
              letterSpacing={"0.5px"}
              fontWeight={"400"}
              border={"1px solid black"}
            >
              FIND A CONSULTANT
            </Button></Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
