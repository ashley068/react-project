import { combineReducers } from "redux";
import stockReducer from "./stocklist/reducer";
const reducers = {
  stocklist: stockReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
