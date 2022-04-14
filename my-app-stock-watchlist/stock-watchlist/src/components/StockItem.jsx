import React from "react";
import "../style.css";

class StockItem extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="symbol">
          <h4>{this.props.symbol}</h4>
        </div>
        <div className="data">
          {this.props.data.c}
          <br />
          {Number(this.props.data.d).toFixed(2)}
          <span className="dp">
            ({Number(this.props.data.dp).toFixed(2) + "%"})
          </span>
        </div>
      </div>
    );
  }
}

export default StockItem;
