import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const gifSlice = createSlice({
  name: "gifs",
  initialState,
  reducers: {
    storeGifs: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { storeGifs } = gifSlice.actions;

export default gifSlice.reducer;
