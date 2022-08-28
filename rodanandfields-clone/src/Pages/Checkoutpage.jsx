import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Signup from "../Components/LoginSignup/Signup";
import Navbar from "../Components/Navbar";
import UpperNavbar from "../Components/UpperNavbar";

const Checkoutpage = () => {
  const navigate = useNavigate();
  const Auth = useSelector((store) => store.isAuth);
  const [guest, setguest] = useState(false);
  const [sigup, setsigup] = useState(false);
  const [allow, setallow] = useState(false);
  return (
    <div>
      <UpperNavbar />
      <div>
        <div
          style={{
            width: "60%",
            height: "100vh",
            margin: "5rem 0rem 5rem 5rem",
            margin: "auto",
          }}
        >
          <Box display={"flex"} p={"1rem"}>
            <Button
              onClick={() => {
                setguest(true);
                setsigup(false);
              }}
              m={"5px"}
              w={"49%"}
            >
              Contiue as a guest
            </Button>{" "}
            <Button
              onClick={() => {
                setguest(false);
                setsigup(true);
              }}
              m={"5px"}
              w={"49%"}
            >
              Sign Up
            </Button>
          </Box>
          <hr style={{ border: "0.8px solid black", background: "black" }}></hr>
          {sigup && (
            <>
              <Signup />
              <hr
                style={{ border: "0.8px solid black", background: "black" }}
              ></hr>
              address 1
              <Input />
              address 2
              <Input />
              landmark
              <Input />
              <Button onClick={() => setallow(true)}>Submit</Button>
            </>
          )}
          {guest && (
            <>
              Name
              <Input />
              address 1
              <Input />
              address 2
              <Input />
              landmark
              <Input />
              phone no
              <Input />
              <Button onClick={() => setallow(true)}>Submit</Button>
            </>
          )}
          <hr
            style={{
              border: "0px solid black",
              background: "black",
              marginTop: "10px",
            }}
          ></hr>
          <Button
            disabled={!allow}
            m={"10px"}
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </Button>
        </div>
        {/* <div style={{ border: "0.8px solid red", width: "50%" }}></div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkoutpage;
