import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS_MOCK from "../../mock/products.json";

const initialState = {
  allProducts: PRODUCTS_MOCK.products,
  query: "",
  cart: [],
  discount: { discount: 0.05, itemsToDiscount: 5 },
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
    deleteFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ name }) => name !== payload);
    },
  },
});

export const { setQuery, addToCart, deleteFromCart } = shopSlice.actions;
export const getAllProducts = (state) => state.shop.allProducts;
export const getQuery = (state) => state.shop.query;
export const getCart = (state) => state.shop.cart;
export const getProductFromCart = (state, action) =>
  state.shop.allProducts.find((product) => product.id === action);
export const getCartLength = (state) => state.shop.cart.length;
export const getDiscount = (state) => state.shop.discount;

export default shopSlice.reducer;
