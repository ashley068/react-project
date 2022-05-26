import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { stocklistActions } from "./store/stocklist/actions";
import SearchToAdd from "./components/SearchBar";
import StockItem from "./components/StockItem";

const mapStateToProps = (state) => ({ stockItems: state.stocklist.items });
const mapDispatchToProps = {
  updateStockItem: stocklistActions.updateStockItem,
};

const App = ({ stockItems, updateStockItem }) => {
  const [updatedTime, setUpdatedTime] = useState(
    new Date().toLocaleTimeString("en-US")
  );

  //set time-updating interval
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedTime(new Date().toLocaleTimeString("en-US"));
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  //stock data updated
  useEffect(() => {
    updateStockItem();
  }, [updatedTime]);

  return (
    <div className="main">
      <div className="header">
        <h2>My Stock Watchlist</h2>
        <p>Updated at {updatedTime}</p>
        <SearchToAdd />
      </div>
      <div>
        {stockItems.map((item, index) => {
          return (
            <StockItem key={index} data={item.data} symbol={item.symbol} />
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
