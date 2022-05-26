import axios from "axios";

const KEY = "c9af67qad3i8qngr0t20";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: KEY,
  },
});
