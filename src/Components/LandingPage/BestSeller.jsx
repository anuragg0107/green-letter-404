import React, { useRef, useState } from "react";
import "../../styles.css";
// Import Swiper React components
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Stack,
  Image,
  Box,
  Button,
  Badge,
  Text,
  Title
} from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const BestSeller = () => {
  return (
    <div>
      <div>
        <Swiper
          maxW="50%"
          slidesPerView={3}
          spaceBetween={20}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 5%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofcicanightgel.jpg?v=1663393073"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (181)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:495.00
                </Text>
                <Text> Rs:470.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 5%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofVITCMOIST.jpg?v=1663393087"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (512)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:550.00
                </Text>
                <Text> Rs:522.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 26%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyoflipplumping.jpg?v=1663392224"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (252)
                </Badge>
              </Box>
              <Text textAlign="center" fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:945.00
                </Text>
                <Text> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyof72hr.jpg?v=1663392956"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (282)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                72 HR Hydrating Probiotic Gel Moisturizer With Hyalu....
              </Text>
              <Text mt="10px"> Rs:395.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 5%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofgreenclay.jpg?v=1663392773"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (512)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:550.00
                </Text>
                <Text> Rs:522.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 26%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofretinol.jpg?v=1663393080"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (181)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:945.00
                </Text>
                <Text> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofwatermeloncleanser.jpg?v=1663392104"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (181)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Watermelon Super Glow Vitamin C Face Wash Gel| For Oil
                Control....
              </Text>

              <Text mt="10px"> Rs:312.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Badge
                  position="absolute"
                  left="40"
                  top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  SAVE 26%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyoflipplumping.jpg?v=1663392224"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (252)
                </Badge>
              </Box>
              <Text textAlign="center" fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:945.00
                </Text>
                <Text> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofwatermeloncleanser.jpg?v=1663392104"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.7/5 (181)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Watermelon Super Glow Vitamin C Face Wash Gel| For Oil
                Control....
              </Text>

              <Text mt="10px"> Rs:312.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default BestSeller;
