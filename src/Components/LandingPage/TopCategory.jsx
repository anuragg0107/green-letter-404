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
import { get_BestSeller } from "../API/api";
// import { TP_Slider_Function } from "./TP_Slider";
import TP_Slider  from "./TP_Slider";
const TopCategory = () => {
  const [tabs, setTabs] = useState("bodycare");
  const [color, setColor] = useState();
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize={["18px", "18px", "18px", "26px"]}>SHOP OUR</Text>
        </Center>
        <Center>
          <Text
            fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            TOP CATEGORIES
          </Text>
        </Center>
      </Container>
      <Box marginTop={"15px"}>
        <Center>
          <HStack spacing="24px">
            <Box
              style={{ cursor: "pointer" }}              
            >
              FACE CREAMS
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
            
            >
              FACE SERUMS
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
            >
              FACE WASHES
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}              
            >
              FACE MASKS
            </Box>
          </HStack>
        </Center>
      </Box>
      <TP_Slider/>
    </>
  );
};

export default TopCategory;
