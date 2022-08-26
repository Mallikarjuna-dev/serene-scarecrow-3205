import React from 'react'
import {Routes, Route} from "react-router-dom";
import LandingPage from '../Components/LandingPage';
import Navbar from '../Components/Navbar';
import Perksprogram from "../Components/Perksprogram"
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path ="/perksprogram" element={<Perksprogram/>}/>
 
        
    </Routes>
    </>
  )
}

export default MainRoutes