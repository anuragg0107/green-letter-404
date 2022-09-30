import React, { useRef, useState } from "react";
// Import Swiper React components
import {Center, Image,Text,Box,Container,HStack} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Award=()=>{
  return(
    <>
<Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide >
      
       {/* <br /> */}
       {/* <Text fontWeight="light" fontSize="20px" 
       className="award"
       >SKINCARE </Text>
       <br /> */}
       {/* <Text className="award"> 
         Don't just take our words for it.
         Here what's the beauty gurus have to 
         say about our products.
       </Text> */}
       
          {/* <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ezgif.com-gif-maker_ff4dc633-9c9a-40b1-810f-2614147ac68d_540x.gif?v=1615273304" 
       alt="award"   />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Little-things-that-matter-2_540x.jpg?v=1614740606" 
       alt="award"   /> */}
        </SwiperSlide>
      </Swiper>

      <Center>
     <Box>
      <Text fontWeight="semibold"
       fontFamily="ubuntu" 
      fontStyle="italic"
      fontSize="20px"
       marginBottom="20px">As Seen In </Text>
       </Box>
        </Center>

       <HStack>
        <Container>
          <Text color="#3C3C3C"
          fontFamily="Gilory Regular"
          fontSize="22px">
      "Latest and greated natural <br /> products for safe, non-toxic <br /> skincare."
            </Text>
            <Image width="190px" marginLeft="100px"
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/elle-magazine-vector-logo-3_9501c881-18bc-4482-a41a-bae5979fd0b9_180x.png?v=1614742030"
            />
          </Container>

          <Container>
          <Text  color="#3C3C3C"
          fontFamily="Gilory Regular"
          fontSize="22px">
      "Latest and greated natural <br /> products for safe, non-toxic <br /> skincare."
            </Text>
            <Image width="190px" marginLeft="100px"
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Vogue-3-min_180x.png?v=1614754318"
            />
          </Container>

          <Container>
          <Text color="#3C3C3C"
          fontFamily="Gilory Regular"
          fontSize="22px"
          >
      "Latest and greated natural <br/> products for safe, non-toxic <br /> skincare."
            </Text>
            <Image width="190px" marginLeft="100px"
             src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/elle-magazine-vector-logo-2_8a4b49eb-9d7c-4864-954a-fe48fb05a208_180x.png?v=1614742030"
            />
          </Container>
          </HStack>
    </>
  )
}
export default Award;