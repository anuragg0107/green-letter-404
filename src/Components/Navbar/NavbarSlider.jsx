// impot swiperstyle in css

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import React from "react";

const NavbarSlider=()=>{
  return(
    <>
    <Swiper
        color='white'
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          style={{textAlign: "center",
         backgroundColor:"gray",
         color:"white",
         textDecoration :"underline", fontStyle:"bold",
          fontWeight:"500" }}>
          <SwiperSlide>SPIN & WIN EXCITING OFFERS</SwiperSlide>
          <SwiperSlide>BUY 2 AND GET 1 FREE ON ALL PRODUCTS. USE CODE: B2G1</SwiperSlide>
          <SwiperSlide>NEW LAUNCH : SUPER POTENT FACE SERUMS</SwiperSlide>
          <SwiperSlide >FREE CICA FACEWASH ON ALL ORDERS</SwiperSlide>
        </Swiper>
    </>
  )
}
export default NavbarSlider