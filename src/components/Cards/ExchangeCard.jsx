import React from "react";
import { Image, Text, Box, Container } from "@chakra-ui/react";

function ExchangeCard(props) {
  return (
    <Box
      className={"exCard"}
      h={160}
      w={200}
      m={4}
      justifyContent={"center"}
      boxShadow={"lg"}
      borderRadius={"lg"}
    >
      <a href={props.url} target="blank">
        <Container p={"0"} w={"full"} h={"full"}>
          <Image
            objectFit={"cover"}
            margin={"auto"}
            mt={4}
            src={props.image}
            justifySelf={"center"}
          />
          <Text textAlign={"center"} fontWeight={"bold"} mt={3}>
            {props.rank}
          </Text>
          <Box textAlign={"center"} mt={3}>
            {props.name}
          </Box>
        </Container>
      </a>
    </Box>
  );
}

export default ExchangeCard;
