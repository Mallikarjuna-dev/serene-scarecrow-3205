import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getFromCart } from '../Redux/CartReducer/action';
import { Navigate } from 'react-router-dom';
export const CartCounter = () => {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart.cart)
    useEffect(() => {
        if(cart?.length===0){
            dispatch(getFromCart())
        }      
     },[cart?.length,dispatch])
     console.log(cart.length)
  return (
      <Box position={"absolute"} backgroundColor={"tomato"} textColor="black" width="20px" height="25px" pb={ "5px"} pl={ "5px"} marginLeft={"1.5rem"} borderRadius={"50%"}>
          {cart?.length?cart.length:0 }
    </Box>
  )
}

