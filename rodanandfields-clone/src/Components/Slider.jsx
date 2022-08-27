import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Keyboard, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import "swiper/css/pagination";
import "./Styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/AppReducer/action";

const Slider = () => {
  const products =useSelector((state)=>state.AppReducer.products)
  const dispatch =useDispatch();
  useEffect(()=>{
    if(products.length===0){
      dispatch(getProducts());
    }
  },[dispatch,products.length])
  return (
    <>
      <Swiper
      id="swiper"
        slidesPerView={5}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 4,
          },
        }}
        // scrollbar={true}, Scrollbar
        navigation={true}
        modules={[Keyboard, Autoplay, Navigation]}
        className="mySwiper"
      >


       {products.length>0 && products.map((item)=>{
        return (
            <SwiperSlide key={item.id} id={"swiperslider"}>
                      <div>
                        <img src={item.productimage} alt="image not available" />
                      </div>
            </SwiperSlide>
        )
       })}
       

        
      </Swiper>
    </>
  );
};

export default Slider;
