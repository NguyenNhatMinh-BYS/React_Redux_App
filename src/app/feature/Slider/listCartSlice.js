import { createSlice } from "@reduxjs/toolkit";
export const listCartSlice = createSlice({
  name: "list-cart",
  initialState: {
    isActive: false,
  },
  reducers: {
    handleActive(state) {
      state.isActive = !state.isActive;
    },
  },
});
export const { handleActive } = listCartSlice.actions;
export default listCartSlice.reducer;
