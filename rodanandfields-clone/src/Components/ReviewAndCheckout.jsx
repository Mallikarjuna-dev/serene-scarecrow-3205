import React, { useEffect, useState } from "react";
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
  const [promo, setPromo] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.CartReducer.cart);
  const [totals, setTotals] = useState(0);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const total = cartItems.reduce((ac, element) => {
      return ac + Number(element.retailprice)
    }, 0)
    setTotals(total)
   },[cartItems.length])
  
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getFromCart());
  }, []);
  const checkValidPromo = () => {
    if (promo == "masai50") {
      alert("congratulations! promo code is applied")
    console.log("total", totals);
    console.log("promo", promo);
      setTotals(totals - 50)
      setDisabled(true)
    } else { 
      alert("sad ! promo code is not applied")
    }
  }
  console.log("cart item", cartItems);
 
  return (
    <Box>
      <Box>
        <Center>
          <Heading as="h3" mb={"20px"}>REVIEW YOUR BAG</Heading>
        </Center>
      </Box>
      <Box>
        {cartItems.map((e) => {
          return (
            <Box 
              key={e.id}
              m={"auto"}
              mb={"70px"}
              width={"500px"}
              height="400px"
            >
              
              <Stack
                overflow={ "hidden"}
                width={"500px"}
                height={"260px"}
                m={"auto"}
                flexDirection={{ base: "column", md: "row" }}>
                  <Box>
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"contain"}
                      src={e.productimage}
                    />
                  </Box>

                <Box width={"250px"}>
                    <Text fontSize="2xl" as="h2">
                      {e.title}
                    </Text>
                  <Text mb={"2px"} overflow={"none"} fontSize="xl" as="h2">
                      {e.description}
                    </Text>
                  </Box>
              </Stack>
              <Flex flexDirection={"row-reverse"}>
                <Text m={ "10px"} h={ "50px"} w={ "100px"}  color={"tomato"} fontSize="xl">Price:${ e.retailprice}</Text>  
                  </Flex>
              <Button h={ "50px"}
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

      </Box>
      <Box pt={"20px"} pb={"20px"} borderTop={"1px solid grey"}>
        <Box w={"35%"} m={"auto"} h={"300px"} mb={"20px"} borderRadius={"10px"}>
          <Text fontSize={"25px"} fontStyle={"bold"} mb={"10px"}>
            ORDER SUMMARY
          </Text>
          <Box fontSize={"20px"} mb={"20px"} borderTop={"none"}>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Text>SUBTOTAL</Text>
                </Box>
                <Box>
                  <Text>${ totals}</Text>
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
              <Box mt={"20px"}>
              </Box>
            </Box>
          </Box>
          <Box fontSize={"20px"} mt={"20px"} mb={"20px"}>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>Estimated Total</Text>
              </Box>
              <Box>
                <Text>${ totals+25}</Text>
              </Box>
            </Flex>
            <Box>
              <Text>
                4 interest-free payments of $21.75 with Klarna. Learn More
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text color={"grey"}>enter "masai50" to get $50 discount</Text>
            </Box>
            <Flex>
              <Box pt={"10px"} pl={"10px"} w={"50%"}>
                <input
                  type="text"
                  placeholder="Enter Your Promo Code"
                  style={{ border: "none" }}
                  onChange={(e) =>setPromo(e.target.value)}
                />
              </Box>
              <Box w={"50%"} borderRadius={"10px"}>
                <Button disabled={ disabled} onClick={checkValidPromo} w={"100%"} bg={"orange"} _hover>
                  APPLY
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box mt={"20px"}>
            <Button
              onClick={() => {
                navigate("/productpage");
              }}
              _hover={"red"}
              border={"1px solid black"}
              fontSize={"1.2rem"}
              mb={"10px"}
              w={"100%"}
              h={"70px"}
            >
              CONTINUE TO SHOPPING
            </Button>
            <Button
              onClick={() => {
                navigate("/checkout");
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
          <Flex gap={"15px"} mb={"20px"}>
            <Text>We Accept</Text>
            <Image h={"30px"} src={" https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-paypal.png"}></Image>
            <Image h={"30px"} src={" https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-visa.png"}></Image>
            <Image h={"30px"} src={" https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-mastercard.png"}></Image>
            <Image h={"30px"} src={" https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-discover.png"}></Image>
            <Image h={"30px"} src={" https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-amex.png"}></Image>
            <Image h={"30px"} src={"https://www.rodanandfields.com/en-us/_ui/images/card-icons/klarna-logo.png"}></Image>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewAndCheckout;
