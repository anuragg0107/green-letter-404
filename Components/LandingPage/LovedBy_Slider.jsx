// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


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
          style={{ ...style, 
          display: "block", 
          color: "black" }}
          onClick={onClick}
        >
          <ChevronLeftIcon w={"40px"} h={"40px"} />
        </div>
      );
}

export default class LovedBy_Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrow: false,
      className: "slides.slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{margin: "auto", justifyContent: "center", width: "90%"}}>
        <Box>
        <Slider style={{paddingLeft: "20px"}} ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <a href="#">
              <Image 
              borderRadius={"20px"} 
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2_3_Sale_Banner_Desktop.jpg?v=1664621917" />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
               borderRadius={"20px"}
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/watermelon_Desktop_copy_1.jpg?v=1664621923" />
            </a>
          </div>
        </Slider>
        </Box>
      </div>
    );
  }
}
