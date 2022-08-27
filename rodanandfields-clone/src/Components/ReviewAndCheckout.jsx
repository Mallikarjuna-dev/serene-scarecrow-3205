import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Center,
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { deleteFromCart, getFromCart } from "../Redux/CartReducer/action";
import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
// import { Checkout } from './Checkout';
const ReviewAndCheckout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cart);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getFromCart());
  }, []);
  console.log("cart item", cartItems);
  return (
    <Box>
      <Box>
        <Center>
          <Heading as={"h2"}>REVIEW YOUR BAG</Heading>
        </Center>
      </Box>
      <Box>
        {cartItems.map((e) => {
          return (
            <Box
              key={e.id}
              m={"auto"}
              mb={"10px"}
              border={"3px solid blue"}
              width={"500px"}
            >
              <Box
                width={"500px"}
                height={"350px"}
                m={"auto"}
                mb={"20px"}
                border={"2px solid green"}
              >
                <Stack flexDirection={{ base: "column", md: "row" }}>
                  <Box>
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"contain"}
                      src={e.productimage}
                    />
                  </Box>
                  <Box width={"250px"} height={"350px"} border="2px solid red">
                    <Text fontSize="2xl" as="h2">
                      {e.title}
                    </Text>
                    <Text overflow={"none"} fontSize="xl" as="h2">
                      {e.description}
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Button
                onClick={() => {
                  dispatch(deleteFromCart(e.id));
                }}
                width={"100%"}
              >
                <DeleteIcon fontSize={"2xl"}></DeleteIcon>
              </Button>
            </Box>
          );
        })}
        {/* <Box>
      <Checkout/>
     </Box> */}
      </Box>
      <Box w={"30%"} m={"auto"} h={"300px"} border={"1px solid blue"}>
        <Text fontSize={"25px"} fontStyle={"bold"}>
          ORDER SUMMARY
        </Text>
        <Box fontSize={"20px"} mb={"20px"} border={"1px solid grey"}>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>SUBTOTAL</Text>
              </Box>
              <Box>
                <Text>$87.00</Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>SHIPPING</Text>
              </Box>
              <Box>
                <Text>Calculated At Checkout</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box fontSize={"20px"} mb={"20px"} border={"1px solid grey"}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text>Estimated Total</Text>
            </Box>
            <Box>
              <Text>$87.00</Text>
            </Box>
          </Flex>
          <Box>
            <Text>
              4 interest-free payments of $21.75 with Klarna. Learn More
            </Text>
          </Box>
        </Box>
        <Box>
          <Flex>
            <Box pt={"10px"} pl={"10px"} w={"50%"} border={"1px solid red"}>
              <input
                type="text"
                placeholder="Enter Your Promo Code"
                style={{ border: "none" }}
              />
            </Box>
            <Box w={"50%"} border={"1px solid red"}>
              <Button w={"100%"} border={"1px solid red"}>
                APPLY
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box mt={"20px"}>
          <Button
            onClick={() => {
              navigate("");
            }}
            _hover={"red"}
            bg={"#222222"}
            color={"white"}
            fontSize={"1.2rem"}
            mb={"10px"}
            w={"100%"}
            h={"70px"}
          >
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewAndCheckout;
