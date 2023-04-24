import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (!productInCart) {
        state.push({ ...action.payload, quantity: 1 });
      } else if (productInCart.quantity >= action.payload.stock) {
        toast.error(`No more units in stock`);
      } else {
        productInCart.quantity += 1;
      }
    },
    removeProduct(state, action) {
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (productInCart.quantity !== 1) {
        productInCart.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
    emptyCart(state, action) {
      return (state = []);
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
