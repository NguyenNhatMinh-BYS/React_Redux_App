import { createSlice, current } from "@reduxjs/toolkit";

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    value: "",
  },
  reducers: {
    singleProduct(state, action) {
      state.value = action.payload;
      localStorage.setItem("singleProduct", JSON.stringify(state.value));
    },
  },
});
export const { singleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
