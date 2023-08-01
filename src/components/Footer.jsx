import React from "react";
import { Box, Stack, VStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import avtr from "../assets/avtr.jpg";

function Footer() {
  return (
    <Box
      position={"relative"}
      bottom={0}
      w={"100%"}
      minH={"30vh"}
      bgColor={"blackAlpha.900"}
      display={"flex"}
      alignItems={"center"}
    >
      <Stack
        width={"100%"}
        flexDir={["column", "row"]}
        justifyContent={"space-between"}
        color={"whiteAlpha.800"}
        paddingX={4}
      >
        <VStack alignItems={["center", "flex-start"]} justifyContent={"center"}>
          <Text fontWeight={"bold"}>About us</Text>
          <Text textAlign={"center"}>
            We are the best crypto trading app in India, we provide our guidance
            at a very affordable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar size="2xl" filter={'grayscale(1)'} name="Akshay Pant" src={avtr}></Avatar>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
