import { createSlice } from "@reduxjs/toolkit";

const cartViewSlice = createSlice({
  name: "cartView",
  initialState: false,
  reducers: {
    toggleShowCart(state, action) {
      if (state === true) {
        return (state = false);
      } else {
        return (state = true);
      }
    },
  },
});

export const { toggleShowCart } = cartViewSlice.actions;

export default cartViewSlice.reducer;
