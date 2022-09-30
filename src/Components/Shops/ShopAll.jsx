import {
  Center,
  Text,
  Grid,
  GridItem,
  Box,
  Badge,
  Stack,
  Image,
  Button,
  SimpleGrid
} from "@chakra-ui/react";
import productData from "../API/ProductData";
import { useState, useEffect } from "react";

const ShopAll = () => {
  const [data, setData] = useState(productData);
  //  useEffect(()=>{
  //    setData(productData)
  //  },[])
  //   console.log(setData)
  console.log(data);
  return (
    <>
      <Center>
        <Text
          fontWeight="light"
          fontSize="46px"
          color="#3C3C3C"
          marginTop="20px"
          fontFamily="Gilroy Regular"
        >
          SHOP ALL
        </Text>
      </Center>
      <Box padding="50px">
        <SimpleGrid gap={10} columns={[1, 2, 4, 4]}>
          {/* <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500"> */}
          {data.map((el) => (
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={el.id}
              height="fit-content"
            >
              <Box>
                <Badge
                  position="absolute"
                  // left="40"
                  // top="0"
                  colorScheme="gray"
                  width="80px"
                  height="25px"
                  paddingTop="5px"
                >
                  {el.save}
                </Badge>
              </Box>
              <Image
                boxSize="250px"
                objectFit="cover"
                src={el.image}
                alt="body care"
              />

              <Box p={2}>
                <Badge colorScheme="white" fontWeight="light">
                  <i class="fa-regular fa-star"></i>({el.rating})
                </Badge>
              </Box>
              <Text fontSize="14px" marginTop="-2">
                {el.name}
              </Text>

              <Stack direction="row" mt="10px">
                <Text textDecoration="line-through" marginLeft="32px">
                  Rs:{el.mrp}.00
                </Text>
                <Text> Rs:{el.ourprice}.00 </Text>
              </Stack>
              <Button
                color="white"
                backgroundColor="gray"
                width="247px"
                textAlign="center"
              >
                Add to Cart
              </Button>
            </Box>
          ))}
          {/* </GridItem>
      </Grid> */}
        </SimpleGrid>
      </Box>
    </>
  );
};
export default ShopAll;
