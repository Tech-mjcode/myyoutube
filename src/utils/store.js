import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveCommentSlice from "./liveCommentSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchCache: searchSlice,
    liveChat: liveCommentSlice,
  },
});

export default store;
