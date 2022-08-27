import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-div">
      <ul className="ul">
        <li className="li">
          SHOP
          <div className="mega-menu" id="first-mega">
            <div className="innerCoated">
              <div className="inner-mega-menu">
                <p>SHOP BY CATEGORY</p>
                <p>
                  <Link to={"/productpage"}>Skincare Regimens</Link>
                </p>
                <p>
                  <Link to={"#"}>Lash & Brow</Link>
                </p>
                <p>
                  <Link to={"#"}>Eye Creams & Treatments</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Face Serums & Treatments</Link>
                </p>
                <p>
                  <Link to={"#"}>Face Masks</Link>
                </p>
                <p>
                  <Link to={"#"}>Moisturizers</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Cleansers & Makeup Removers</Link>
                </p>
              </div>
              <div className="inner-mega-menu">
                <p>SHOP BY CONCERN</p>
                <p>
                  <Link to={"#"}>Dark Spots & Uneven Skin Tone</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Sensitivity & Visible Redness</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Dull & Tired Skin</Link>
                </p>
                <p>
                  <Link to={"#"}>Dry Skin</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Teen Acne</Link>
                </p>
              </div>
              <div className="inner-mega-menu">
                <p>SHOP BY PRODUCT LINE</p>
                <p>
                  <Link to={"#"}>Redefine</Link>
                </p>
                <p>
                  <Link to={"#"}>Reverse</Link>
                </p>
                <p>
                  {" "}
                  <Link to={"#"}>Unblemish</Link>
                </p>
                <p>
                  <Link to={"#"}>Soothe</Link>
                </p>
                <p>
                  <Link to={"#"}>Recharge</Link>
                </p>
                <p>
                  <Link to={"#"}>Spotless</Link>
                </p>
                <p>
                  <Link to={"#"}>Enhancements</Link>
                </p>
                <p>
                  <Link to={"#"}>Pro Skincare Tools</Link>
                </p>
                <p>
                  <Link to={"#"}>Essentials</Link>
                </p>
                <p>
                  <Link to={"#"}>All Product</Link>
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
                <Link to={"#"}>Special Offers</Link>
              </p>
              <p>
                <Link to={"#"}>Before and Afters</Link>
              </p>
              <p>
                <Link to={"#"}>New Total RF Serum</Link>
              </p>
              <p>
                {" "}
                <Link to={"#"}>Spotless for Teens</Link>
              </p>
              <p>
                {" "}
                <Link to={"#"}>Self-Care Essential</Link>
              </p>
            </div>
          </div>
        </li>
        <li className="li">
          OUR STORY
          <div className="mega-menu">
            <div className="inner-mega-menu">
              <p>
                <Link to={"#"}> R+F Difference</Link>
              </p>
              <p>
                <Link to={"#"}>Explore Our Regimens</Link>
              </p>
              <p>
                <Link to={"#"}>Our Founders</Link>
              </p>
              <p>
                <Link to={"#"}>Our Impact</Link>
              </p>
            </div>
          </div>
        </li>
        <li className="li">
          <Link to={"/pc-perks"}>PERKS PROGRAMS</Link>
        </li>
        <li className="li">
          <Link to={"/become-a-consultant"}>BECOME A CONSULTANT</Link>
        </li>
        <li className="li">
          <Link to={"/blog"}>BLOG</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
