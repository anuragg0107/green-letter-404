import React, { useState } from "react";
import {
  FormControl,
  Avatar,
  Box,
  Stack,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
  WrapItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";

const Checkout = () => {
  const [userData, setUserData] = useState([]);
  const handleDiscount = (e) => {
    e.preventDefault();
  };
  const handleDiscountCode = () => {};

  return (
    <>
      <Image
        height="160px"
        width="100%"
        src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-28/checkout%20top%20image_794110.jpeg"
      />
      <Box padding="15px 50px">
        <Flex>
          <Box w="60%" h="500px" marginTop="20px">
            <Text
              fontSize="20px"
              fontWeight="light"
              fontFamily="Lato, sans-serif"
              marginLeft="-580px"
            >
              Contact information
            </Text>
            <Stack direction="row">
              <Text
                fontSize="20px"
                fontWeight="light"
                fontFamily="Lato, sans-serif"
                fontSize="16px"
              >
                Already have an account?
              </Text>
              <Link to="/login">
                <Text
                  fontFamily="Lato, sans-serif"
                  fontSize="16px"
                  color="red"
                  textDecoration="underline"
                >
                  {" "}
                  Log in{" "}
                </Text>{" "}
              </Link>
            </Stack>
            <Flex marginTop="10px" gap="4">
              <Box>
                <Input
                  marginBottom="10px"
                  type="email"
                  placeholder="Email"
                  width="748px"
                />
              </Box>
            </Flex>
            <Checkbox marginTop="10px" marginLeft="-350px" defaultChecked>
              Keep me up to date on news and exclusive offers
            </Checkbox>
            <Text
              marginTop="35px"
              marginBottom="10px"
              fontFamily="Lato,sans-serif"
              fontSize="20px"
              fontWeight="light"
              marginLeft="-580px"
            >
              Shipping address
            </Text>
            <Flex gap={"2"}>
              <Input marginBottom={"10px"} placeholder="First name" />
              <Input marginBottom={"10px"} placeholder="Last name" />
            </Flex>
            <Input marginBottom={"10px"} placeholder="Address" />
            <Input marginBottom={"10px"} placeholder="Apartment" />
            <Flex>
              <Box>
                <Input marginBottom={"10px"} placeholder="City" />
              </Box>
              <Box>
                <Input marginBottom={"10px"} placeholder="State" />
              </Box>
              <Box>
                <Input marginBottom={"10px"} placeholder="Pin code" />
              </Box>
            </Flex>
            <InputGroup marginBottom={"10px"}>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="Phone" />
            </InputGroup>
            <Checkbox marginBottom={"10px"} marginLeft="-482px">
              Get Order Updates On WhatsApp
            </Checkbox>{" "}
            <br />
            <Checkbox marginBottom={"10px"} marginLeft="-482px">
              Save this information for next time
            </Checkbox>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text color={"red"}>{"<"} Return to cart</Text>
              <Link to="/">
                {/* onClick={() => orderProduct(total)} */}
                <Button color={"white"} bg={"#616160"}>
                  Order
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box padding={"15px 20px"} bg={"#fafafa"} h="500px" w={"40%"}>
            <Flex gap={1}>
              <Text fontSize="16px" color="gray" fontFamily="Lato, sans-serif">
                Pay now and get{" "}
              </Text>{" "}
              <Text color="red" fontSize="16px" fontFamily="Lato, sans-serif">
                3% instant discount.
              </Text>
            </Flex>
            <Box border={"1px solid black"} height={"56%"} overflowY={"scroll"}>
              {userData?.map((el) => (
                <Box padding={"5px 10px"}>
                  <Flex gap={2}>
                    <Box h={"100px"} w={"250px"}>
                      <Image h={"100px"} w={"100%"} src={el.image} />
                    </Box>
                    <Box>
                      <Text noOfLines={2}>{el.name}</Text>
                      <Text>Rs.{el.price}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
            <Flex marginTop={"15px"} gap="4">
              <FormControl onClick={handleDiscount}>
                <Input
                  bg="white"
                  onChange={handleDiscountCode}
                  placeholder="Gift card or Discount code"
                />
                <Button
                  color={"white"}
                  colorScheme="#c8c8c8"
                  type="submit"
                  bg="#c8c8c8"
                >
                  APPLY
                </Button>
              </FormControl>
            </Flex>
            <Flex
              marginTop={"15px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Subtotal</Text>
              <Text>₹total</Text>
            </Flex>
            {/* <Flex
              marginTop={"7px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Shipping</Text>
              <Text>Calculated at next step</Text>
            </Flex> */}

            <Flex
              marginTop={"7px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Total</Text>
              <Text> ₹total</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Checkout;
