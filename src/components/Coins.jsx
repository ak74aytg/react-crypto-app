import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../index";
import { Box, HStack, RadioGroup, Radio, Button } from "@chakra-ui/react";
import CoinCard from "./Cards/CoinCard";
import Loader from "./Loader";
import Error from "./Error";

function Coins() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState([]);
  const [valueNext, setValueNext] = React.useState("inr");
  const [page, setPage] = useState(1);
  let _currency;
  const arr = new Array(100).fill(1);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${valueNext}&page=${page}`
        );
        setLoader(false);
        setUserData(data);
      } catch (err) {
        setError(true);
      }
    };
    getCoins();
  }, [valueNext, page]);

  if (error) return <Error />;

  valueNext === "inr"
    ? (_currency = "₹")
    : valueNext === "usd"
    ? (_currency = "$")
    : (_currency = "€");

  const changePage = (page) => {
    setPage(page);
    setLoader(true);
  };

  return loader ? (
    <Loader />
  ) : (
    <>
      <Box paddingX={8}>
        <RadioGroup
          width={"90%"}
          m={"auto"}
          mt={4}
          onChange={setValueNext}
          value={valueNext}
        >
          <HStack justifyContent={["center", "left"]}>
            <Radio value="inr">INR</Radio>
            <Radio value="usd">USD</Radio>
            <Radio value="eur">EUR</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} padding={4} justifyContent={"center"} mt={3}>
          {userData.map((i) => (
            <CoinCard
              id={i.id}
              key={i.id}
              image={i.image}
              symbol={i.symbol}
              name={i.name}
              price={i.current_price}
              currency={_currency}
            />
          ))}
        </HStack>
        <HStack w={"80%"} margin={"auto"} overflowX={"scroll"}>
          {arr.map((item, index) => (
            <Button
              key={index}
              onClick={() => changePage(index + 1)}
              my={4}
              h={9}
              backgroundColor={"blackAlpha.800"}
              color={"whiteAlpha.900"}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default Coins;
