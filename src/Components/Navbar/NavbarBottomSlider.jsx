import { Image } from "@chakra-ui/react";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NavbarBottomSlider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
