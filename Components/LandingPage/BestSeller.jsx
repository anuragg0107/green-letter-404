import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BS_Slider from "./BS_Slider";

const BestSeller = () => {

 
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontFamily={"Gilroy Regular"}
          fontSize={["18px", "18px", "18px", "26px"]}
          >OUR</Text>
        </Center>
        <Center>
          <Text
            fontWeight="italic" fontFamily={"Gilroy semibold"}
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            BEST SELLERS
          </Text>
        </Center>
      </Container>
      <Container marginTop={"15px"}>
        <Center>
          <HStack spacing="24px">
            <Box
              style={{ cursor: "pointer" }}
            >
              SKIN
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
            >
              BODYCARE
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
            >
              HAIRCARE
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
            >
              NUTRITION
            </Box>
          </HStack>
        </Center>
      </Container>
      <BS_Slider  />
    </>
  );
};

export default BestSeller;
