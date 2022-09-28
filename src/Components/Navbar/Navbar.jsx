import NavbarSlider from "./NavbarSlider";
import React from "react";
import {
Container,Box,Center,Flex,Image,SimpleGrid,Show,Modal,useDisclosure,Button,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import NavbarBottomSlider from "./NavbarBottomSlider";
import ImageBox from "./ImageBox";

const Navbar=()=>{
  return (
    <>
     <NavbarSlider/>
    <Container>
  
    <Box paddingLeft={["0px", "40px"]} paddingRight={["0px", "40px"]}>
        <Box bg="white" w="100%" p={4}>
          <Flex justify={"space-between"} align="center">
            <Box>
              {/* {isOpen ? <CloseIcon onClick={onClose}/> : <HamburgerIcon onClick={onOpen} w={"28px"} h={"28px"} />} */}
            </Box>
            
            <Box>
              <Link to="/">
              <Image
                marginLeft={["0px", "0px", "120px", "120px"]}
                h={"62px"}
                w="160px"
                src="https://m.media-amazon.com/images/S/aplus-media/sc/cd17fc5d-12b9-49e6-871f-f1f8281b17b1.__CR0,0,600,180_PT0_SX600_V1___.png"
              />
              </Link>
            </Box>
            <Box>
              {/* <SimpleGrid columns={4} spacing={["2","2", "6", "6"]} align="center"> */}
              <Flex align={"center"} gap="4">
                {/* <SearchIcon w={"22px"} h={"22px"} /> */}
                <Image w={"22px"} h={"22px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" />
                

                <Image  w={"22px"} h={"22px"} src="https://i.ibb.co/SVzyrgj/shopping-Bag.png" />

                <Link to="/login">
                <Image
                  w={["0px", "22px", "22px", "22px"]}
                  h={["0px", "22px", "22px", "22px"]}
                  src="https://i.ibb.co/Rh5GBRq/user.png"
                />
                </Link>
                <Link to="/login">
                <Image display={{ base: "none", sm: "block" }} w={"22px"} h={"22px"} src="https://i.ibb.co/Rh5GBRq/user.png" />
             </Link>
              </Flex>
              {/* </SimpleGrid> */}
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* <Bag_Drawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}/> */}
      {/* <Menu_Modal isOpen={isOpen} onClose={onClose} /> */}
    </Container>
    <ImageBox />
    <NavbarBottomSlider />
    </>
  )
}
export default Navbar;