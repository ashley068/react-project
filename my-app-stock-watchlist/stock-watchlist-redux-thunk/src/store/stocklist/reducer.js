import {
  ADD_STOCK_ITEM,
  DELETE_STOCK_ITEM,
  UPDATE_STOCK_ITEM,
} from "./actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK_ITEM:
      if (!state.items.some((item) => item.symbol === action.payload.symbol)) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      } else return state;

    case DELETE_STOCK_ITEM:
      const newStockList = state.items.filter(
        (item) => item.symbol !== action.payload.symbol
      );
      return {
        ...state,
        items: newStockList,
      };

    case UPDATE_STOCK_ITEM:
      const itemIndex = state.items.findIndex(
        (item) => item.symbol === action.payload.symbol
      );
      const copyItems = [...state.items];
      copyItems[itemIndex] = action.payload;
      console.log(copyItems);
      return {
        ...state,
        items: copyItems,
      };

    default:
      return state;
  }
};

export default reducer;
