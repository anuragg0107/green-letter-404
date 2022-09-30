import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Container, Box, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Reviews = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px"
            bg="#F5F5F5" borderRadius="lg" overflow="hidden">
            <Box width="40%" margin="auto"
           >
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vish.png?v=1656676713"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              Vitamin C Face Cream:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              Perfect for my uneven skin &amp; dark spots{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              I had very dry &amp; flaky skin. My friend suggested that I try
              the Vitamin C+ E face cream . Since I’ve been using it for 4 weeks
              &amp; I can already notice the difference. My skin tone has evened
              and it feels nourished &amp; looks more radiant. It is oil-free
              &amp; quick absorbing. I’m a forever fan!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px" 
         bg="#F5F5F5" borderRadius="lg" overflow="hidden">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Daveena_Jha.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              The Lip Plumping Sleep Maskl:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              My Lips Love It!!!
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              The Lip Plumping Sleep Mask infused with Vitamin C is truly
              magical! I have been regularly using this for 2 months now &amp; I
              am noticing the difference. My lips feel plumper &amp; pinker.
              What’s best, I can use it as a lip balm too! Loving my filter-free
              pouts on Insta!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm"  bg="#F5F5F5" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Kamakshi_Shetty.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              Retinol Night Cream:{" "}
            </Text>
            <Text fontFamily="Gilroy Regular" fontSize="13px" fontWeight="bold">
              <i>Works like MAGIC on my wrinkles &amp; fine lines</i>
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              My skin feels so firm &amp; nourished. I could see the fine lines
              fading within 2 weeks of using &amp; I’m totally in love with this
              Retinol Night Cream. So happy I found the one that best suits my
              sensitive skin. A complete must have in your PM skincare routine.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm"  bg="#F5F5F5" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Aman_Shah.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              72 HR Hydrating Probiotic Gel Moisturizer:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              Perfect for hydrating your skin!{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              Dry, dehydrated skin can be a nightmare. But I can happily say
              that’s not the case for me. The 72 Hr Hydrating Gel is my skin’s
              BFF! From the first 2-3 uses itself I realized that this face
              cream really hydrates skin deeply. My skin feels healthier, softer
              &amp; more supple. I think I’m in love with this one!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px"  bg="#F5F5F5" borderRadius="lg" overflow="hidden">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/IMG-0776.png?v=1656677366"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              Salicylic &amp; French Green Clay Face Mask:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              Instant Results, Zero Side Effects!
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              Using this product every Sunday, for a month now &amp; my skin has
              never felt better. I noticed that it has minimized the appearance
              of my acne, dark spots &amp; blemishes. It’s been a lifesaver for
              me &amp; after each use, my skin feels calm, clear &amp; rested. I
              totally recommend this one!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg"  bg="#F5F5F5" overflow="hidden">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Ishika_Srivastava.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              10% Niacinamide Face Serum:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              Holy Grail For My Dark Spots{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              I am obsessed with the 10% Niacinamide Serum! If there is anything
              that’s worse than acne, it has to be the acne scars. I got this
              serum for my acne scars &amp; dark spots.It also has the benefit
              of reducing redness caused due to acne. My skin now is
              blemish-free, clear &amp; less oily. I’m super happy with the
              results. Get yours today!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  bg="#F5F5F5">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Kanan_Ojha.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              Cica Night Gel:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              The best for healing my acne scars{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              Anyone with acne-prone skin will tell you how difficult it is to
              find a product that suits their skin’s needs. So when I got this,
              I was pleasantly surprised. It’s very soothing &amp; within a
              month I noticed visible acne reduction. My skin feels so calm
              &amp; clear. If this is how effective it is, I’m not going back to
              anything else!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  bg="#F5F5F5">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Dhuv_Jasnani.png?v=1657694543"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              20% Vitamin C Serum:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              Super Potent, Super Effective!!{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              What excited me most about this serum is that it has 20% Vitamin
              C. It’s India’s 1st Next Gen Serum which is super potent &amp;
              super fun to use. I started using it 2 weeks back &amp; I can
              already feel my skin is more firm &amp; radiant. Even the dark
              patches on my face have lightened. I cannot wait to share the
              final results!!
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  bg="#F5F5F5">
            <Box width="40%" margin="auto">
              <Image
                borderRadius="10px"
                width="90%"
                margin="auto"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Venkatesh_S.png?v=1657694544"
                alt="body care"
              />{" "}
            </Box>
            <Text
              paddingTop="10px"
              fontWeight="bold"
              fontFamily="Gilroy Regular"
              fontSize="13px"
            >
              Watermelon Super Glow Vitamin C Face Wash Gel:{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="bold"
              fontStyle="italic"
            >
              The Ultimate Cleanser For My Skin{" "}
            </Text>
            <Text
              fontFamily="Gilroy Regular"
              fontSize="13px"
              fontWeight="light"
              color="#000000"
            >
              This gel-based cleanser gently washes away dirt &amp; grime,
              leaving your skin feeling fresh. I’m using it for the past 2
              months, twice daily. The greasy, oily, skin I used to experience
              in summers, is all gone now. A total must buy if you ask me!
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Reviews;
