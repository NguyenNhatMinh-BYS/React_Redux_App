import { createSlice } from "@reduxjs/toolkit";

import { data } from "../../../assets/data";
export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: data.length - 1,
  },
  reducers: {
    nextSlide: (state, action) => {
      state.value = action.payload > state.length ? 0 : action.payload;
    },
    preSlide: (state, action) => {
      state.value = action.payload < 0 ? state.length : action.payload;
    },
    dotSlide: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { nextSlide, preSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
