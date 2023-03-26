import React, { useEffect, useState } from "react";
import Coins from "./Coins";
import Axios from "Axios";
import {CardHolder} from './Coins.styled'
const ApiUrl = "https://api.coinstats.app/public/v1/coins?skip=0";

const CoinsApi = () => {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <>
      <CardHolder>
        {listOfCoins.map((coin) => {
          return (
            <Coins
              name={coin.name}
              key={coin.id}
              icon={coin.icon}
              price={coin.price}
            />
          );
        })}
      </CardHolder>
    </>
  );
};

export default CoinsApi;
