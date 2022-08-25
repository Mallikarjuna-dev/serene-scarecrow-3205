import React from "react";
import {
  Box,
  Link,
  Image,
  Text,
  Flex,
  Icon,
  List,
  ListItem,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import rodanlogo from "./Image/rodan.png";
import usaicon from "./Image/usaflag.png";

import { BsPerson, BsBag } from "react-icons/bs";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverRef = useRef();

  return (
    <Box>
      <Box
        h={"70px"}
        borderBottom="1px solid black"
        display={"flex"}
        justifyContent={"space-between"}
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
              <Link>Signin</Link>
            </Text>
            <Icon as={BsPerson} w={"18px"} h={"18px"} marginTop={"2px"} />
          </Box>
          <Box>
            <Icon as={BsBag} w={"20px"} h={"20px"}></Icon>
          </Box>
          <Box display={"flex"} w={"75px"} justifyContent={"space-between"}>
            <Image
              src={usaicon}
              w={"18px"}
              h={"18px"}
              marginTop={"4px"}
            ></Image>
            <Text fontSize={"14px"}>
              <Link>England</Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box h={"60px"} borderBottom="1px solid black">
        <List
          listStyleType={"none"}
          display={"flex"}
          justifyContent={"space-around"}
          w={"60%"}
          margin={"auto"}
        >
          <ListItem
            marginTop={"25px"}
            fontSize={"11px"}
            fontWeight={"550"}
            borderBottom={"5px solid skyblue"}
            paddingBottom={"15px"}
          >
            SHOP
            <Box
              position={"absolute"}
              top={"120px"}
              left={"0px"}
              display={"none"}
              w={"100%"}
              margin={"auto"}
              h={"200px"}
              backgroundColor={"blue"}
              transition={"all 0.4s ease"}
              padding={"20px"}
              boxSizing={"border-box"}
              justifyContent={"center"}
              boxShadow={"0 0 5px #8888"}
            >
              <Box></Box>
            </Box>
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            BEST SELLERS
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            FEATURED
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            OUR STORY
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            PERKS PROGRAMS
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            BECOME A CONSULTANT
          </ListItem>
          <ListItem marginTop={"25px"} fontSize={"11px"} fontWeight={"550"}>
            BLOG
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
