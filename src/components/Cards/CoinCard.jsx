import React from "react";
import { Image, Text, Box, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CoinCard(props) {
  return (
    <Box
      className={"exCard"}
      h={200}
      w={200}
      m={4}
      justifyContent={"center"}
      boxShadow={"lg"}
      borderRadius={"lg"}
    >
      <Link to={`/coin/${props.id}`}>
        <Container p={"0"} w={"full"} h={"full"}>
          <Image
            objectFit={"cover"}
            boxSize={50}
            margin={"auto"}
            mt={4}
            src={props.image}
            justifySelf={"center"}
          />
          <Text textAlign={"center"} fontWeight={"bold"} mt={3} fontSize={"lg"}>
            {props.symbol}
          </Text>
          <Box textAlign={"center"} mt={3}>
            {props.name}
          </Box>
          <Box textAlign={"center"} mt={3}>
            {props.currency}
            {props.price}
          </Box>
        </Container>
      </Link>
    </Box>
  );
}

export default CoinCard;
