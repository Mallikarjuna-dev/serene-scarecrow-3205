import React from "react";
import { Box, Image, Heading, Text,Grid,GridItem } from "@chakra-ui/react";
import prf from "../Components/Image/prf.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../Redux/AppReducer/action";

const ProductPage = () => {
    const products =useSelector((state)=>state.AppReducer.products);
    const dispatch =useDispatch();

    useEffect(()=>{
        if(products.length===0){
            dispatch(getProducts())
        }
    },[dispatch,products.length])
  return (
    <Box w={"100%"} backgroundColor={"#ffffff"} >
      <Box w={"80%"}m={"auto"}>
        <Box
          w={"100%"}
          height={"160px"}
          
          m={"auto"}
          display={"flex"}
        >
          <Box w={"50%"} h={"100%"}>
            <Image
              src={prf}
              alt={"image naot available"}
              w={"100%"}
              h={"100%"}
            ></Image>
          </Box>
          <Box w={"50%"} bgColor={"#f7f2ef"} h={"100%"} pl={"30px"} pt={"20px"}>
          <Heading fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"25px"}
              fontWeight={"500"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"1px"}
              maxWidth={"none"}>Skincare Regimens</Heading>
                  <Box w={"65%"}>
                  <Text
                        fontSize={"12px"}
                        fontWeight={"450"}
                        >Finding a good skincare routine is easier than you may think. Our multi-step Regimens take the guesswork out of building a routine that works.</Text>
                    </Box>     
          </Box>
        </Box>
        <Box w={"100%"} height={"50px"} mt={"30px"} bgColor={"white"}>
            <Text fontSize={"16px"} fontWeight={"550"} ml={"10px"}>Regimen</Text>
            <Text fontSize={"13px"} fontWeight={"400"} ml={"10px"}>Our skincare routines are made easy with our unique Multi-Med Therapy, providing the right ingredients, in the right formulas, in the right order.</Text>

        </Box>
        <Box width={"100%"} >
            <Grid 
                templateRows={"repeat(auto,1fr)"}
                templateColumns={"repeat(4,1fr)"}
                rowGap={"20px"}
                columnGap={"10px"}
                justifyContent={"center"}
                p={"20px"}
            >
              
                  

                    {products.length>0 && products.map((item)=>{
                        return (<GridItem key={item.id} height={"300px"} >
                                 <img src={item.productimage} alt="image not available" width={"50%"} style={{margin:"auto"}} height={"150px"} />
                    <p style={{fontSize:"13px", fontWeight:"500",marginLeft:"10px",marginTop:"3px"}}>{item.title}</p>
                    <p style={{fontSize:"12px", fontWeight:"500",marginLeft:"10px", marginTop:"3px"}}>{item.offer}</p>
                    <p style={{fontSize:"17px",fontWeight:"550",marginLeft:"10px" , marginTop:"3px"}}>{`$${item.retailprice}`}</p>
                    <p style={{fontSize:"10x",fontWeight:"400",marginLeft:"10px"}}>Retail Price</p>
                    <p style={{fontSize:"15px",fontWeight:"550",marginLeft:"10px" , marginTop:"3px"}}>★★★★★4.5</p>
                    <Link to={`/productpage/${item.id}`}><button style={{borderRadius:"5px",fontWeight:"500",marginTop:"15px", border:"1px solid black",padding:"5px 65px 5px 65px ",marginLeft:"10px"}}>ADD TO BAG</button></Link>
                        </GridItem>)
                    })}
            </Grid>

        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
