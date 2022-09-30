import {
  Box,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
const SpotLight = () => {
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize="20px" fontWeight="light">
            IN THE
          </Text>
        </Center>
        <Center>
          <Text fontWeight="500" fontStyle="italic" fontSize="37px">
            SPOTLIGHT
          </Text>
        </Center>
      </Container>
      <Box padding={5}>
        <SimpleGrid marginBottom={2} gap={5} columns={2}>
          <Image
            borderRadius={10}
            width="95%"
            marginLeft="20px"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_24.jpg?v=1663587081"
          />
          <Image
            borderRadius={10}
            width="92%"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_22.jpg?v=1663324771"
          />
        </SimpleGrid>
        <Image
          borderRadius={10}
          width="95%"
          marginLeft="20px"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_21.jpg?v=1663324772"
        />
      </Box>
    </>
  );
};
export default SpotLight;
