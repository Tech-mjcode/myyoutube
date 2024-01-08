import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    setCache: (state, action) => {
      //merge object
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setCache } = searchSlice.actions;
export default searchSlice.reducer;
