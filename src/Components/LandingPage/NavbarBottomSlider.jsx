import { Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../AllStyle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const NavbarBottomSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper12"
      >
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_17.jpg?v=1663324415"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_18.jpg?v=1663324415"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_18.jpg?v=1663324418"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_19.jpg?v=1663324415"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CATE_DESK_17.jpg?v=1663324415"
            alt="image"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
export default NavbarBottomSlider;
