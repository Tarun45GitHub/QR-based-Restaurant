import { combineReducers } from "redux";
import cartReducer from "./CartReducer.js";
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;