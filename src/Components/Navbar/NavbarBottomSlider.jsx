

import {Image} from "@chakra-ui/react";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NavbarBottomSlider=()=>{
  return(
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
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <Image 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hS3soF61lUjlR_r5uGCTq5JX-yCX_Fyv_A&usqp=CAU'
      alt='image'/>
      </SwiperSlide>
      <SwiperSlide>
      <Image 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hS3soF61lUjlR_r5uGCTq5JX-yCX_Fyv_A&usqp=CAU'
      alt='image'/>
      </SwiperSlide>
      <SwiperSlide>
      <Image 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hS3soF61lUjlR_r5uGCTq5JX-yCX_Fyv_A&usqp=CAU'
      alt='image'/>
      </SwiperSlide>
      <SwiperSlide>
      <Image 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hS3soF61lUjlR_r5uGCTq5JX-yCX_Fyv_A&usqp=CAU'
      alt='image'/>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}
export default NavbarBottomSlider;