import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import {AppContext} from "../Context/AppContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //  const {handleCreateAccount, auth}=useContext(AppContext);
  //  if(auth){
  //    return <Navigate to={"/account"} />
  //  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleFName=(e)=>{
    setFirstName(e.target.value)
  }
  const handleLName=(e)=>{
    setLastName(e.target.value)
  }
  const handleSubmit = () => {
    console.log({email,password})
    axios.post(`https://reqres.in/api/login`,{
      email:email,
      password:password
    })
  };
  return (
    <>
      <Center>
        <Box>
          <Heading color="gray" textAlign={"center"} fontSize={"28px"}>
            Create Account
          </Heading>
          <br />

          <Button
            marginTop="50px"
            width="380px"
            height="46px"
            color="white"
            colorScheme="black"
            backgroundColor="#4267b2"
          >
            <Image
              height="20px"
              marginRight="20px"
              src="https://i.ibb.co/TPDNNzL/facebook.png"
            />
            Facebook Signup
          </Button>

          <br />
          {/* <PopoverTrigger> */}
          <Button
            marginTop="5px"
            width="380px"
            height="46px"
            color="white"
            backgroundColor="#dd4b39"
            colorScheme="#dd4b39"
          >
            <Image
              height="20px"
              marginRight="20px"
              src="https://i.ibb.co/6yv54Hv/google.png"
            />
            Google Signup
          </Button>
          {/* </PopoverTrigger> */}
          {/* </Popover> */}
          {/* Signup from */}
          <Box margionTop="35px">
            <Text>First Name </Text>
            <Input
              value={firstName}
              onChange={handleFName}
              marginTop="10px"
              width="380px"
              height="46px"
            />
            <Text marginTop="15px">LAST NAME</Text>
            <Input
              value={lastName}
              onChange={handleLName}
              marginTop="10px"
              width="380px"
              height="45px"
            />
            <Text marginTop="15px">EMAIL</Text>
            <Input
              value={email}
              onChange={handleEmail}
              marginTop="10px"
              width="380px"
              height="45px"
            />
            <Text marginTop="15px">PASSWORD</Text>
            <Input
              value={password}
              onChange={handlePassword}
              type="password"
              marginTop="10px"
              width="380px"
              height="45px"
            />
            <br />
            <Button
              marginBottom="50px"
              colorScheme="#3C3C3C"
              marginTop="15px"
              width="380px"
              height="45px"
              color="white"
              bg="#3C3C3C"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};
export default Signup;
