import { Box, Center, Container, HStack, Text } from "@chakra-ui/react";
import BestSeller from "./BestSeller";
const BestSellerData = () => {
  return (
    <>
      <Container>
        <Center>
          <Text fontSize="18px" marginTop="20px">OUR</Text>
        </Center>
        <Center>
          <Text fontWeight="500" 
         marginBottom="20px" fontSize="31px" fontStyle="italic">
            BESTSELLERS
          </Text>
        </Center>
      </Container>
      <Container >
        <Center >
          <HStack spacing="24px" >
            <Box style={{ cursor: "pointer", color: "red" }}
            >SKIN</Box>
            <Box>|</Box>
            <Box style={{ cursor: "pointer" }}
            marginTop="20px">BODYCARE</Box>
            <Box>|</Box>
            <Box style={{ cursor: "pointer" }}
            marginTop="20px">HAIRCARE</Box>
            <Box>|</Box>
            <Box style={{ cursor: "pointer" }}
            marginTop="20px">NUTRITION</Box>
          </HStack>
        </Center>
      </Container>
      <BestSeller />
    </>
  );
};
export default BestSellerData;
