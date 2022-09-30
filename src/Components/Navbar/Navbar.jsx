import NavbarSlider from "./NavbarSlider";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Flex,
  Input,
  Image,
  SimpleGrid,
  Modal,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  UnorderedList,
  ListItem,
  Spacer
} from "@chakra-ui/react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import ImageBox from "./ImageBox";
import "../../style.css";

const Navbar = () => {
  const handleCart = () => {
    window.location.href = "/cart";
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavbarSlider />
      <Container>
        <Box paddingLeft={["0px", "40px"]} paddingRight={["0px", "40px"]}>
          <Box bg="white" w="100%" p={4}>
            <Flex justify="space-between" align="center">
              <Box className="popUp">
                <Button marginLeft="-800px">
                  {isOpen ? (
                    <CloseIcon onClick={onClose} />
                  ) : (
                    <HamburgerIcon onClick={onOpen} w="28px" h="28px" />
                  )}
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  size="7xl"
                  isCentered="true"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <SimpleGrid columns={[1, 1, 2, 2]}>
                      <Box width="100%">
                        <UnorderedList>
                          <ListItem
                            color="#3C3C3C"
                            fontSize="19px"
                            padding="10px 0px"
                            fontWeight="light"
                            fontSize="15px"
                            fontFamily="Gilroy Regular"
                            as="none"
                          >
                            WHAT'S NEW ?
                          </ListItem>
                          <Spacer />
                          <ListItem
                            color="#3C3C3C"
                            padding="5px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            Best SELLERS
                          </ListItem>
                          <br />

                          <Flex>
                            <ListItem
                              color="#3C3C3C"
                              padding="10px 0px"
                              fontSize="15px"
                              as="none"
                            >
                              SHOP BY INGREDIENTS
                            </ListItem>
                            <Spacer />
                            <AddIcon w="12px" h="12px" />
                          </Flex>
                          <Flex>
                            <ListItem
                              color="#3C3C3C"
                              padding="10px 0px"
                              fontSize="15px"
                              as="none"
                            >
                              SHOP BY CONCERN
                            </ListItem>
                            <Spacer />
                            <AddIcon w={"12px"} h={"12px"} />
                          </Flex>
                          <Flex>
                            <ListItem
                              color="#3C3C3C"
                              padding="10px 0px"
                              fontSize="15px"
                              as="none"
                            >
                              <Link onClick={() => onClose(true)} to="/shopall">
                                SHOP ALL PRODUCTS
                              </Link>
                            </ListItem>
                            <Spacer />
                            <AddIcon w="12px" h="12px" />
                          </Flex>
                          <ListItem
                            color="#3C3C3C"
                            padding="10px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            HAIR CARE
                          </ListItem>
                          <br />
                          <ListItem
                            color="#3C3C3C"
                            padding="10px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            BODY CARE
                          </ListItem>
                          <br />
                          <ListItem
                            color="#3C3C3C"
                            padding="10px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            IKWI NUTRITION
                          </ListItem>
                          <br />
                          <ListItem
                            color="#3C3C3C"
                            padding="10px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            DOWNLOAD THE APP
                          </ListItem>
                          <br />
                          <Flex>
                            <ListItem
                              color="#3C3C3C"
                              padding="10px 0px"
                              fontSize="15px"
                              as="none"
                            >
                              KNOW US BETTER
                            </ListItem>

                            <Spacer />
                            <AddIcon w={"12px"} h={"12px"} />
                          </Flex>
                          <Flex>
                            <ListItem
                              color="#3C3C3C"
                              padding="10px 0px"
                              fontSize="15px"
                              as="none"
                            >
                              PROFILE
                            </ListItem>
                            <Spacer />
                            <AddIcon w={"12px"} h={"12px"} />
                          </Flex>
                          <ListItem
                            color="#3C3C3C"
                            padding="10px 0px"
                            fontSize="15px"
                            as="none"
                          >
                            LOG IN
                          </ListItem>
                          <br />
                        </UnorderedList>
                      </Box>
                      <Box width="95%" marginTop="10px" marginLeft="20px">
                        <Image
                          borderRadius="10px"
                          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vit_c_3_2.png?v=1663651282"
                        />
                      </Box>
                    </SimpleGrid>
                  </ModalContent>
                </Modal>
              </Box>
              <Box>
                <Link to="/">
                  <Image
                    marginLeft="120px"
                    h="41px"
                    w="127px"
                    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x@2x.jpg?v=1646547348"
                  />
                </Link>
              </Box>
              <Box>
                <Flex align="center" gap="4">
                  <Input
                    palceholder="Search "
                    color="black"
                    type="search"
                    marginLeft="350px"
                    paddingLeft="200px"
                  />

                  {/* <Link  to="/"> */}
                  <Image
                    w="22px"
                    h="22px"
                    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633"
                  />
                  {/* </Link> */}

                  {/* <Link to="/"> */}
                  <Image
                    onClick="handleCart"
                    w="22px"
                    h="22px"
                    src="https://i.ibb.co/SVzyrgj/shopping-Bag.png"
                  />
                  {/* </Link> */}

                  <Link to="/login">
                    <i class="fa-solid fa-user"></i>
                  </Link>
                  <Link to="/login">
                    <Image
                      display={{ base: "none", sm: "block" }}
                      w={"22px"}
                      h={"22px"}
                      src="https://i.ibb.co/Rh5GBRq/user.png"
                    />
                  </Link>
                </Flex>
                {/* </SimpleGrid> */}
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* <Bag_Drawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}/>  */}
        {/* <Menu isOpen={isOpen} onClose={onClose} /> */}
      </Container>
      <ImageBox />
    </>
  );
};
export default Navbar;
