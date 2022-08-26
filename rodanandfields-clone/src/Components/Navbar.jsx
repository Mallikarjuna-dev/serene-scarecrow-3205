
import {Link  } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-div">
      <ul className="ul">
        <li className="li">
          SHOP
          <div className="mega-menu" id="first-mega" >
            <div className="innerCoated">
            <div className="inner-mega-menu" >
              <p> SHOP BY CATEGORY</p>
              
                {/* <RouterLink>Skincare Regimens</RouterLink> */}
              
              
                {/* <RouterLink>Lash & Brow</RouterLink> */}
            
             
            </div>
            <div className="inner-mega-menu">
               <Link to="/perksprogram">SHOP BY CONCERN</Link>
              
                
              
              
                
            
              {/*<p>
                <RouterLink>Dark Spots & Uneven Skin Tone</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Sensitivity & Visible Redness</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Dull & Tired Skin</RouterLink>
              </p>
              <p>
                <RouterLink>Dry Skin</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Teen Acne</RouterLink>
              </p> */}
            </div>
            <div className="inner-mega-menu">
              <p>SHOP BY PRODUCT LINE</p>
              
                {/* <RouterLink>Redefine</RouterLink> */}
              
              {/* <p>
                <RouterLink>Reverse</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Unblemish</RouterLink>
              </p>
              <p>
                <RouterLink>Soothe</RouterLink>
              </p>
              <p>
                <RouterLink>Recharge</RouterLink>
              </p>
              <p>
                <RouterLink>Spotless</RouterLink>
              </p>
              <p>
                <RouterLink>Enhancements</RouterLink>
              </p>
              <p>
                <RouterLink>Pro Skincare Tools</RouterLink>
              </p>
              <p>
                <RouterLink>Essentials</RouterLink>
              </p>
              <p>
                <RouterLink>All Product</RouterLink>
              </p> */}
            </div>
            </div>
          </div>
        </li>
        <li className="li">BEST SELLERS</li>
        <li className="li">
          FEATURED
          <div className="mega-menu">
            <div className="inner-mega-menu" id="feature-inner">
              
                {/* <RouterLink>Special Offers</RouterLink> */}
              
              {/* <p>
                <RouterLink>Before and Afters</RouterLink>
              </p>
              <p>
                <RouterLink>New Total RF Serum</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Spotless for Teens</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Self-Care Essential</RouterLink>
              </p> */}
            </div>
          </div>
        </li>
        <li className="li">
          OUR STORY
          <div className="mega-menu">
            <div className="inner-mega-menu">
           




           
                {/* <RouterLink> R+F Difference</RouterLink> */}
            
              {/* <p>
                <RouterLink>Explore Our Regimens</RouterLink>
              </p>
              <p>
                <RouterLink>Our Founders</RouterLink>
              </p>
              <p>
                <RouterLink>Our Impact</RouterLink>
              </p>
              <p>
                <RouterLink>Eye Creams & Treatments</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Face Serums & Treatments</RouterLink>
              </p>
              <p>
                <RouterLink>Face Masks</RouterLink>
              </p>
              <p>
                <RouterLink>Moisturizers</RouterLink>
              </p>
              <p>
                {" "}
                <RouterLink>Cleansers & Makeup Removers</RouterLink>
              </p>
              */}
             
            </div>
          </div>
        </li>
        <li className="li">PERKS PROGRAMS</li>
        <li className="li">BECOME A CONSULTANT</li>
        <li className="li">BLOG</li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;


