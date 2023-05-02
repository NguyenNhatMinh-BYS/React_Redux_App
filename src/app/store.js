import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./feature/Slider/SliderSlice";
import sliderProduct from "./feature/Product/SliceProduct";
import productSlice from "./feature/Slider/ProductSlice";
import singleProductSlice from "./feature/Slider/SingleProductSlice";
import cartReducer from "./feature/Slider/CartSlice";
import listCartReducer from "./feature/Slider/listCartSlice";
import loginSlice from "./feature/Slider/loginSlice";
import sortProductSlice from "./feature/Slider/SliceSortProcuder";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    product: sliderProduct,
    filterProduct: productSlice,
    singleProduct: singleProductSlice,
    cart: cartReducer,
    listCart: listCartReducer,
    login: loginSlice,
    sort: sortProductSlice,
  },
});
