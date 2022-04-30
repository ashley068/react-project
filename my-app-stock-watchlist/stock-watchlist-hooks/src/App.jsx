import React, { useEffect, useState } from "react";
import finnhub from "./finnhub";
import StockList from "./StockList";
import Search from "./Search";

const App = () => {
  //State
  const [updatedTime, setUpdatedTime] = useState(
    new Date().toLocaleTimeString("en-US")
  );
  const [stockList, setStockList] = useState([]);
  const [term, setTerm] = useState("");
  const [symbolList, setSymbolList] = useState([]);

  //set time-updating interval
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedTime(new Date().toLocaleTimeString("en-US"));
      // updateStockList();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateStockList = async () => {
      const unresolvedList = stockList.map((item) =>
        finnhub.get("/quote", {
          params: {
            symbol: item.config.params.symbol,
          },
        })
      );
      const newStockList = await Promise.all(unresolvedList);
      setStockList(newStockList);
    };
    updateStockList();
  }, [updatedTime]);

  // setStockList(updateStockList);

  //api request
  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await finnhub.get("/quote", {
        params: {
          symbol: term,
        },
      });
      stockList.push(response);
      setStockList([...stockList]);
      // console.log(stockList);
    };

    if (term && !symbolList.includes(term)) {
      symbolList.push(term);
      setSymbolList(symbolList);
      fetchMyAPI();
    }
  }, [term]);

  //remove list item
  const removeStock = (symbol) => {
    const newSymbolList = symbolList.filter((item) => item !== symbol);
    setSymbolList(newSymbolList);

    const newStockList = stockList.filter(
      (item) => item.config.params.symbol !== symbol
    );
    setStockList(newStockList);
  };

  return (
    <div className="main">
      <div className="header">
        <h2>My Stock Watchlist</h2>
        <p>Updated at {updatedTime}</p>
        <Search addNewStock={(term) => setTerm(term)} />
      </div>
      <div>
        <StockList stockList={stockList} removeStock={removeStock} />
      </div>
    </div>
  );
};

export default App;
