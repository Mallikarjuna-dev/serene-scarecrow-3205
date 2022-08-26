import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import Consultant from "../Components/Consultant";
import LandingPage from "../Components/LandingPage";
// import Navbar from '../Components/Navbar';
import Perksprogram from "../Components/Perksprogram";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pc-perks" element={<Perksprogram />} />
        <Route path="/become-a-consultant" element={<Consultant />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
