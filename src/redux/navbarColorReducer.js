import { createSlice } from "@reduxjs/toolkit";

const navbarColor = createSlice({
  name: "navbarColor",
  initialState: false,
  reducers: {
    colorTransparent(state) {
      return false;
    },
    colorGreen(state) {
      return true;
    },
  },
});

export const { colorTransparent, colorGreen } = navbarColor.actions;

export default navbarColor.reducer;
