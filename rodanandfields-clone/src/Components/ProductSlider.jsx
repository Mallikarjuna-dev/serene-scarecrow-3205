
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Keyboard, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

// import "swiper/css/pagination";
import "./Styles/styles2.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/AppReducer/action";
import slider from "./Image/slider2.webp"
const ProductSlider = () => {
  const products = useSelector((state) => state.AppReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts("best-sellers"))
    }
  }, [dispatch, products?.length])
  console.log(products)
  return (
    <>


      <Swiper border={ "2px solid red"}
        direction={"horizontal"}
        slidesPerView={8}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        style={{ backgroundImage: `url(${slider})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
  
        grabCursor={true}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          750: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}


        modules={[Mousewheel, Keyboard, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide border={ "2px solid red"} >
          <div className="unique">
            <p style={{ marginBottom: "50px" }}>
              Discover the life-changing products loved by millions.
            </p>
            <a href="#" style={{ fontSize: "17px", fontWeight: "500", marginTop: '100px', textDecoration: "underline" }}>Shop Best Sellers</a>
          </div>
        </SwiperSlide>
        {products.length > 0 && products.map((item) => {
          return <SwiperSlide border={ "2px solid red"} key={item.id}>
            <div>
              <img src={item.productimage} alt="image not available" />
              <p style={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px", marginTop: "10px" }}>{item.title}</p>
              <p style={{ fontSize: "14px", fontWeight: "500", marginLeft: "10px", marginTop: "10px" }}>{item.offer}</p>
              <p style={{ fontSize: "19px", fontWeight: "550", marginLeft: "10px", marginTop: "10px" }}>{`$${item.retailprice}`}</p>
              <p style={{ fontSize: "12px", fontWeight: "400", marginLeft: "10px" }}>Retail Price</p>
              <p style={{ fontSize: "19px", fontWeight: "550", marginLeft: "10px", marginTop: "10px" }}>★★★★★4.5</p>
              <Link to="/productpage"><button style={{ borderRadius: "5px", fontWeight: "500", marginTop: "40px", border: "1px solid black", padding: "10px 110px 10px 110px ", marginLeft: "10px" }}>SHOP NOW</button></Link>
            </div>
          </SwiperSlide>
        })}

      </Swiper>
    </>
  )
}

export default ProductSlider