import React, { useRef, useState } from "react";
// Import Swiper React components
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Image, Box, Button, Badge, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";

// import required modules
import { Pagination } from "swiper";

const NewArrival = () => {
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
                  SAVE 10%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitc.jpg?v=1663393830"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 4.5/5 (31)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:695.00
                </Text>
                <Text> Rs:625.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cica_nia_1.jpg?v=1663393895"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (7)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:599.00
                </Text>
                <Text> Rs:569.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cica_cac_1.jpg?v=1663393901"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5/5 (7)
                </Badge>
              </Box>
              <Text textAlign="center" fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:399.00
                </Text>
                <Text> Rs:379.00 </Text>
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
                  SAVE 10%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicamoistnew_1.jpg?v=1663393066"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (4)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                72 HR Hydrating Probiotic Gel Moisturizer With Hyalu....
              </Text>
              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:395.00
                </Text>
                <Text> Rs:355.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/waterserum.jpg?v=1663393921"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (5)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:599.00
                </Text>
                <Text color="red"> Rs:569.00 </Text>
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
                  SAVE 25%
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3.png?v=1663392484"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (0)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:996.00
                </Text>
                <Text> Rs:749.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/facewash_3.jpg?v=1663392059"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (6)
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                Watermelon Super Glow Vitamin C Face Wash Gel| For Oil
                Control....
              </Text>

              <Text mt="10px"> Rs:295.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/barrcream.jpg?v=1663393058"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (6)
                </Badge>
              </Box>
              <Text textAlign="center" fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:395.00
                </Text>
                <Text> Rs:375.00 </Text>
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
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofVITAMINFOAMINGFACEWASHcopy.jpg?v=1663392097"
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i> 5.0/5 (0)
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
export default NewArrival;
