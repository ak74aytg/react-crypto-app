import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import server from "..";
import axios from "axios";
import {
  Box,
  RadioGroup,
  HStack,
  Radio,
  Text,
  Image,
  StatHelpText,
  StatNumber,
  StatLabel,
  Stat,
  StatArrow,
  Badge,
  Progress,
  VStack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Error from "./Error";
import Loader from "./Loader";
import Chart from "./Chart";

function CoinDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("inr");
  const [loading, setLoading] = useState("true");
  const [error, setError] = useState("false");
  const [day, setDay] = useState("24h");
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        const { data: history } = await axios.get(
          `${server}/coins/${id}/market_chart?vs_currency=${value}&days=${day}`)
        setData(data);
        setPrices(history.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getCoin();
  }, [id, value, day]);
  

  let currency;
  value === "inr"
    ? (currency = "₹")
    : value === "usd"
    ? (currency = "$")
    : (currency = "€");

  if (error) {
    <Error />;
  }

  const changeDays = (e) => {
    const val = e.target.value;
    setDay(val);
  };

  return loading ? (
    <Loader />
  ) : (
    <Box>
      <Box
        my={4}
        width={"100%"}
        h={["", "90vh"]}
        display={"flex"}
        justifyContent={"center"}
      >
        <Chart details={prices} currency={currency} days={day} />
      </Box>
      <ButtonGroup
        my={"4"}
        justifyContent={"center"}
        variant="outline"
        w="full"
        overflowX={["scroll", "hidden"]}
        onClick={changeDays}
        spacing="6"
      >
        <Button value={"24h"}>24h</Button>
        <Button value={"7"}>7d</Button>
        <Button value={"30"}>1m</Button>
        <Button value={"90"}>3m</Button>
        <Button value={"180"}>6m</Button>
        <Button value={"270"}>9m</Button>
        <Button value={"365"}>1y</Button>
        <Button value={"max"}>max</Button>
      </ButtonGroup>
      <RadioGroup
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        mt={8}
        mb={20}
        onChange={setValue}
        value={value}
      >
        <HStack justifyContent={["center", "left"]}>
          <Radio value="inr">INR</Radio>
          <Radio value="usd">USD</Radio>
          <Radio value="eur">EUR</Radio>
        </HStack>
      </RadioGroup>
      <Box>
        <Text mb={'5'} fontSize="sm" w={"full"} color={"gray.500"} textAlign={"center"}>
          Last Updated On {Date(data.last_updated).split("G")[0]}
        </Text>
        <Image w={'full'} h={'35vh'} objectFit={'contain'} src={data.image.large}></Image>

        <Stat mx={20} my={4}>
          <StatLabel fontSize={'md'}>{data.name}</StatLabel>
          <StatNumber>
            {currency}
            {data.market_data.current_price[value]}
          </StatNumber>
          <StatHelpText>
            <StatArrow
              
              type={
                data.market_data.price_change_percentage_24h > 0
                  ? "increase"
                  : "decrease"
              }
            />
            {data.market_data.price_change_percentage_24h}%
          </StatHelpText>
        </Stat>
        <Badge
           mx={20} my={4}
          fontSize="2em"
          color={"whiteAlpha.800"}
          backgroundColor={"blackAlpha.900"}
        >
          #{data.market_cap_rank}
        </Badge>
        <Progress  mx={20} colorScheme="teal" size="md" value={50} />
      </Box >
      <HStack  mx={20} my={4} justifyContent={"space-between"}>
        <Badge colorScheme="red">
          {currency}
          {data.market_data.low_24h[value]}
        </Badge>
        <Text  fontFamily={"sans"}>24H Range</Text>
        <Badge colorScheme="green">
          {currency}
          {data.market_data.high_24h[value]}
        </Badge>
      </HStack>
      <VStack  mx={20} my={10}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text fontFamily={'Bebas Neue'} textTransform={"uppercase"}>Max Supply</Text>
          <Text fontWeight={'light'} fontFamily={'Bebas Neue'} >{data.market_data.max_supply}</Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text fontFamily={'Bebas Neue'} textTransform={"uppercase"}>Circulating Supply</Text>
          <Text fontFamily={'Bebas Neue'} >{data.market_data.circulating_supply}</Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text fontFamily={'Bebas Neue'} textTransform={"uppercase"}>Market Cap</Text>
          <Text fontFamily={'Bebas Neue'} >
            {currency}
            {data.market_data.market_cap[value]}
          </Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text fontFamily={'Bebas Neue'} textTransform={"uppercase"}>All Time Low</Text>
          <Text fontFamily={'Bebas Neue'}>
            {currency}
            {data.market_data.atl[value]}
          </Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text  fontFamily={'Bebas Neue'} textTransform={"uppercase"}>All Time High</Text>
          <Text fontFamily={'Bebas Neue'} >
            {currency}
            {data.market_data.ath[value]}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default CoinDetails;
