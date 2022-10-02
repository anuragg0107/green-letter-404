import React, { Component } from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import LovedBY_Slider from "./LovedBy_Slider";
import AutoPlayMethods from "./LovedBy_Slider";
import LovedBy_Slider from "./LovedBy_Slider";

const LovedBy = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontFamily="Gilroy Regular"
           color={"#3C3C3C"}
          fontSize={["18px","18px","18px","26px"]}
          >Loved By</Text>
        </Center>
        <Center>
          <Text fontStyle="italic"
           color="#3C3C3C"
          fontFamily="Gilroy Regular"
           fontWeight="600" 
           fontSize={["31px", "31px", "31px", "37px"]}>
           10 Lakh+ customers</Text>
        </Center>
      </Container>
      <LovedBy_Slider/>
      
    </>
  );
};

export default LovedBy;
