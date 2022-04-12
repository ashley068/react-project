import React from "react";
import finnhub from "../api/finnhub";
import StockList from "./StockList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      res: [],
    };
  }
  stock = ["TSLA", "AAPL", "AMZN", "FB"];
  updateNow = () => {
    // debugger;
    this.stock.forEach(async (symbol) => {
      console.log(symbol);
      let response = await finnhub.get("/quote", {
        params: {
          symbol,
        },
      });
      // console.log(response.config.params.symbol, response.data);
      // console.log([...this.state.res, response]);
      console.log(response.config.params.symbol);
      this.setState({ res: [...this.state.res, response] });
      // console.log(this.state.res);
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>My Stock Watchlist</h1>
          <span>Updated at</span>
          <div>
            <StockList stocklist={this.state.res} />
            <button onClick={this.updateNow}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
