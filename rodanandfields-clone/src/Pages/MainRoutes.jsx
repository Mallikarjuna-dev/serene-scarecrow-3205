import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import { Cart } from "../Components/Cart";
import Consultant from "../Components/Consultant";
import LandingPage from "../Components/LandingPage";
import Perksprogram from "../Components/Perksprogram";
import ReviewAndCheckout from "../Components/ReviewAndCheckout";

import ProductPage from "../Components/ProductPage";
import ProductDetails from "../Components/ProductDetails";

import Checkoutpage from "./Checkoutpage";
import PaymentPage from "./PaymentPage";
import Login from "../Components/LoginSignup/Login";
import BestSeller from "../Components/BestSeller";
import EyeCreams from "../Components/EyeCreams";
import SkinCare from "../Components/SkinCare";
import Signup from "../Components/LoginSignup/Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pc-perks" element={<Perksprogram />} />
      <Route path="/become-a-consultant" element={<Consultant />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/bagreview" element={<ReviewAndCheckout />} />
      <Route path="/best-sellers" element={<BestSeller />} />
      <Route path="/eyecreams" element={<EyeCreams />} />
      <Route path="/skincare" element={<SkinCare />} />

      <Route path="/productpage/:id" element={<ProductDetails />} />
      <Route path="/productpage" element={<ProductPage />} />

      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/checkout" element={<Checkoutpage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
