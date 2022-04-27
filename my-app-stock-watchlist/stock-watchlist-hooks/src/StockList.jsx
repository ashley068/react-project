import React from "react";
import StockItem from "./StockItem";
import "./style.css";

const StockList = ({ stockList, removeStock }) => {
  // const { stockList } = props;
  const renderedLists = stockList.map(({ config, data }) => {
    return (
      <div>
        <button
          className="btn-delete"
          onClick={() => removeStock(config.params.symbol)}
        >
          -
        </button>
        <StockItem
          key={config.params.symbol}
          symbol={config.params.symbol}
          data={data}
        />
      </div>
    );
  });
  return <div>{renderedLists}</div>;
  // console.log("STOCKLIST", props);
};

export default StockList;
