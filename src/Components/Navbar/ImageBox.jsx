import { Container, Text, Stack, Image, Box, Badge } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
const ImageBox = () => {
  const [timerDay, setTimerDay] = useState("00");
  const [timerHour, setTimerHour] = useState("00");
  const [timerMinute, setTimerMinute] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDown = new Date("October 5, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDay(days);
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <Container bg="#C5E5CB" height="82px">
        <Image
          paddingTop="14px"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_726_1.png?v=1664453880"
          alt="b1g1"
        />
      </Container>
      <Stack direction="row" paddingLeft="500px" marginTop="10px">
        <Box
          border="2px solid #137F27"
          fontSize="25px"
          fontFamily="Gilroy Regular"
          color="#137F27"
          height="40px"
          width="40px"
          bg="white"
          paddingTop="2px"
        >
          {timerDay}
        </Box>

        <Text paddingTop="10px" fontFamily="Ubuntu" color="#137F27">
          Days
        </Text>
        <Box
          border="2px solid #137F27"
          fontSize="25px"
          fontFamily="Gilroy Regular"
          color="#137F27"
          height="40px"
          width="40px"
          bg="white"
          paddingTop="2px"
        >
          {timerHour}
        </Box>
        <Text paddingTop="10px" fontFamily="Ubuntu" color="#137F27">
          Hours
        </Text>
        <Box
          border="2px solid #137F27"
          fontSize="25px"
          fontFamily="Gilroy Regular"
          color="#137F27"
          height="40px"
          width="40px"
          bg="white"
          paddingTop="2px"
        >
          {timerMinute}
        </Box>
        <Text paddingTop="10px" fontFamily="Ubuntu" color="#137F27">
          Minutes
        </Text>
        <Box
          border="2px solid #137F27"
          fontSize="25px"
          fontFamily="Gilroy Regular"
          color="#137F27"
          height="40px"
          width="40px"
          bg="white"
          paddingTop="2px"
        >
          {timerSecond}
        </Box>
        <Text color="#137F27" fontFamily="Ubuntu" paddingTop="10px">
          Second
        </Text>
      </Stack>
    </>
  );
};
export default ImageBox;
