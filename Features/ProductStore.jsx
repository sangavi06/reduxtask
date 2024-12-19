import { configureStore } from "@reduxjs/toolkit";

//Importing ProductSlice to save it in our created store
import ProductSlice from "./ProductSlice";

//creating store to distribute state values and update values in components
export const ProductStore = configureStore({
  reducer: {
    productReducer: ProductSlice,
  },
});