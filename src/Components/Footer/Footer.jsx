import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
const Footer = () => {
  return (
    <>
      <Box marginTop="32px" borderTop="0.5px solid black">
        <Flex justifyContent="space-around">
          <Box marginTop="50px">
            <Text
              fontWeight="600"
              fontFamily="Gilroy Regualr"
              fontSize="19px"
              color="#3C3C3C"
            >
              GET TO KNOW US
            </Text>
            <UnorderedList
              marginTop="25px"
              spacing={4}
              styleType="none"
              fontFamily="Gilroy Regular"
              fontSize="17px"
              color="#3C3C3C"
            >
              <ListItem>ABOUT US</ListItem>
              <ListItem>CONTACT US</ListItem>
              <ListItem>EARTHCARE</ListItem>
              <ListItem>AFFILIATE PROGRAM</ListItem>
              <ListItem> TERMS & CONDITION</ListItem>
              <ListItem>REFUND & CANCELLATION</ListItem>
              <ListItem>PRIVACY POLICY</ListItem>
              <ListItem>ORDER & SHIPPING</ListItem>
              <ListItem>PAYMENT TERMS</ListItem>
              <ListItem>TERMS OF SERVICE</ListItem>
              <ListItem>REFUND POLICY</ListItem>
            </UnorderedList>
          </Box>
          <Box marginTop="50px">
            <Text
              fontWeight="600"
              fontFamily="Gilroy Regualr"
              fontSize="19px"
              color="#3C3C3C"
            >
              ALSO AVAILABLE ON
            </Text>
            <UnorderedList
              marginTop="25px"
              spacing={4}
              fontFamily="Gilroy Regular"
              fontSize="17px"
              color="#3C3C3C"
              styleType="none"
            >
              <ListItem>NYKAA</ListItem>
              <ListItem>AMAZON</ListItem>
              <ListItem>FLIPKART</ListItem>
              <ListItem>MYNTRA</ListItem>
            </UnorderedList>
          </Box>
          <Box marginTop="50px">
            <Text
              fontWeight="600"
              fontFamily="Gilroy Regualr"
              fontSize="19px"
              color="#3C3C3C"
            >
              STAY UPDATED
            </Text>
            <UnorderedList
              marginTop="25px"
              spacing={4}
              fontFamily="Gilroy Regular"
              fontSize="17px"
              color="#3C3C3C"
              styleType="none"
            >
              <Flex alignItems="center">
                <Input
                  border="none"
                  paddingLeft="20px"
                  borderBottom="2px solid black"
                  type="email"
                  placeholder="example@example.com"
                />
                <Button bg="#3C3C3C" color="white">
                  SUBMIT
                </Button>
              </Flex>
              <Button marginRight="110px" color="white" bg="#9d88ce">
                DOWNLOAD THE APP
              </Button>
              <Flex gap={2} marginRight="100px" alignItems="center">
                <Text
                  fontSize="18px"
                  fontFamily="Gilroy Regular"
                  color="#3C3C3C"
                >
                  FOLLOW US
                </Text>
                <a href="https://business.facebook.com/dotandkey">
                  <Image
                    src="https://i.ibb.co/dtGHrQJ/facebook-app-symbol.png"
                    cursor="pointer"
                  />
                </a>
                <a href="https://www.instagram.com/dotandkey.skincare/">
                  <Image
                    src="https://i.ibb.co/8N3xng9/instagram.png"
                    cursor="pointer"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCD7U0EUBYg9YlL-zVZjkjfA">
                  <Image
                    src="https://i.ibb.co/8d37qMs/youtube.png"
                    cursor="pointer"
                  />
                </a>
              </Flex>
              <Text
                fontSize="16px"
                fontFamily="Gilroy Regular"
                marginRight="190px"
              >
                © 2022 Dot & Key
              </Text>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Footer;
