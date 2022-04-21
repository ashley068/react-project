import React from "react";
import StockItem from "./StockItem";

const StockList = (props) => {
  console.log(props);
  let stockKeys = [];
  props.stocklist.forEach((value, key) => {
    stockKeys.push(key);
  });
  stockKeys.sort();
  return stockKeys.map((item, index) => {
    return (
      <StockItem key={index} symbol={item} data={props.stocklist.get(item)} />
    );
  });
};

export default StockList;
