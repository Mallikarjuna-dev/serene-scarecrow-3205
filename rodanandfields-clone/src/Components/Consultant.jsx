import React from "react";
import {
  Container,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import UpperNavbar from "./UpperNavbar";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Consultant = () => {
  return (
    <>
      <UpperNavbar />
      <Navbar />
      <Container maxW="90%" border="1px solid transparent">
        <Box w={"100%"} m="auto" h="600px" border="1px solid transparent">
          <Flex>
            <Box w="35%" bg="#9fbbd0">
              <Box margin="65px 140px 30px 65px">
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  textAlign="left"
                  color="#222222"
                  fontStyle="normal"
                >
                  Build a Business.
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Join a
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Community.
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Make a
                </Text>
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="40px"
                  fontWeight="400"
                  lineHeight="51px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Difference.
                </Text>
                <Text
                  mt="35px"
                  fontFamily="ProximaNovaRegular"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="24px"
                  color="#222222"
                  fontStyle="normal"
                >
                  Join the #1 Premium Skincare Regimen Brand in the U.S.
                  2018-2021* and start changing skin + lives.
                </Text>
                <Button
                  mt="70px"
                  fontFamily="ProximaNovaRegular"
                  color="#222222"
                  fontSize="16px"
                  fontWeight="500"
                  borderRadius="5px"
                  variant="outline"
                  p="15px 110px"
                  bg="#FFFFFF"
                  borderColor="1px solid black"
                  _hover="none"
                >
                  JOIN NOW
                </Button>
              </Box>
            </Box>
            <Box w="65%">
              <Image src="https://www.rodanandfields.com/en-us/medias/LandingPage-Hero-Desktop-947x600.jpg?context=bWFzdGVyfHJvb3R8NTQ5OTg4fGltYWdlL2pwZWd8aDkyL2gzNy8xMzkxNjM2Nzc0OTE1MC5qcGd8OGZhNGVlOGVkYTQ2MWNkNDRkNjQ3ZTNiODNkZGZlNjc2MDY1YjIwOGY4YTNkNDkxZDllMWQwZTVjMzdhOTg0Ng" />
            </Box>
          </Flex>
        </Box>

        <Box w={"97%"} m="auto" h="580px" mt="15px">
          <Flex>
            <Box w="35%">
              <Image src="https://www.rodanandfields.com/en-us/medias/3-Reasons-Module-Image-AU.png?context=bWFzdGVyfHJvb3R8MTM3MDM2NnxpbWFnZS9wbmd8aDc2L2hkNy8xNTM1MjQ4MDIwMjc4Mi5wbmd8MzM0NmFhZDZmODZiODgwYzgwZjg3MDJlZTFlMjk1YWNjYWFmNWFkNGMyZWIzYjgzZjNiMGJhYTNmNzUxNWNmZg" />
            </Box>
            <Box w="65%" bg="#E2D3CC">
              <Box w="100%" p="20px 38px" h="23%">
                <Text
                  fontFamily="RFFontRoman"
                  fontSize="30px"
                  fontWeight="400"
                  lineHeight="38px"
                  textAlign="left"
                  color="#222222"
                  fontStyle="normal"
                >
                  3 Reasons to Become an R+F Consultant
                </Text>
                <Text
                  mt="10px"
                  fontFamily="ProximaNovaRegular"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="24px"
                  textAlign="left"
                  color="#222222"
                  fontStyle="normal"
                >
                  It’s all up to you! Start a flexible business—your schedule,
                  your terms—with built in community + expert support. You
                  decide the level of effort you want to put in, because you do
                  it your way – your business, your goals.
                </Text>
              </Box>
              <Box
                fontFamily="ProximaNovaRegular"
                textAlign="left"
                color="#222222"
                w="100%"
                p="15px 40px"
                h="77%"
              >
                <Flex gap="45px">
                  <Box>
                    <Heading mb="7px" fontWeight="500" fontSize="16px">
                      Opportunity to Make Extra Cash
                    </Heading>
                    <Text fontWeight="300" fontSize="16px">
                      You can start earning right away while you grow with a
                      full support system – an easy-to-use app to track your
                      sales and customers, simple + effective trainings, and
                      access to expertise. Plus, it’s a low cost of entry +
                      there’s no inventory to carry.
                    </Text>
                    <Heading
                      mt="180px"
                      textDecoration="underline"
                      fontWeight="500"
                      fontSize="16px"
                    >
                      Opportunity to Make Extra Cash
                    </Heading>
                  </Box>
                  <Box>
                    <Heading mb="7px" fontWeight="500" fontSize="16px">
                      Life-Changing Skincare
                    </Heading>
                    <Text mb="20px" fontWeight="300" fontSize="16px">
                      Our formulas are proven to deliver life-changing visible
                      results. That’s why we have 20+ industry awards and are
                      the #1 Premium Skincare Regimen Brand in the U.S.*
                      2018-2021.
                    </Text>
                    <Text fontWeight="300" fontSize="16px">
                      *Source: Euromonitor International Limited; Beauty and
                      Personal Care 2022 Edition; all channels; Premium Skin
                      Care Regimen includes Sets and Kits; retail value RSP
                      terms
                    </Text>
                    <Heading
                      mt="15px"
                      textDecoration="underline"
                      fontWeight="500"
                      fontSize="16px"
                    >
                      Opportunity to Make Extra Cash
                    </Heading>
                  </Box>
                  <Box>
                    <Heading mb="7px" fontWeight="500" fontSize="16px">
                      The R+F Difference
                    </Heading>
                    <Text fontWeight="300" fontSize="16px">
                      Be part of a billion-dollar brand with major growth
                      potential. The global skincare market is valued at $139B.
                      We’re only in 3 countries right now with big plans to
                      expand.
                    </Text>
                    <Link to="#">
                      <Heading
                        mt="180px"
                        textDecoration="underline"
                        fontWeight="500"
                        fontSize="16px"
                      >
                        R+F By Numbers
                      </Heading>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          w="100%"
          m="auto"
          h="460px"
          mt="15px"
          border="1px solid transparent"
        >
          <Box p="30px" textAlign="center" h="90px">
            <Text
              fontFamily="RFFontRoman"
              color="#222222"
              fontWeight="400"
              fontSize="30px"
              lineHeight="38px"
            >
              Get Started in 3 Simple Steps
            </Text>
          </Box>
          <Box h="450px">
            <Flex
              fontFamily="ProximaNovaRegular"
              color="#222222"
              fontWeight="400"
              justifyContent="space-around"
            >
              <Box w="25%" h="340px">
                <Image src="https://www.rodanandfields.com/en-us/medias/Getting-Started-Business-Starter-Pack-Marketing-Landing-Page-752x358-US.jpg?context=bWFzdGVyfHJvb3R8NDY1MTN8aW1hZ2UvanBlZ3xoNDYvaGEwLzE0ODgyMjA0MzE5Nzc0LmpwZ3w0MTI1ZTVmMjgzNzk3ZmY0NTBlOGJiNzljMTU4MTZhYTRiZmZlYzM1YTgzOTBlMmY2ZGNiMDA0YjU2NDhhMjdm" />
                <Heading mt="18px" fontSize="20px" lineHeight="26px">
                  Buy Your Business Starter Pack
                </Heading>
                <Text
                  p="0px 29px 0px 0px"
                  mt="18px"
                  fontSize="16px"
                  lineHeight="20px"
                >
                  Get everything you need to jumpstart your business for a low,
                  one-time fee of just $75.
                </Text>
              </Box>
              <Box w="25%">
                <Image src="https://www.rodanandfields.com/en-us/medias/Getting-Started-Life-Changing-Products-Desktop.jpg?context=bWFzdGVyfHJvb3R8MjY5Mzh8aW1hZ2UvanBlZ3xoZTkvaDdjLzE0MzcyMDYxODM5MzkwLmpwZ3wwNGFmZmMyY2RmNTg3NWQxYjhlMDAxYzQ0YmZmOWI2YjhmNGMwNjBiNzQwMWZlODI3NjVmYTI0NjAzMjIzMDUz" />
                <Heading mt="18px" fontSize="20px" lineHeight="26px">
                  Get Your Exclusive One-Time Offer
                </Heading>
                <Text
                  p="0px 24px 0px 0px"
                  mt="18px"
                  fontSize="16px"
                  lineHeight="20px"
                >
                  Benefit from a limited-time invitation to save an additional
                  30% off the Consultant price on recommended R+F products.
                </Text>
              </Box>
              <Box w="25%">
                <Image src="https://www.rodanandfields.com/en-us/medias/Getting-Started-Resources-And-Support-Desktop.jpg?context=bWFzdGVyfHJvb3R8Nzg4MDB8aW1hZ2UvanBlZ3xoNTkvaGJmLzE0MzcyMDYxOTA0OTI2LmpwZ3w2NzEyMzc2ZjJmYjhhM2RlY2VmMjQ2Mjc5YTg0ZDFhNWIwMjFhYTIxYTRjMGE3MzJjYTgzYjI3ODZkMDZmYTBj" />
                <Heading mt="18px" fontSize="20px" lineHeight="26px">
                  Start Sharing Your Business
                </Heading>
                <Text
                  p="0px 24px 0px 0px"
                  mt="18px"
                  fontSize="16px"
                  lineHeight="20px"
                >
                  Enjoy unlimited access to a full support system including an
                  easy-to-use app to manage your business, ongoing trainings,
                  innovative tools, corporate resources and more.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Box w="100%" h="850px" bg="#F8F8F8" border="1px solid transparent">
        <Box w="54%" h="600px" m="auto" mt="80px">
          <Box m="50px 0px">
            <Text fontFamily="RFFontRoman" fontSize="32px" lineHeight="40px">
              Want to learn more?
            </Text>
          </Box>
          <Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px">
                        What are the advantages of becoming an Independent
                        Consultant for Rodan + Fields?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  If you want the best-looking skin of your life, connections to
                  inspiring people, personal development, a flexible schedule
                  and your own business in the billion-dollar skincare industry,
                  R+F may be the opportunity for you. As R+F develops more
                  innovations and expands globally, you can be a part of our
                  future growth by becoming an Independent Consultant.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px">
                        How can I become an R+F Independent Consultant?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can enroll through another Consultant’s Personal Website
                  or through the Enrollment page on our website. All you need to
                  become an R+F Independent Consultant is the Rodan + Fields
                  Business Starter Pack! This Business Starter Pack empowers you
                  to jumpstart your R+F journey with business-building tools and
                  samples of our top-selling products designed to help you
                  introduce the R+F brand to prospective Customers and team
                  members and set your business up for success.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px">What is PULSE by Penny?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  PULSE by Penny is your go-to tool to manage and grow your
                  business – anywhere, anytime and from any device. All
                  Consultants have free access to PULSE by Penny Basic and for
                  the monthly price of $24.95, plus applicable taxes, you can
                  subscribe to PULSE by Penny Pro and access a suite of enhanced
                  features. All new Consultants will receive PULSE by Penny Pro
                  for free during their enrollment month and for the following
                  three months. You may choose to subscribe to Pro at any time
                  during or after your free trial, but you must subscribe before
                  your trial period has ended if you wish to maintain access to
                  the activity history and information you’ve accumulated in the
                  PULSE by Penny Pro version. For more information on PULSE by
                  Penny, including your Pro free trial, please see the PULSE by
                  Penny Terms and Conditions.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px">
                        What are the differences between PULSE by Penny Basic
                        and Pro?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  All Consultants receive complimentary access to PULSE by Penny
                  Basic to complete their business-building needs, such as
                  checking on upcoming orders, viewing their team’s progress and
                  getting a high-level dashboard of their personal performance.
                  With PULSE by Penny Pro, you also receive a suite of enhanced
                  features, such as: • Your Daily, where you see a list of
                  curated tasks based on your data and momentum. • R+F SOCIAL,
                  an all-in-one social media tool to help you grow your network
                  and share content about your business and products with ease.
                  • The full R+F Virtual site for exclusive training videos and
                  analysis tracking as you share with prospective business
                  partners. • Free shipping on all orders of 100 Sales Volume
                  (SV) or more. That’s just a sample of what is available with
                  PULSE by Penny Pro. To see the full breakdown between Pro and
                  Basic, please see the PULSE by Penny Comparison Chart.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px">What is CRP?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  The Consultant Replenishment Program (CRP) is an optional
                  program offered to Consultants to simplify the process of
                  ordering R+F products. Subscribing to CRP means you will
                  receive regular monthly shipments of your chosen products at
                  your special Consultant price. Your credit card is
                  automatically charged each time. You can easily cancel or edit
                  your CRP order anytime.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box p="12px 0px" flex="1" textAlign="left">
                      <Text fontSize="17px"> What’s the VIP Box?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  The Very Important Product (VIP) Box is a one-time offer
                  allowing new Consultants to order personalized products at an
                  additional 30% off the Consultant price. Though the discount
                  is good for up to 60 days after enrollment, if ordered on the
                  same day as enrollment, complimentary two-day shipping is
                  included. This is the best way to experience our amazing
                  products at an incredible value.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box m="60px 350px">
            <Button
              bg="#F8F8F8"
              borderRadius="3px"
              p="15px 40px"
              border="1px solid black"
              _hover="none"
            >
              SEE MORE
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Consultant;
