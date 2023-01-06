import React, { useEffect, useState } from "react";
import { Box, Text, Icon, Link, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsPerson, BsBag } from "react-icons/bs";
import rodanlogo from "./Image/rodan.png";
import usaicon from "./Image/usaflag.png";
import Login from "./LoginSignup/Login";
import {Link as RouterLink} from "react-router-dom"
const UpperNavbar = () => {
  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {

        setscroll(false)
      }
      else {
        setscroll(true)
      }
    })
  }, [])

  return (
    <Box
      mt={scroll && "-30px"}
      position={scroll ? "fixed" : "relative"}

      h={"70px"}
      w={"100%"}
      borderBottom="1px solid black"
      display={"flex"}
      justifyContent={"space-between"}

      backgroundColor={"white"}
    >
      <Box w={"200px"} marginTop={"20px"} marginLeft={"30px"}>
        <Link fontSize={"14px"}>FIND A CONSULTANT</Link>
      </Box>
      <Box w={"170px"} marginTop={"25px"}>
      <RouterLink to="/"><Image src={rodanlogo} width={"160px"} h={"12px"}></Image></RouterLink>
      </Box>
      <Box
        display={"flex"}
        w={"260px"}
        justifyContent={"space-between"}
        marginTop={"20px"}
        marginRight={"20px"}
        alignItems="center"
      >
        <Box display={"flex"}>
          <SearchIcon margin={"3px"} w={"15px"} h={"15px"}></SearchIcon>
          <Text fontSize={"14px"}>
            <Link>Search</Link>
          </Text>
        </Box>
        <Box display={"flex"} alignItems="center">

          <Icon as={BsPerson} w={"18px"} h={"18px"} margin={"2px"} />
          <Text fontSize={"14px"}>
          <Login />
            </Text>
        </Box>
        <RouterLink to={ "/bagReview"}><Box>
          <Icon as={BsBag} w={"20px"} h={"20px"}></Icon> 
        </Box>
        </RouterLink>
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
