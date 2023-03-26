import React, { useEffect, useState } from "react";
import Coins from "./Coins";
import Axios from "Axios";
import { CardHolder, Loader } from "./Coins.styled";
const ApiUrl = "https://api.coinstats.app/public/v1/coins?skip=0";

const CoinsApi = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <Loader className="loader">
        <div class="loader">
          <span class="loader-text">loading</span>
          <span class="load"></span>
        </div>
      </Loader>
    );
  }

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
