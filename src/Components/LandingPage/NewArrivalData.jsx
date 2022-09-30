import { Center, Container, Text } from "@chakra-ui/react";
import NewArrival from "./NewArrival";
const NewArrivalData = () => {
  return (
    <>
      <Container>
        <Center>
          <Text fontSize="18px">SHOP OUR</Text>
        </Center>
        <Center>
          <Text fontWeight="500" fontSize="31px" fontStyle="italic">
            NEW ARRIVALS
          </Text>
        </Center>
      </Container>

      <NewArrival />
    </>
  );
};
export default NewArrivalData;
