import React, { useEffect, useState } from "react";
import Coins from "./Coins";
import Axios from "Axios";
import { CardHolder, Loader } from "./Coins.styled";
import Nav from "../Navbar/Nav";

const ApiUrl = "https://api.coinstats.app/public/v1/coins?skip=0";

const CoinsApi = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchWord, setsearchword] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        setLoading(false);
      }
    );
  }, []);
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (loading) {
    return (
      <Loader className="loader">
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </Loader>
    );
  }

  return (
    <>
      <Nav setsearchword={setsearchword} />
      <CardHolder>
        {filteredCoins.map((coin) => {
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
