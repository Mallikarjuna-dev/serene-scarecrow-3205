import React from "react";
import { Box, Text, Icon, Link, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsPerson, BsBag } from "react-icons/bs";
import rodanlogo from "./Image/rodan.png";
import usaicon from "./Image/usaflag.png";
import Login from "./LoginSignup/Login";
const UpperNavbar = () => {
  return (
    <Box
    mt={"-30px"}
      h={"70px"}
      w={"100%"}
      borderBottom="1px solid black"
      display={"flex"}
      justifyContent={"space-between"}
      position={"fixed"}
      backgroundColor={"white"}
    >
      <Box w={"200px"} marginTop={"20px"} marginLeft={"30px"}>
        <Link fontSize={"14px"}>FIND A CONSULTANT</Link>
      </Box>
      <Box w={"170px"} marginTop={"25px"}>
        <Image src={rodanlogo} width={"160px"} h={"12px"}></Image>
      </Box>
      <Box
        display={"flex"}
        w={"260px"}
        justifyContent={"space-between"}
        marginTop={"20px"}
        marginRight={"20px"}
      >
        <Box display={"flex"}>
          <Text fontSize={"14px"}>
            <Link>Search</Link>
          </Text>
          <SearchIcon marginTop={"3px"} w={"15px"} h={"15px"}></SearchIcon>
        </Box>
        <Box display={"flex"}>
          
          <Text fontSize={"14px"}>
           
          </Text>
          <Login />
          <Icon as={BsPerson} w={"18px"} h={"18px"} marginTop={"2px"} />
        </Box>
        <Box>
          <Icon as={BsBag} w={"20px"} h={"20px"}></Icon>
        </Box>
        <Box display={"flex"} w={"75px"} justifyContent={"space-between"}>
          <Image src={usaicon} w={"18px"} h={"18px"} marginTop={"4px"}></Image>
          <Text fontSize={"14px"}>
            <Link>England</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperNavbar;
