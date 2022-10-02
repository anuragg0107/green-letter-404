import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const NavbarTopSlider = () => {
  return (
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
          style={{textAlign: "center"}}
        >
          <SwiperSlide >FLAT 300RS. OFF ON 1300+| USE CODE FLAT300</SwiperSlide>
          <SwiperSlide>FLASH SALE: serums & masks at Flat 499</SwiperSlide>
          <SwiperSlide>3%OFF ON PREPAID ORDER</SwiperSlide>
          <SwiperSlide>FREE CICA FACEWASH ON ALL ORDERS</SwiperSlide>
          <SwiperSlide style={{color: "white"}}>
           FLAT 200RS. OFF ON 1000+ | USE CODE FLAT200
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default NavbarTopSlider;
