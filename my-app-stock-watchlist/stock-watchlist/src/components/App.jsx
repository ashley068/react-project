import React from "react";
import finnhub from "../api/finnhub";
import StockList from "./StockList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      res: new Map(),
    };
  }
  stock = ["TSLA", "AAPL", "AMZN", "FB"];

  updateNow() {
    console.log("update");
    // debugger;
    this.stock.forEach(async (symbol) => {
      // console.log(symbol);
      let response = await finnhub.get("/quote", {
        params: {
          symbol,
        },
      });
      this.state.res.set(symbol, response.data);
      this.setState({ res: this.state.res });
    });
  }

  componentDidMount() {
    this.updateNow();
    this.updateInterval = setInterval(() => this.updateNow(), 5000);
    // this.updateInterval = setInterval(this.updateNow(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    return (
      <div className="main">
        <div>
          <h1>My Stock Watchlist</h1>
          <span>Updated at</span>
        </div>
        <div>
          <StockList stocklist={this.state.res} />
        </div>
      </div>
    );
  }
}

export default App;
