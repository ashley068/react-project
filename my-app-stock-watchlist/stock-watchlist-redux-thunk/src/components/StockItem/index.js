import React from "react";
import { connect } from "react-redux";
import { stocklistActions } from "../../store/stocklist/actions";
import "./style.css";

const mapDispatchToProps = {
  deleteStockItem: stocklistActions.deleteStockItem,
};
const StockItem = ({ data, symbol, deleteStockItem }) => {
  const handleDelete = () => {
    deleteStockItem(symbol);
  };
  return (
    <div>
      <button className="btn-delete" onClick={handleDelete}>
        -
      </button>
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
    </div>
  );
};

export default connect(null, mapDispatchToProps)(StockItem);
