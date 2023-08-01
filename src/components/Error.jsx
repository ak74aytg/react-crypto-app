import React from "react";
import {
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error() {
  return (
    <Box
      h={"85vh"}
      w={["100%", "50%"]}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      margin={"auto"}
    >
      <Text fontWeight={"bold"}>429 error</Text>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>too many requests!!</AlertTitle>
        <AlertDescription>please try later.</AlertDescription>
      </Alert>
    </Box>
  );
}

export default Error;
