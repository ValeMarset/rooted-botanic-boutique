import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: true,
  reducers: {
    showModal(state, action) {
      return true;
    },
    closeModal(state, action) {
      return false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
