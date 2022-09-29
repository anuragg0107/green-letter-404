import {Radio,Image,Box, Text} from "@chakra-ui/react";
const Spin =()=>{
  return(
    <>
    <Box marginTop="40px" marginBottom="40px" >
      <Text fontSize="26px" > Loved by <br />
      <b fontSize="37px">10 Lakh+ Customers </b> </Text>
      </Box>
   <Image
   objectFit="cover"
   width="1200px"
   marginLeft="75px"
   borderRadius="10px"
   src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_Sale_Banner_Desktop_copy_5.jpg?v=1664257999"
   alt="spin" />
  <Radio value="1" background="gray"
  marginTop="5px"> </Radio>
    </>
  )
}
export default Spin