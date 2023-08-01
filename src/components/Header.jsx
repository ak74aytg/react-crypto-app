import React, { useState } from "react";
import { HStack, IconButton, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/coin/${name}`);
    setName("");
  };

  return (
    <HStack
      w={"100%"}
      backgroundColor={"blackAlpha.900"}
      justifyContent={"space-between"}
      paddingX={["1","5"]}
    >
      <HStack
        justifyContent={"stretch"}
        paddingY={"5"}
        color={"whiteAlpha.900"}
        fontWeight={"medium"}
        position={"relative"}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/exchanges"}>Exchanges</Link>
        <Link to={"/coins"}>Coins</Link>
      </HStack>

      <Box h={'100%'}>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <IconButton  className="button" type="submit" icon={<FaSearch />} />
        </form>
      </Box>
    </HStack>
  );
}

export default Header;
