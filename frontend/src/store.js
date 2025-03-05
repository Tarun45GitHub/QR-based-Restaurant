// import { createStore } from "redux";
// import rootReducer from "./reducer/index.js";
// const store = createStore(rootReducer);

// export default store;

import {configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/cartSlice'

export const store=configureStore({
    reducer:cartReducer
})