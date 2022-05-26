import {
  ADD_STOCK_ITEM,
  DELETE_STOCK_ITEM,
  UPDATE_STOCK_ITEM,
} from "./actionTypes";
import finnhub from "../../api/finnhub";
const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

const stockItem = (symbol, data) => {
  return {
    symbol,
    data,
  };
};

export const stocklistActions = {
  addNewStock: (symbol) => (dispatch, getState) => {
    finnhub
      .get("/quote", {
        params: {
          symbol,
        },
      })
      .then((response) =>
        dispatch(createAction(ADD_STOCK_ITEM, stockItem(symbol, response.data)))
      );
  },

  deleteStockItem: (symbol) => {
    return createAction(DELETE_STOCK_ITEM, { symbol });
  },

  updateStockItem: () => (dispatch, getState) => {
    const state = getState();
    state.stocklist.items.map((item) =>
      finnhub
        .get("./quote", { params: { symbol: item.symbol } })
        .then((response) => {
          dispatch(
            createAction(
              UPDATE_STOCK_ITEM,
              stockItem(item.symbol, response.data)
            )
          );
        })
    );
  },
};
