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
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
  // console.log(symbolList);
  // console.log(stockList);
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
