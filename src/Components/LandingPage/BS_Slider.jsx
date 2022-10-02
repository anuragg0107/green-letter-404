import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import {  Stack,
  Badge,
  Box, Button, Center, 
  Flex, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";

import slides from "../LandingPage/NA_Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { get_BestSeller, get_NewArrival } from "../API/api";
import { AppContext } from "../Context/AppContext";
import Bag_Drawer from "../Navbar/Bag_Drawer";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronRightIcon w={"40px"} h={"40px"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronLeftIcon w={"40px"} h={"40px"} />
    </div>
  );
}

export function BS_Slider_Function({data}) {
 
}

export default class BS_Slider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "slides.slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div style={{ margin: "auto", 
      justifyContent: "center", 
      width: "90%" }}>
        <Slider
          style={{ paddingLeft: "20px" }}
          ref={(slider) => (this.slider = slider)}
          {...settings}
        >
         
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through"
                fontFamily={"Gilroy Regular"} fontSize="13px"
                 marginLeft="32px">
                  Rs:495.00
                </Text>
                <Text
                fontFamily={"Gilroy Regular"} fontSize="13px"
                > Rs:470.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px" fontFamily={"Gilroy Regular"} fontSize="13px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through"
                fontFamily={"Gilroy Regular"} fontSize="13px"
                 marginLeft="32px">
                  Rs:550.00
                </Text>
                <Text
                fontFamily={"Gilroy Regular"} fontSize="13px"
                > Rs:522.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px" fontFamily={"Gilroy Regular"} fontSize="13px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text textAlign="center" fontSize="14px" marginTop="-2"
              fontFamily={"Gilroy Regular"} fontSize="13px">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" 
                fontFamily={"Gilroy Regular"} fontSize="13px"
                marginLeft="32px">
                  Rs:945.00
                </Text>
                <Text
                fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center" fontFamily={"Gilroy Regular"} fontSize="13px"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                72 HR Hydrating Probiotic Gel Moisturizer With Hyalu....
              </Text>
              <Text mt="10px" fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:395.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center" fontFamily={"Gilroy Regular"} fontSize="13px"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                Salicylic &amp; French Green Clay Face Mask With Matcha Tea
                &amp;....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px" fontFamily={"Gilroy Regular"} fontSize="13px">
                  Rs:550.00
                </Text>
                <Text fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:522.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center" fontFamily={"Gilroy Regular"} fontSize="13px"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text fontFamily={"Gilroy Regular"} fontSize="13px" fontSize="14px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus....
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" fontFamily={"Gilroy Regular"} fontSize="13px" marginLeft="32px">
                  Rs:945.00
                </Text>
                <Text fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px" fontFamily={"Gilroy Regular"} fontSize="13px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          

          
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                Watermelon Super Glow Vitamin C Face Wash Gel| For Oil
                Control....
              </Text>

              <Text mt="10px" fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:312.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center" fontFamily={"Gilroy Regular"} fontSize="13px"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          

          
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
              <Text textAlign="center" fontSize="14px" fontFamily={"Gilroy Regular"} fontSize="13px" marginTop="-2">
                Retinol &amp; Ceramide Age Defense Night Cream With Hibiscus
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px" fontFamily={"Gilroy Regular"} fontSize="13px">
                  Rs:945.00
                </Text>
                <Text fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:695.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center" fontFamily={"Gilroy Regular"} fontSize="13px"
              >
                Add to Cart{" "}
              </Button>
            </Box>
          
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
              <Text fontSize="14px" marginTop="-2" fontFamily={"Gilroy Regular"} fontSize="13px">
                Watermelon Super Glow Vitamin C Face Wash Gel| For Oil
                Control....
              </Text>

              <Text mt="10px" fontFamily={"Gilroy Regular"} fontSize="13px"> Rs:312.00 </Text>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px" fontFamily={"Gilroy Regular"} fontSize="13px"
                textAlign="center"
              >
                Add to Cart{" "}
              </Button>
            </Box>

        </Slider>
   

      </div>
    );
  }
}
