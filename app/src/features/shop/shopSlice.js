import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS_MOCK from "../../mock/products.json";

const initialState = {
  allProducts: PRODUCTS_MOCK.products,
  query: "",
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
      console.log(state.cart);
    },
  },
});

export const { setQuery, addToCart } = shopSlice.actions;
export const getAllProducts = (state) => state.shop.allProducts;
export const getQuery = (state) => state.shop.query;
export const getCart = (state) => state.shop.cart;
export const getCartLength = (state) => state.shop.cart.length;

export default shopSlice.reducer;
