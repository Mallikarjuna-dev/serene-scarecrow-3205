import { Box, Flex, Heading, Image, Text, Button, Grid } from "@chakra-ui/react";
import React from "react";

const LandingPage = () => {
  return (
    <Box margin={0} p={0}>
      
      <Box width={"100%"} h={"550px"} border={"1px solid red"} display={"flex"}>
        <Box
          w={"36%"}
          h={"550px"}
          border={"1px solid black"}
          paddingLeft={"60px"}
          paddingTop={"30px"}
        >
          <Box width={"290px"} >
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
          </Box >
          <Box mt={"30px"}>
            <Button padding={"12px 105px 12px 105px"} backgroundColor={"white"} border={"1px solid black"}>Shop Now</Button>
          </Box>
        </Box>
        <Box w={"64%"} h={"550px"} border={"1px solid green"}>
          <Image
            src={`https://www.rodanandfields.com/en-us/medias/22-lash-activation-HP-GIF-Desktop.gif?context=bWFzdGVyfHJvb3R8MTYwNTUzMXxpbWFnZS9naWZ8aGFlL2g4YS8xNTUzOTU1MDg3OTc3NC5naWZ8NDMyYjg3ODEyNzIxNTU2ZjY5YjJlMzhkYTBjOTk0ZTc0M2QyZDA1NDZkNzZhZWY2MjRhZjAxYzZmYjA5Njc2Mg`}
            w={"700px"}
            maxHeight={"550px"}
            alt={"image going"}
          />
        </Box>
       
      </Box>
      <Box textAlign={"right"}> <Text>see your best seller</Text></Box>
      <Box w={"100%"} h={"550px"} border={"1px solid red"}>
        <Grid 
        templateRows={"repeat(1,1fr)"}
        templateColumns={"repeat(auto,auto)"}
        gridGap={"10px"}
        justifyContent={"center"}
        >
            
        </Grid>
      </Box>
      
    </Box>
  );
};

export default LandingPage;
