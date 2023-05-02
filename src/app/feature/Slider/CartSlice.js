import { createSlice, current } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addCart(state, action) {
      const products = action.payload;
      console.log(products);
      const singleProduct = state.cart.find((item) => {
        return (
          item.id === products.id &&
          item.size === products.size &&
          item.color === products.color
        );
      });
      if (singleProduct) {
        singleProduct.amount++;
        singleProduct.totalPrice += products.price;
        state.totalAmount++;
        state.totalPrice += products.price;
      } else {
        state.cart.push({
          id: products.id,
          name: products.name,
          size: products.size,
          color: products.color,
          amount: 1,
          price: products.price,
          img: products.img,
          totalPrice: products.price,
          title: products.title,
        });
        console.log(products.price);
        state.totalPrice += products.price;
        state.totalAmount += 1;
      }
      console.log(current(state));
    },
    removCart(state, action) {
      const product = action.payload;
      console.log(product.id, product.size, product.color);
      state.cart = state.cart.filter((item) => {
        return (
          item.id !== product.id ||
          item.size !== product.size ||
          item.color !== product.color
        );
      });
      state.totalPrice -= product.totalPrice;
      state.totalAmount--;
    },
  },
});
export const { addCart, removCart } = cartSlice.actions;
export default cartSlice.reducer;
