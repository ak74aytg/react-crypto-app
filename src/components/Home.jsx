import React from "react";
import { VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/btc.png";

function Home() {
  return (
    <VStack w={"full"} h={"90vh"} bgColor={"blackAlpha.900"}>
      <Image
        src={logo}
        objectFit={"contain"}
        boxSize={"90%"}
        sx={{ filter: "grayscale(1)" }}
      />
      <Text
        fontSize={"6xl"}
        color={"gray.300"}
        position={"relative"}
        bottom={"10"}
      >
        Xcrypto
      </Text>
    </VStack>
  );
}

export default Home;
