import React, { useEffect } from "react"
import { addToCart, getFromCart } from "../Redux/CartReducer/action";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Radio,
    Button,
  Box,
  Flex,
  Image,
    Text
  } from '@chakra-ui/react'
import ReviewAndCheckout from "./ReviewAndCheckout"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartCounter } from "./CartCounter";
import { Icon } from "@chakra-ui/icons";
export function AddToCart({ product}) {
  const cart = useSelector((store) => store.CartReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    useEffect(() => { 
      dispatch(getFromCart())
    },[])
    console.log("cart",cart)
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
        </RadioGroup>
        <Button
          onClick={() => {
            onOpen()
            dispatch(addToCart(product))
          }}
          _hover={"red"}
            bg={"#222222"}
            color={"white"}
            fontSize={"1.2rem"}
            mb={"10px"}
            w={"100%"}
            h={"70px"}
          >
            ADD TO BAG{" "}
          </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
              <Flex  gap={ "10px"}>
                <Box>
            <CartCounter/>
              <Icon onClick={() => { navigate("/bagreview") }} as={ AiOutlineShoppingCart} boxSize="2rem" m="7px"/>
            </Box>
                <Box>MY BAG</Box>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
            {
                cart&&cart.map((e) => { 
                  return (
                    <Box mb={"10px"}>
                    <Flex>
                        <Box><Image src={e.productimage} objectFit="contain" rounded="lg" boxSize={ "100px"}>

                        </Image></Box>
                        <Box pt={"20px"}>
                          <Text>{ e.title}</Text>
                          <Flex>
                          <Text>Price:</Text>
                           <Text color={ "red"}>${ e.retailprice}</Text>
                           </Flex>
                      </Box>
                      </Flex>
                    </Box>
                  )
                })
              }
             
            </DrawerBody>
            <Button
          onClick={()=>{
            navigate("/bagReview")
          }} 
            _hover={"red"}
            bg={"#222222"}
            color={"white"}
            fontSize={"1.2rem"}
            mb={"10px"}
            w={"100%"}
            h={"70px"}
          >
            REVIEW BAG & CHECKOUT
          </Button>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  