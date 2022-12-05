import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS_MOCK from "../../mock/products.json";

const initialState = {
  allProducts: PRODUCTS_MOCK.products,
  query: "",
  cart: [],
  isShop: true,
  discount: { discount: 0.05, quantityToDiscount: 5 },
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
    },
    switchShop: (state, { payload }) => {
      state.isShop = payload;
    },
  },
});

export const { setQuery, addToCart, switchShop } = shopSlice.actions;
export const getAllProducts = (state) => state.shop.allProducts;
export const getQuery = (state) => state.shop.query;
export const getCart = (state) => state.shop.cart;
export const getIsShop = (state) => state.shop.isShop;
export const getCartLength = (state) => state.shop.cart.length;
export const getDiscount = (state) => state.shop.discount;

export default shopSlice.reducer;
