import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import { Cart } from "../Components/Cart";
import Consultant from "../Components/Consultant";
import LandingPage from "../Components/LandingPage";
import Perksprogram from "../Components/Perksprogram";
import ProductDetails from "../Components/ProductDetails";
import ReviewAndCheckout from "../Components/ReviewAndCheckout";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pc-perks" element={<Perksprogram />} />
        <Route path="/become-a-consultant" element={<Consultant />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/bagReview" element={<ReviewAndCheckout/>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
