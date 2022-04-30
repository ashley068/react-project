import React from "react";
import "./style.css";
//npm classNames
// https://www.npmjs.com/package/classnames

const StockItem = ({ symbol, data }) => {
  return (
    <div className="container">
      <div className="symbol">
        <h4>{symbol}</h4>
      </div>
      <div className="data">
        {data.c}
        <br />
        <div className={data.d > 0 ? "green-text" : "red-text"}>
          {Number(data.d).toFixed(2)}
          <span className="dp">({Number(data.dp).toFixed(2) + "%"})</span>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
