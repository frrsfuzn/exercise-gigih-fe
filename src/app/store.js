import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "../features/gif/gifSlice";

export default configureStore({
  reducer: {
    gifs: gifReducer
  }
});
