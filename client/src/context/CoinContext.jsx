/** @format */

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:4000/coins")
      .then((res) => {
        console.log(res.data)
        setCoins(res.data)
      })
      .catch((e) => console.log(e));
  }, []);

  
  
  const data = {
    coins,
    setCoins,
  };

  return <CoinContext.Provider value={data}>{children}</CoinContext.Provider>;
};

const useCoins = () => useContext(CoinContext);

export { CoinProvider, useCoins };
