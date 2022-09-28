import {Stack,Image,Box,Badge } from "@chakra-ui/react";
const ImageBox=()=>{
  return(
    <>
    <Stack direction='row' mb="20px">
  <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image
     boxSize='100px'
    objectFit='cover'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NuMsfiqjIKIvg_2T3Oh0rdofu8I1KpS3zw&usqp=CAU'
    alt="body care"
   />
   <Box p={2}>
   <Badge borderRadius='full' px='2' colorScheme='teal'>
            BODYCARE
          </Badge>
   </Box>
  </Box>

  <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image
      boxSize='100px'
     objectFit='cover'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmuHk-g8gGposPpy2fLjsjWR2uLCi0GjZJXME71YE0iP_Z9PyHF96etCs5kwUr8iuncs&usqp=CAU'
    alt='Hair care'
   />
   <Box p={2}>
   <Badge borderRadius='full' px='2' colorScheme='teal'>
            HAIRCARE
          </Badge>
   </Box>
  </Box>

  <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
         <Image 
     boxSize='100px'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPP8fk7o4yvjgQXUAzj8dzKZGwi5A7u2-6w&usqp=CAU'
    alt="Nurtition"
    objectFit='cover'
    />
   <Box p={2}>
   <Badge borderRadius='full' px='2' colorScheme='teal'>
            NURTITION
          </Badge>
   </Box>
  </Box>

  <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
       <Image 
    boxSize='100px'
    objectFit='cover'
    src='https://m.media-amazon.com/images/I/51ZkPRygDwL._SL1500_.jpg'
     alt='Serum' />
   <Box p={2}>
   <Badge borderRadius='full' px='2' colorScheme='teal'>
            SERUM
          </Badge>
   </Box>
  </Box>

  <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image
     boxSize='100px'
    objectFit='cover'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hS3soF61lUjlR_r5uGCTq5JX-yCX_Fyv_A&usqp=CAU'
    alt="MOISTURIZER"
   />
   <Box p={2}>
   <Badge borderRadius='full' colorScheme='teal'>
            MOISTURIZER
          </Badge>
   </Box>
  </Box>
  </Stack>
    </>
  )
}
export default ImageBox

  