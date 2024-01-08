import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSide: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    menuClose: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSide, menuClose } = appSlice.actions;
export default appSlice.reducer;
