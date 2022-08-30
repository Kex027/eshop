import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  price: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.cart.push(payload);
      state.price += payload.price;
    },
  },
});

export const { addItem } = shopSlice.actions;

export const getCart = (state) => state.shop.cart;
export const getCartPrice = (state) => state.shop.price;

export default shopSlice.reducer;
