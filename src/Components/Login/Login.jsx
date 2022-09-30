import {Box,Stack, Button,Center,Container,Flex,Heading,Image,Input,Text}
 from "@chakra-ui/react";
import {useState,useContext} from "react";
import {Link,Navigate} from "react-router-dom"
const Login=()=>{
  const[email,setEmail] =useState("")
  const [password,setPassword]=useState("")
//  const context = useContext();


  // const {handleLogin, auth} = context;
  // if(auth){
  //   return <Navigate to={"/sigup"}/>
  // }

 
  return(
    <>
      <Center>
        <Box>
          <Heading marginTop="50px"
           textAlign="center" fontSize="28px">
            Login
          </Heading>
          <br />
          <Button
            marginTop="50px"
            w="380px"
            h="45px"
            color="white"
            colorScheme="#4267b2"
            bg="#4267b2"
          >
            <Image marginRight="20px"
            height="20px" src="https://i.ibb.co/TPDNNzL/facebook.png" />
            Facebook Login
          </Button>
          <br />
          <Button
            marginTop="5px"
            w="380px"
            h="45px"
            colorScheme="#dd4b39"
            color="white"
            bg="#dd4b39"
          >
            <Image marginRight="20px"
            height="20px"
             src="https://i.ibb.co/6yv54Hv/google.png" />
            Google Login
          </Button>

          <Box marginTop="35px">
            <Text marginRight="310">EMAIL</Text>
            <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            marginTop="10px" w="380px" h="45px" />

           <Stack direction={['column', 'row']} spacing='-70px'>
            <Text marginRight="272">PASSWORD</Text>
            <Text  marginRight="272">Forget? </Text>
          </Stack>

            <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" marginTop="10px" w="380px" h="45px" />
            <br />
            <Button
              colorScheme="#3C3C3C"
              marginTop="15px"
              w="380px"
              h="45px"
              color="white"
              bg="#3C3C3C"
              onClick={() => handleLogin(email, password)}
            >
              Sign In
            </Button>
          </Box>
          <Link to={"/signup"}>
            <Text marginBottom="50px"
             fontSize="18px" marginTop="50px">
              Don't have an account? Sign up here.
            </Text>
          </Link>
        </Box>
      </Center>

    </>
  )
}
export default Login