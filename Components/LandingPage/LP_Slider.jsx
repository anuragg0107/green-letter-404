import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Center, Square, Circle } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "@chakra-ui/react";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const LP_Slider = () => {
  return (
    <div>
      {/* <Center color='white'> */}
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2750,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#">
            <Image 
            borderTopRadius={"20px"}
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"}
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"}
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} 
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"}
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415" />
          </a>
        </SwiperSlide>
      </Swiper>
      {/* </Center> */}
    </div>
  );
};

export default LP_Slider;
