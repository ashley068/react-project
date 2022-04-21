import React from "react";
import "./style.css";

const StockItem = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="symbol">
        <h4>{props.symbol}</h4>
      </div>
      <div className="data">
        {props.data.c}
        <br />
        <div className={props.data.d > 0 ? "green-text" : "red-text"}>
          {Number(props.data.d).toFixed(2)}
          <span className="dp">({Number(props.data.dp).toFixed(2) + "%"})</span>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
