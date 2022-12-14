import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";




import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Redux/AppReducer/action";
import { AddToCart } from "./AddToCart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UpperNavbar from "./UpperNavbar";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AppReducer.products);
  const [currentProduct, setCurrentProduct] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts())
    }
  }, [dispatch, products?.length])
  useEffect(() => {
    let temp = products?.find((e) => e.id === Number(id));
    if (temp) {
      setCurrentProduct(temp);
    }
  }, [id, products])
  console.log("products", products);

  return (
    <Box mt={0} key={currentProduct.id}>
      <UpperNavbar />
      <Navbar />
      <Text>Home | Rodan + Fields Active Hydration Body Replenish</Text>
      <Flex fontSize={"1.3rem"} h={"700px"}>
        <Box>
          <Image
            src={currentProduct.productimage}
          ></Image>

        </Box>
        <Box p={"2px"} pt={"50px"}>
          <Box>
            {" "}
            <Text fontSize={"16px"} color={"#7c7f88"}>
              {currentProduct.header}
            </Text>
          </Box>
          <Heading as={"h2"}>{currentProduct.title}</Heading>
          <Flex mt={"15px"} fontSize={"20px"} gap={3}>
            <span style={{ color: "red" }}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half"></i>
            </span>
          </Flex>
          <Text> {currentProduct.description}</Text>
          <Spacer h={"10px"}></Spacer>
          <Spacer></Spacer>
          <Text>Size: 200 mL / 6.76 Fl. Oz. U.S.</Text>
          <Text> Typical Use: Daily</Text>
          <Flex gap={"250px"}>
            <Box p={"20px"}>
              <Text>{currentProduct.retailprice} </Text>
              <Text> Retail Price</Text>
            </Box>
            <Box borderLeft={"2px solid black"} p={"20px"}>
              <Text>{`$${currentProduct.perksprice}`} </Text>
              <Text>PC Perks Price</Text>
            </Box>
          </Flex>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Box
            borderTop={"1px solid grey"}
            borderBottom={"1px solid grey"}
            p={"10px"}
            pb={"20px"}
          >
            <Text>{ }</Text>
          </Box>




          <AddToCart product={currentProduct} />

          <Text>60 Day Money Back Guarantee</Text>

          <Text> Don't love it? It's on us. Learn More</Text>
          <Accordion border={"none"} fontSize={"20px"} allowToggle>
            <AccordionItem border={"none"} fontSize={"20px"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    DETAILS
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"}>
                <Text>{currentProduct.details}</Text>
              </AccordionPanel>
            </AccordionItem>
            <Spacer gap={1}></Spacer>
            <AccordionItem border={"none"} fontSize={"30px"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    INGREDIENTS
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"}>
                <Text>{currentProduct.details}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
      <Box w={"100%"} h={"150px"}></Box>
      <Box>
        <Spacer h={"40px"}></Spacer>
        <Flex>
          <Box w={"900px"} p={"50px"} pt="100px">
            <Heading mb={"30px"} as={"h2"}>
              HOW TO USE
            </Heading>
            <Text fontSize={"1.3rem"} lineHeight={"1.5rem"}>
              Use daily by applying to clean and dry skin after bathing, using
              extra product where desired. Not intended for use on face.
            </Text>
            <hr />
          </Box>
          <Box>
            <Image
              src={
                "https://www.rodanandfields.com/en-us/medias/HowTo-Generic-Image-1110x624.jpg.jpg?context=bWFzdGVyfGltYWdlc3w3NzIwNjd8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2hkOC8xNDg1NjY5ODgyMjY4Ni5qcGd8YTU5OTYzZjM1NmJmOWM5YzRjNDY0MjNjOTlmY2MwM2ViODFiYzc5ZDYxYzVkYzUzMmNiMDBhMTMwNTZmMDJiOA"
              }
            ></Image>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading mt={"70px"} mb={"25px"} as={"h3"}>
          Common questions about the Rodan + Fields Active Hydration Body
          Replenish
        </Heading>
        <Box fontSize={"30px"}>
          <Accordion border={"none"} fontSize={"30px"} allowToggle>
            <AccordionItem border={"none"} fontSize={"30px"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    What is Active Hydration Body Replenish?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"}>
                <Text>
                  Active Hydration Body Replenish is a fast-absorbing, ultra-hydrating daily body cream.
                  </Text>
              </AccordionPanel>
            </AccordionItem>
            <Spacer gap={1}></Spacer>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    Why use the Active Hydration Body Replenish versus other
                    body moisturizers?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"} pb={4}>
                <Text>Unlike traditional body products, Active Hydration Body Replenish features R+F's proprietary 3D3P Molecular Matrix, which continuously draws moisture
                  from the atmosphere and locks it onto your skin, restoring skin to its optimal hydration level.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    How does Active Hydration Body Replenish address skin
                    dryness?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"} pb={4}>
               <Text>
                  Powerful water magnets quench dryness by adding hydration to the skin's surface. The best ingredient to achieve this is Glycerin. Unfortunately,
                  Glycerin is sticky by nature so most formulas contain only 1-3% Glycerin, making them less effective.
               </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    Can the Active Hydration Body Replenish be used with the
                    Foaming Sunless Tan?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"} pb={4}>
              <Text>
                  The Active Hydration
                  Body Replenish can be used with the Foaming Sunless Tan every day for visibly smoother softer skin.
               </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    Can I use both the Active Hydration Body Replenish and the
                    Daily Body Moisturizer?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"} pb={4}>
              <Text>
                  If someone wants to use both, (although unnecessary) there really is not a reason that they cannot.
                  A suggestion is to apply the AHBR first then apply the Daily Body Moisturizer.
               </Text>
              </AccordionPanel>
            </AccordionItem>
            <Spacer></Spacer>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={"25px"}>
                    Who should use the Active Hydration Body Replenish?
                  </Box>
                  <AccordionIcon fontSize={"40px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"20px"} pb={4}>
              <Text>
                  The Active Hydration Body Replenish is designed for all skin types, and all skin types can benefit from added hydration. If you have any concerns of age or using Active Hydration Body Replenish with
                  a medical condition, please talk with your healthcare provider to see if the product is appropriate.
               </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetails;
