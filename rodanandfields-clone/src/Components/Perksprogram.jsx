import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import UpperNavbar from "./UpperNavbar";
import Footer from "./Footer";

const Perksprogram = () => {
  return (
    <>
      <UpperNavbar />
      <Navbar />
      <Container marginTop="35px" maxW="72%">
        <Box maxW="100%" textAlign="center">
          <Text
            fontFamily="RFFontRoman;"
            color="#55565a"
            fontSize="48px"
            fontWeight="200"
          >
            PC PERKS
          </Text>
          {/* <Text fontFamily=""></Text> */}
          <Text
            fontFamily="ProximaNovaRegular"
            color="#222222"
            fontSize="17px"
            fontWeight="400"
            fontStyle="normal"
            marginTop="35px"
            lineHeight="24px"
          >
            Save money, enjoy free shipping and get a free gift ($50+ retail
            price) with your 2nd order when you match with a Consultant and
            become a Preferred Customer (PC). All for a one-time fee of $19.95.
            Between discounts + free shipping, the membership pays for itself!
          </Text>
        </Box>
        <Grid
          fontFamily="ProximaNovaRegular"
          color="#222222"
          textAlign="center"
          padding="10px"
          templateColumns="repeat(3, 1fr)"
          marginTop="30px"
          gap={10}
        >
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-01.jpg?context=bWFzdGVyfHJvb3R8MTAzOTV8aW1hZ2UvanBlZ3xoZWEvaGU1LzExMDA0MzY2NzE2OTU4LmpwZ3xkOTYyNTBmYjVmNDkwYzNhNDJiMDljMTU2OTFkZWZiZTkwNTMwOWUyMDZhZjE1YjU2MGJmYjVkYzZmYzkwMWFk"
            />
            <Heading marginTop="30px" size="md">
              10% OFF
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get 10% off every order, starting with your first
            </Text>
          </GridItem>
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-02.jpg?context=bWFzdGVyfHJvb3R8OTMwOHxpbWFnZS9qcGVnfGhmZC9oMGMvMTEwMDQzNjY3ODI0OTQuanBnfDdmMzUyNGIxZDAwMjkxNmNiNjJmYWUwYzA2NjllNDFlNTNhYTMyYzBiYjA3ZjFlNWIwNGYwY2Q3NDFiMjBkOGM"
            />
            <Heading marginTop="30px" size="md">
              FREE SHIPPING
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get free shipping on orders $80+
            </Text>
          </GridItem>
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-03.jpg?context=bWFzdGVyfHJvb3R8MTIyMDF8aW1hZ2UvanBlZ3xoZTIvaDViLzExMDA0MzY2ODQ4MDMwLmpwZ3w5ZDA3ZWMzY2I4YWFlZGRhNDM1YWRjNzlmODQ4OGFhNmJkMTA3NWMzMTI5OWMwNjQ5MGE3MjZhNGM1MDY5ZTli"
            />
            <Heading marginTop="30px" size="md">
              FREE PERKS PRESENT
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get a free gift ($50+ retail price) with your 2nd order placed
              30-90 days after enrollment
            </Text>
          </GridItem>
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-04.jpg?context=bWFzdGVyfHJvb3R8MTI1MDl8aW1hZ2UvanBlZ3xoZjMvaGQ3LzExMDA0MzY2OTEzNTY2LmpwZ3xkMWRmNjQ0MDhmMTg3ZThlZmE3OWNjMmQ3YjQ3ODY3NWIzYmJiNmI1ZGQ5ZGQxODFkYWU3ZmYwZjkyMmQ0ZjA0"
            />
            <Heading marginTop="30px" size="md">
              OFFERS + REWARDS
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get exclusive access to personalized offers + rewards
            </Text>
          </GridItem>
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-05.jpg?context=bWFzdGVyfHJvb3R8MTAwNzl8aW1hZ2UvanBlZ3xoOWEvaGVkLzExMDA0MzY2OTc5MTAyLmpwZ3xiNDQ3NjE1NWIwMDY1MTI1N2RjMjk0Y2FhNTYxMDk1N2M4YjA2MjA1OTgwZTcyMTg3Y2E0ODM5Y2NlN2M0MjE4"
            />
            <Heading marginTop="30px" size="md">
              FLEX SUBSCRIPTION
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get convenient delivery of your subscription cart every 60 days.
              Adjust or cancel any time.
            </Text>
          </GridItem>
          <GridItem w="100%" h="450px">
            <Image
              marginTop="30px"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-06.jpg?context=bWFzdGVyfHJvb3R8MTIwNzh8aW1hZ2UvanBlZ3xoNDcvaDgyLzExMDA0MzY3MDQ0NjM4LmpwZ3wxZDZlYzA0MTc3M2I4OWY2NDU5NTZkMTA5ZGNkYTFkODRhOWZlM2FmOTQ3YTEyNzgyNjhkYzI5YWJjODE1M2Zj"
            />
            <Heading marginTop="30px" size="md">
              CONSULTANT
            </Heading>
            <Text marginTop="5px" fontSize="15px" fontWeight="300">
              Get personalized recommendations, advice, help & more
            </Text>
          </GridItem>
        </Grid>

        <Grid marginTop="120px" templateColumns="repeat(2, 1fr)">
          <GridItem w="100%" h="550px">
            <Image src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-07.jpg?context=bWFzdGVyfHJvb3R8MTgxNzV8aW1hZ2UvanBlZ3xoZTgvaDE0LzExMDA0MzY2NDU0ODE0LmpwZ3xkZTk5NGI5MmEyMzZkNTZkNWVmY2I1OGIzMjZlMmMwOTU4MTQ2ZWMxOTc4YTUwMTdiMWU5NmNlMWQ3NzFlOWRi" />
          </GridItem>
          <GridItem w="100%" h="550px" bg="#F5F5F5">
            <Box width="86%" margin="auto">
              <Text
                marginTop="180px"
                textAlign="center"
                fontFamily="RFFontRoman"
                fontSize="30px"
              >
                HOW TO ENROLL
              </Text>
              <Text
                marginTop="20px"
                width=""
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                Add the products you want to your cart and check the PC Perks
                box in your shopping bag to opt in on any order $80+
              </Text>
              <Button
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                borderRadius="none"
                margin="60px 26%"
                variant="outline"
                bg="#FFFFFF"
                padding="22px 75px"
                borderColor="1px solid black"
                _hover="none"
              >
                SHOP NOW
              </Button>
            </Box>
          </GridItem>
          <GridItem w="100%" h="550px" bg="#F5F5F5">
            <Box width="67%" margin="auto">
              <Text
                marginTop="220px"
                textAlign="center"
                fontFamily="RFFontRoman"
                fontSize="30px"
              >
                PCS LOVE THE PERKS
              </Text>
              <Text
                marginTop="20px"
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                “My consultant makes me feel remembered and appreciated!
              </Text>
              <Text
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                – Brianna
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="550px">
            <Image src="https://www.rodanandfields.com/en-us/medias/21-June-PC-Perks-Consultant-Image.jpg?context=bWFzdGVyfHJvb3R8MTIwNTk2fGltYWdlL2pwZWd8aGM2L2gwNi8xMzI0Mjk2MDE1MDU1OC5qcGd8MWJiNGQzMzlkNjJkMWJjNDljYmVhZThjNjM3YjZmNWFlY2YyNGY1YTM0NWUwMWRmMzRiZTgxMTRkMWFlNDQ2Zg" />
          </GridItem>
          <GridItem w="100%" h="550px">
            <Image src="https://www.rodanandfields.com/en-us/medias/21-PC-Perks-Redefine-09.jpg?context=bWFzdGVyfHJvb3R8MzI4Nzd8aW1hZ2UvanBlZ3xoYTIvaDljLzEyNzgwOTE4NjM2NTc0LmpwZ3w5OGIwOWZkMTZhNGE1ZWJiMWYyZmRiYjMzZjJkYjI1NjAxMDdhY2UzMGRkNjE1NjZjZmQ5OTJmYTQ4NWExZjBi" />
          </GridItem>
          <GridItem w="100%" h="550px" bg="#F5F5F5">
            <Box width="88%" margin="auto">
              <Text
                marginTop="220px"
                textAlign="center"
                fontFamily="RFFontRoman"
                fontSize="30px"
              >
                PCS LOVE THE PERKS
              </Text>
              <Text
                marginTop="20px"
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                “It's flexible. So, I'm not locked into buying something every
                month if I don't need it.”
              </Text>
              <Text
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                – Sherry
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="550px" bg="#F5F5F5">
            <Box width="85%" margin="auto">
              <Text
                marginTop="220px"
                textAlign="center"
                fontFamily="RFFontRoman"
                fontSize="30px"
              >
                PCS LOVE THE PERKS
              </Text>
              <Text
                marginTop="20px"
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="16px"
                fontWeight="300"
                textAlign="center"
              >
                “I find out about new products first, get 10% off everything and
                get free shipping!!”
              </Text>
              <Text
                fontFamily="ProximaNovaRegular"
                color="#222222"
                fontSize="15px"
                fontWeight="300"
                textAlign="center"
              >
                – Sherry
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="550px">
            <Image src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-10.jpg?context=bWFzdGVyfHJvb3R8MTUzMzU5fGltYWdlL2pwZWd8aDA5L2g1Ny8xMTAwNDM2NjY1MTQyMi5qcGd8Yjk4MWNlMzg5ZjYzN2ViMGMyY2RmZTk3ODZkNTBjNzJiOTkxNjAzNjU1ZmIyZDk5ZGVhZTcyMjkzOWJkMzg2Nw" />
          </GridItem>
        </Grid>

        <Box maxW="85%" margin="auto" textAlign="center" marginTop="100px">
          <Text
            fontFamily="RFFontRoman;"
            color="#222222"
            fontSize="30px"
            fontWeight="400"
          >
            ALREADY A CUSTOMER?
          </Text>
          {/* <Text fontFamily=""></Text> */}
          <Text
            fontFamily="ProximaNovaRegular"
            color="#222222"
            fontSize="15px"
            fontWeight="400"
            fontStyle="normal"
            marginTop="35px"
            lineHeight="24px"
          >
            If you’re an R+F Customer and want to upgrade to PC Perks, simply
            enroll in your cart at checkout on your next order.
          </Text>
          <Link href="#" color="#006eb3">
            <Text
              fontFamily="ProximaNovaRegular"
              fontSize="17px"
              fontWeight="400"
              fontStyle="normal"
              textDecoration="underline"
            >
              PC Perks Terms & Conditions
            </Text>
          </Link>
        </Box>

        <Box
          fontFamily="ProximaNovaRegular"
          fontSize="15px"
          fontWeight="400"
          fontStyle="normal"
          maxW="100%"
          marginTop="100px"
          marginBottom="200px"
          _hover="none"
        >
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        height="25px"
                        flex="1"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        WHAT IS A PC? ​​​​​​
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    “PC” stands for Preferred Customer. When you join the Rodan
                    + Fields PC Perks program, you become a PC, or a Preferred
                    Customer.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        color="#222222"
                        height="25px"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        WHAT IS THE PC PERKS PROGRAM? ​​​​​​​
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    PC Perks is a subscription program that offers a 10%
                    discount on all orders, free shipping on orders of $80 or
                    more (after applying the 10% PC discount), a Perks Present,
                    and deliveries every 60 days with the flexibility to change
                    future products and shipment dates in your account settings.
                    PC Perks members also gain access to exclusive offers,
                    promotions, a priority Customer Service line and receive a
                    60-day Satisfaction Guarantee on all products. You can join
                    PC Perks for a one-time fee of $19.95 with a minimum
                    subscription order of $80 or more.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        color="#222222"
                        lineHeight="20px"
                        height="25px"
                        textAlign="left"
                      >
                        HOW DO I ENROLL IN THE PC PERKS PROGRAM?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    You may enroll in PC Perks through a Consultant’s Personal
                    Website or through the R+F website at the time of checkout
                    for a one-time, non-refundable $19.95 enrollment fee. Your
                    initial subscription order must total a minimum of $80,
                    after the 10% PC Perks discount is applied, and you’ll be
                    asked to provide the required enrollment information,
                    including a valid credit card.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        HOW DO I UPGRADE TO A PC PERKS ACCOUNT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    If you are an existing Customer and would like to upgrade to
                    Preferred Customer status, simply enroll in your cart at
                    checkout on your next order.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        color="#222222"
                        height="25px"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        HOW DOES FREE SHIPPING WORK IN THE PC PERKS PROGRAM?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    For Preferred Customers, shipping is free on all orders of
                    $80 or more, after the 10% PC Perks discount is applied.
                    When you log in to the R+F website or your Consultant’s
                    Personal Website, you will identify yourself as a PC by
                    entering your email address and the password that you
                    selected when enrolling in PC Perks. Then you can view and
                    access the PC pricing and receive free shipping on all
                    orders of $80 or more, whether it is a subscription order or
                    a one-time order.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        DO I HAVE TO CHOOSE A CONSULTANT WHEN I ENROLL AS A
                        PREFERRED CUSTOMER?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    Yes, you must choose a Consultant at checkout when you
                    enroll in the PC Perks program. Your Consultant can answer
                    questions you have about PC Perks, offer personalized
                    skincare recommendations and more.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        color="#222222"
                        lineHeight="20px"
                        height="25px"
                        textAlign="left"
                      >
                        WHAT IF I DON’T KNOW A CONSULTANT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    If you don’t know any Consultants, we’ll provide the names
                    of a few at checkout who you can choose from based on
                    various factors such as your location.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        WHAT IS THE PREFERRED CUSTOMER PRICE?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    The Preferred Customer price includes a 10% discount on all
                    R+F products. It is an exclusive benefit only available
                    through the PC Perks program. The PC Price will reflect in
                    your cart for all orders. Your initial subscription order
                    will reflect the discount after you add PC Perks to your
                    cart at a one-time fee of $19.95
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        DO PC PERKS MEMBERS AUTOMATICALLY RECEIVE THE PREFERRED
                        CUSTOMER PRICE?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    Yes. Once your PC Perks account has been established, all
                    orders placed through your account, whether a subscription
                    order or a one-time order, qualify for Preferred Customer
                    pricing.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        WHAT IS A PERKS PRESENT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    U.S. Preferred Customers receive a Perks Present when you
                    place your second order, totaling $80 or more at the PC
                    price, when placed 30-90 days after your enrollment date.
                    The Perks Present is a free Rodan + Fields product ($50+
                    retail price) and will automatically be added to your cart
                    once you meet the qualifying threshold amount. Product may
                    vary.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        CAN I GET MORE THAN ONE PERKS PRESENT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    No, we only offer one Perks Present per Preferred Customer.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        WHEN AM I ELIGIBLE FOR THE PERKS PRESENT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    You can qualify for your Perks Present 30 days after you
                    enroll as a U.S. Preferred Customer. If you place an order
                    of $80+ at the PC price (after the 10% discount) between
                    30-90 days of your enrollment date, a Perks Present will
                    automatically be added to your cart when your cart meets the
                    qualifing threshold of $80 at the PC price. This offer is
                    available for PCs who enroll on or after June 16, 2020. See
                    Terms & Conditions
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        IF I RETURN MY QUALIFYING ORDER, DO I HAVE TO RETURN THE
                        PERKS GIFT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    Yes, we request that you include the free product with your
                    returned order.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        AM I ABLE TO EXCHANGE MY PERKS PRESENT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    No, the Perks Present varies depending on inventory and may
                    change at the discretion of R+F.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        height="25px"
                        color="#222222"
                        lineHeight="20px"
                        textAlign="left"
                      >
                        HOW DO I MANAGE MY PREFERRED CUSTOMER ACCOUNT?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="#3f3f3f" lineHeight="24px" pb={4}>
                    As a Preferred Customer, you will be identified by your
                    email address and the password you selected when you
                    enrolled in PC Perks. Upon entering the R+F website or your
                    Consultant’s Personal Website, you must log in to identify
                    yourself as a PC in order to view and access the PC pricing,
                    or to update your order, billing or other information on
                    file with R+F.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Perksprogram;
