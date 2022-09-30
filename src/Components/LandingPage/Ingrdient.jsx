import {Button,Container,Center,Text,Image} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Ingrdient=()=>{
  return(
    <>
    <Container>
        <Center>
          <Text fontSize="18px">SHOP BY</Text>
        </Center>
        <Center>
          <Text fontWeight="500" fontSize="31px" fontStyle="italic">
          INGREDIENTS
          </Text>
        </Center>
      </Container>
   


      <Swiper
     
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_c982a1f9-7880-49cc-918d-de954c4869d7.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_93fa35cb-9567-4296-ad26-718ef6fb9ece.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3_bd0c6f74-087c-4096-8d4b-15f289b1d976_3-_1.jpg?v=1662534720"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4A-Ingredient_a52bf031-90a7-4b4f-afb1-1786ddf2f2e0.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce_1.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e_1.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_c982a1f9-7880-49cc-918d-de954c4869d7.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_93fa35cb-9567-4296-ad26-718ef6fb9ece.jpg?v=1662534604"
          alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3_bd0c6f74-087c-4096-8d4b-15f289b1d976_3-_1.jpg?v=1662534720"
          alt="image"/>
        </SwiperSlide>
      </Swiper>

      <Button borderWidth="1px"
      border="1px solid black"  overflow="hidden" 
      backgroundColor="white" marginTop="10px"
      width="170px" marginBottom="20px" >SHOP NOW > </Button>

      <Image 
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/D_K_Homepage_BOGO_Banner_Desktop_Version.gif?v=1659006084"
      alt="kw"
      />
    </>
  )
}
export default Ingrdient