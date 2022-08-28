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
import React, { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import "font-awesome/css/font-awesome.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Redux/AppReducer/action";
import { AddToCart } from "./AddToCart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UpperNavbar from "./UpperNavbar";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AppReducer.products);
  const[singleProduct,setSingleProduct] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(()=>{
    if(products.length===0){
        dispatch(getProducts())
    }
  }, [dispatch, products.length])
  useEffect(() => { 
    let temp = products?.find((e) => e.id === Number(id));
    if (temp) { 
      setSingleProduct(temp);
    }
  }, [id, products])
  console.log("products",products);
  console.log("product",singleProduct);
  return (
    <Box mt={0} key={singleProduct.id}>
      <UpperNavbar />
      <Navbar />
      <Text>Home | Rodan + Fields Active Hydration Body Replenish</Text>
      <Flex fontSize={"1.3rem"} h={"700px"}>
        <Box>
          <Image
            src={singleProduct.productimage }
          ></Image>
        </Box>
        <Box p={"2px"} pt={"50px"}>
          <Box>
            {" "}
            <Text fontSize={"16px"} color={"#7c7f88"}>
              BEST SELLER
            </Text>
          </Box>
          <Heading as={"h2"}>REDEFINE + Lash Boost Special</Heading>
          <Flex mt={"15px"} fontSize={"20px"} gap={3}>
            <span style={{ color: "red" }}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half"></i>
            </span>
          </Flex>
          <Text>
            Ditch wrinkles + mascara. Our best selling anti-aging skincare
            routine pairs with our famous conditioning eyelash serum for
            younger-looking skin and eyes.
          </Text>
          <Spacer h={"10px"}></Spacer>
          <Spacer></Spacer>
          <Text>Size: 200 mL / 6.76 Fl. Oz. U.S.</Text>
          <Text> Typical Use: Daily</Text>
          <Flex gap={"250px"}>
            <Box p={"20px"}>
              <Text> $343 ($430 Value) </Text>
              <Text> Retail Price</Text>
            </Box>
            <Box borderLeft={"2px solid black"} p={"20px"}>
              <Text>$307</Text>
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
            <Text>
              {" "}
              4 interest-free payments of $85.75 with Klarna. Learn More
            </Text>
          </Box>
          
          <AddToCart product={singleProduct} />
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    {" "}
                    <a href=""> Agile From 10,000 Feet 2m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Incremental or Iterative 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> A Lesson From Book Publishing 3m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Shipping Products Bit by Bit 4m</a>
                  </li>
                  <li>
                    {" "}
                    <a href=""> Finding the Agile That Works for You 4m</a>
                  </li>
                </ul>
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
