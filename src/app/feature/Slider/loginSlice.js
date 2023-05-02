import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogined: false,
    avatar: "",
    userName: "",
  },
  reducers: {
    logIned(state, action) {
      console.log(action.payload);
      state.isLogined = true;
      state.avatar = action.payload.img;
      state.userName = action.payload.name;
    },
    logOuted(state, action) {
      state.isLogined = false;
      state.avatar = "";
      state.userName = "";
    },
  },
});
export const { logIned, logOuted } = loginSlice.actions;
export default loginSlice.reducer;
