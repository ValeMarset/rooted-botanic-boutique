import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    newProducts(state, action) {
      return action.payload;
    },
  },
});

export const { newProducts } = productsSlice.actions;

export default productsSlice.reducer;
