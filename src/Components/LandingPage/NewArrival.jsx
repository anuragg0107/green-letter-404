import { Center, Container, Text } from '@chakra-ui/react'
import React from 'react'
import NA_Slider from './NA_Slider'

const NewArrival = () => {
  return (
    <>
      <Container marginTop={"25px"}>
      <Center>
          <Text fontFamily={"Gilroy Regular"}
          color="#3C3C3C"
          fontSize={["18px","18px","18px","26px"]}>
          SHOP OUR</Text>
        </Center>
        <Center>
          <Text 
          fontWeight="700"
          fontFamily={"Gilroy semibold"}
          fontStyle="italic" color={"#3C3C3C"}
          fontSize={["31px", "31px", "31px", "37px"]}>
          NEW ARRIVALS</Text>
        </Center>
      </Container>
      <NA_Slider/>
    </>
  )
}

export default NewArrival