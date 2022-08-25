
import { Link as routerLink } from "react-router-dom";
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
              <p>
                <routerLink>Skincare Regimens</routerLink>
              </p>
              <p>
                <routerLink>Lash & Brow</routerLink>
              </p>
              <p>
                <routerLink>Eye Creams & Treatments</routerLink>
              </p>
              <p>
                <routerLink>Eye Creams & Treatments</routerLink>
              </p>
              <p>
                <routerLink>Eye Creams & Treatments</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Face Serums & Treatments</routerLink>
              </p>
              <p>
                <routerLink>Face Masks</routerLink>
              </p>
              <p>
                <routerLink>Moisturizers</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Cleansers & Makeup Removers</routerLink>
              </p>
              <p>
                <routerLink>Toners</routerLink>
              </p>
              <p>
                <routerLink>Sun Protection</routerLink>
              </p>
              <p>
                <routerLink>Tools & Accessories</routerLink>
              </p>
              <p>
                <routerLink>Hand & Body</routerLink>
              </p>
            </div>
            <div className="inner-mega-menu">
              <p> SHOP BY CONCERN</p>
              <p>
                <routerLink>Anti-Aging</routerLink>
              </p>
              <p>
                <routerLink>Acne, Pores & Blackheads</routerLink>
              </p>
              <p>
                <routerLink>Dark Spots & Uneven Skin Tone</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Sensitivity & Visible Redness</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Dull & Tired Skin</routerLink>
              </p>
              <p>
                <routerLink>Dry Skin</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Teen Acne</routerLink>
              </p>
            </div>
            <div className="inner-mega-menu">
              <p>SHOP BY PRODUCT LINE</p>
              <p>
                {" "}
                <routerLink>Redefine</routerLink>
              </p>
              <p>
                <routerLink>Reverse</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Unblemish</routerLink>
              </p>
              <p>
                <routerLink>Soothe</routerLink>
              </p>
              <p>
                <routerLink>Recharge</routerLink>
              </p>
              <p>
                <routerLink>Spotless</routerLink>
              </p>
              <p>
                <routerLink>Enhancements</routerLink>
              </p>
              <p>
                <routerLink>Pro Skincare Tools</routerLink>
              </p>
              <p>
                <routerLink>Essentials</routerLink>
              </p>
              <p>
                <routerLink>All Product</routerLink>
              </p>
            </div>
            </div>
          </div>
        </li>
        <li className="li">BEST SELLERS</li>
        <li className="li">
          FEATURED
          <div className="mega-menu">
            <div className="inner-mega-menu" id="feature-inner">
              <p>
                <routerLink>Special Offers</routerLink>
              </p>
              <p>
                <routerLink>Before and Afters</routerLink>
              </p>
              <p>
                <routerLink>New Total RF Serum</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Spotless for Teens</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Self-Care Essential</routerLink>
              </p>
            </div>
          </div>
        </li>
        <li className="li">
          OUR STORY
          <div className="mega-menu">
            <div className="inner-mega-menu">
           




              <p>
                <routerLink> R+F Difference</routerLink>
              </p>
              <p>
                <routerLink>Explore Our Regimens</routerLink>
              </p>
              <p>
                <routerLink>Our Founders</routerLink>
              </p>
              <p>
                <routerLink>Our Impac</routerLink>
              </p>
              <p>
                <routerLink>Eye Creams & Treatments</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Face Serums & Treatments</routerLink>
              </p>
              <p>
                <routerLink>Face Masks</routerLink>
              </p>
              <p>
                <routerLink>Moisturizers</routerLink>
              </p>
              <p>
                {" "}
                <routerLink>Cleansers & Makeup Removers</routerLink>
              </p>
             
             
            </div>
          </div>
        </li>
        <li className="li">PERKS PROGRAM</li>
        <li className="li">BECOME A CONSULTANT</li>
        <li className="li">BLOG</li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;


