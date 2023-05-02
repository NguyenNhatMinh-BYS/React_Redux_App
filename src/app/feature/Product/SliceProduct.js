import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://6447e7537bb84f5a3e4cbd8d.mockapi.io/shirt";
export const dataAPI = createAsyncThunk("data", async () => {
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e.message;
    });
});
export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(dataAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(dataAPI.fulfilled, (state, action) => {
        state.status = "success";

        state.value = action.payload;
      })
      .addCase(dataAPI.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  },
});
export default productSlice.reducer;
