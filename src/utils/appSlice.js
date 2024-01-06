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
  },
});

export const { toggleSide } = appSlice.actions;
export default appSlice.reducer;
