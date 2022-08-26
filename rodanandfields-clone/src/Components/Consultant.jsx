import React from "react";
import { Container, Box } from "@chakra-ui/react";
import UpperNavbar from "./UpperNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Consultant = () => {
  return (
    <>
      <UpperNavbar />
      <Navbar />
      <Container maxW="95%" border="1px solid black">
        <Box bg="pink">divs</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Consultant;
