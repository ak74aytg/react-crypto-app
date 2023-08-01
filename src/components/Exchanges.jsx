import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../index";
import { Box, HStack } from "@chakra-ui/react";
import ExchangeCard from "./Cards/ExchangeCard";
import Loader from "./Loader";
import Error from "./Error";

function Exchanges() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setLoader(false);
        setUserData(data);
      } catch (err) {
        setError(true);
      }
    };
    getExchanges();
  }, []);
  if (error) return <Error />;

  return loader ? (
    <Loader />
  ) : (
    <>
      <Box paddingX={8}>
        <HStack wrap={"wrap"} padding={4} justifyContent={"center"} mt={3}>
          {userData.map((i) => {
            return (
              <ExchangeCard
                key={i.id}
                image={i.image}
                rank={i.trust_score_rank}
                name={i.name}
                url={i.url}
              />
            );
          })}
        </HStack>
      </Box>
    </>
  );
}

export default Exchanges;
