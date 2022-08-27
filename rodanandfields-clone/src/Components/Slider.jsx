import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Keyboard, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import "swiper/css/pagination";
import "./styles.css";

const Slider = () => {
  return (
    <>
      <Swiper
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
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"
            width={"200px"}
            height={"200px"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
