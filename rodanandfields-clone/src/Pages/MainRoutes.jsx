import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import Consultant from "../Components/Consultant";
import LandingPage from "../Components/LandingPage";
import Perksprogram from "../Components/Perksprogram";

import ProductPage from "../Components/ProductPage";
import ProductDetails from "../Components/ProductDetails"

import Checkoutpage from "./Checkoutpage";
import PaymentPage from "./PaymentPage";

const MainRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pc-perks" element={<Perksprogram />} />
        <Route path="/become-a-consultant" element={<Consultant />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/productpage/:id" element={<ProductDetails />} />
        <Route path="/productpage" element={<ProductPage />}/>

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<Checkoutpage />} />

      </Routes>
  
  );
};

export default MainRoutes;
