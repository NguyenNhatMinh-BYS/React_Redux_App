import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../assets/data";
export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    filterProduct: JSON.parse(localStorage.getItem("filterData")) || storeData,
  },
  reducers: {
    filterProduct(state, action) {
      try {
        const filter = storeData.filter((item) => {
          return item.type === action.payload;
        });
        console.log(filter);
        state.filterProduct = filter;
        const saveState = JSON.stringify(filter);
        localStorage.setItem("filterData", saveState);
      } catch (err) {
        return err;
      }
    },
  },
});
export const { filterProduct } = productSlice.actions;
export default productSlice.reducer;
