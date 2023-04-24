import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload };
    },
    logout(state) {
      return null;
    },
    wishList(state, action) {
      state.wishList = action.payload;
    },
    update(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, wishList, update } = userSlice.actions;

export default userSlice.reducer;
