import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Bag_Drawer from "../Navbar/Bag_Drawer";

const ShopAll = () => {
  const [data, setData] = useState([]);



const getData=async()=>{
    const res= await fetch('https://dotandkey-api.vercel.app/posts');
    setData(await res.json())
};

useEffect(()=>{
    getData()
},[])


  const {addToCart} = useContext(AppContext);
  const drawerBag = useDisclosure();

  return (
    <div>
      <Box>
        <Image
          borderRadius={"15px"}
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/green_desk_50d0a315-fd1c-45c7-92bf-a7c45753d5b9.webp?v=1660315290"
        />
      </Box>
      <Center paddingTop={"50px"}>
        <Heading fontSize={"45px"} color="#3C3C3C">
          SHOP ALL
        </Heading>
      </Center>
      <Box padding={"50px"}>
        <SimpleGrid gap={20} columns={[1, 2, 4, 4]}>
          {data.map((el) => (
            <Box key={el.id}>
              <Image 
              src={el.image} />
              <Text noOfLines={3}>{el.name}</Text>
              <Center>
                <Flex gap={2}>
                  <Text>
                    <del>Rs.{el.mrp}</del>
                  </Text>
                  <Text color={"red"}>Rs.{el.ourprice}</Text>
                </Flex>
              </Center>
              <Button
                onClick={() => {
                  addToCart(el.name, el.ourprice, 1, el.image);
                  // drawerBag.onOpen();
                }}
                colorScheme={"#3C3C3C"}
                borderRadius={"0px"}
                w={"100%"}
                bg={"#3C3C3C"}
                color="white"
              >
                ADD TO CART
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Bag_Drawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}/>

    </div>
  );
};

export default ShopAll;







  
  
