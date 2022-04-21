import React, { useEffect, useState } from "react";
import finnhub from "./finnhub";
import StockList from "./StockList";

const App = () => {
  const [updatedTime, setUpdatedTime] = useState(
    new Date().toLocaleTimeString("en-US")
  );
  const [stockList, setStockList] = useState(new Map());

  const stock = ["TSLA", "AAPL", "AMZN", "FB"];

  const updateNow = () => {
    console.log("update");
    stock.forEach(async (symbol) => {
      let response = await finnhub.get("/quote", {
        params: {
          symbol,
        },
      });
      stockList.set(symbol, response.data);
      setStockList(stockList);
    });
  };

  useEffect(() => {
    updateNow();
    const interval = setInterval(() => {
      updateNow();
      setUpdatedTime(new Date().toLocaleTimeString("en-US"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="header">
        <h2>My Stock Watchlist</h2>
        <p>Updated at {updatedTime}</p>
      </div>
      <div>
        <StockList stocklist={stockList} />
      </div>
    </div>
  );
};

export default App;
