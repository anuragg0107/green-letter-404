import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const ProductSlider = () => {
  return;
  <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_21.jpg?v=1663587156"
          alt="image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_2.png?v=1663587124"
          alt="image"
        />
      </SwiperSlide>
    </Swiper>
  </>;
};
export default ProductSlider;
