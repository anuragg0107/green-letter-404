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
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Bag_Drawer from "../Navbar/Bag_Drawer";
import SingleProduct from "./SingleProduct";
// import productData from "../API/ProductData";
const ShopAll = () => {
  const [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     axios.get(`  http://localhost:3002/posts`).then((res) => {
//       setData(res.data);
//     });
//   }, []);
const getData=async()=>{
    const res= await fetch('http://localhost:3001/posts');
    setData(await res.json())
};

useEffect(()=>{
    getData()
},[])
  const navigate = useNavigate();
  const handleClick = (value) => {
    navigate("/singleproduct", { state: value });
  };

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
              <Image onClick={() => handleClick(el)} 
              src={el.  image} />
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






// import {
//     Center,
//     Text,
//     Grid,
//     GridItem,
//     Box,
//     Badge,
//     Stack,
//     Image,
//     Button,
//     SimpleGrid
//   } from "@chakra-ui/react";
//   import productData from "../API/ProductData";
//   import { useState, useEffect } from "react";
  
//   const ShopAll = () => {
//     const [data, setData] = useState(productData);
//     //  useEffect(()=>{
//     //    setData(productData)
//     //  },[])
//     //   console.log(setData)
//     console.log(data);
//     return (
//       <>
//         <Center>
//           <Text
//             fontWeight="light"
//             fontSize="46px"
//             color="#3C3C3C"
//             marginTop="20px"
//             fontFamily="Gilroy Regular"
//           >
//             SHOP ALL
//           </Text>
//         </Center>
//         <Box padding="50px">
//           <SimpleGrid gap={10} columns={[1, 2, 4, 4]}>
//             {/* <Grid templateColumns="repeat(5, 1fr)" gap={6}>
//           <GridItem w="100%" h="10" bg="blue.500"> */}
//             {data.map((el) => (
//               <Box
//                 maxW="250px"
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 overflow="hidden"
//                 key={el.id}
//                 height="fit-content"
//               >
//                 <Box>
//                   <Badge
//                     position="absolute"
//                     // left="40"
//                     // top="0"
//                     colorScheme="gray"
//                     width="80px"
//                     height="25px"
//                     paddingTop="5px"
//                   >
//                     {el.save}
//                   </Badge>
//                 </Box>
//                 <Image
//                   boxSize="250px"
//                   objectFit="cover"
//                   src={el.image}
//                   alt="body care"
//                 />
  
//                 <Box p={2}>
//                   <Badge colorScheme="white" fontWeight="light">
//                     <i class="fa-regular fa-star"></i>({el.rating})
//                   </Badge>
//                 </Box>
//                 <Text fontSize="14px" marginTop="-2">
//                   {el.name}
//                 </Text>
  
//                 <Stack direction="row" mt="10px">
//                   <Text textDecoration="line-through" marginLeft="32px">
//                     Rs:{el.mrp}.00
//                   </Text>
//                   <Text> Rs:{el.ourprice}.00 </Text>
//                 </Stack>
//                 <Button
//                   color="white"
//                   backgroundColor="gray"
//                   width="247px"
//                   textAlign="center"
//                 >
//                   Add to Cart
//                 </Button>
//               </Box>
//             ))}
//             {/* </GridItem>
//         </Grid> */}
//           </SimpleGrid>
//         </Box>
//       </>
//     );
//   };
//   export default ShopAll;
  
  // import React, { useContext } from "react";
  // import { Navigate } from "react-router-dom";
  // import { AppContext } from "../Context/AppContext";
  
  // const PrivateRoutes = ({children}) => {
  //   const { auth } = useContext(AppContext);
  //   if (!auth) {
  //     return <Navigate to={"/login"} />;
  //   }
  //   return children;
  // };
  
  // export default PrivateRoutes;
  
  
