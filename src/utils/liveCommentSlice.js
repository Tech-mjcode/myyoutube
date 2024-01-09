import { createSlice } from "@reduxjs/toolkit";

const liveCommentSlice = createSlice({
  name: "slice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(50, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = liveCommentSlice.actions;
export default liveCommentSlice.reducer;
