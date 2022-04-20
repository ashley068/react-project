import React from "react";
import StockItem from "./StockItem";
import "../style.css";

class StockList extends React.Component {
  getData = (stockMap) => {
    let stockKeys = [];
    stockMap.forEach((value, key) => {
      stockKeys.push(key);
    });
    stockKeys.sort();
    return stockKeys.map((item, index) => (
      <StockItem key={index} symbol={item} data={stockMap.get(item)} />
    ));
  };
  render() {
    return <div>{this.getData(this.props.stocklist)}</div>;
  }
}

export default StockList;
