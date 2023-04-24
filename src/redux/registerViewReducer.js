import { createSlice } from "@reduxjs/toolkit";

const registerViewSlice = createSlice({
  name: "register",
  initialState: false,
  reducers: {
    showRegister(state, action) {
      return (state = true);
    },

    hideRegister(state, action) {
      return (state = false);
    },
  },
});

export const { showRegister, hideRegister } = registerViewSlice.actions;

export default registerViewSlice.reducer;
