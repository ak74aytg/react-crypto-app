import React from "react";
import { Container, Box } from "@chakra-ui/react";

function Loader() {
  return (
    <Container w={"100%"} h={"100vh"} mx={"auto"} pt={"150px"}>
      <Box
        borderColor={"blue"}
        boxSize={60}
        borderBottom={"8px"}
        borderRadius={"full"}
        mx={"auto"}
        sx={{
          animation: "spinner .5s infinite linear",
          "@keyframes spinner": {
            "0%": { transform: "rotate(0deg);" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      ></Box>
    </Container>
  );
}

export default Loader;
