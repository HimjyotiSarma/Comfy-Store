import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numberOfItems: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocal = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocal(),
  reducers: {
    addItems: (state, action) => {
      let { product } = action.payload;
      let item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numberOfItems =
        Number(state.numberOfItems) + Number(product.amount);
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to Cart");
    },
    clearItem: () => {
      // Pass state as parameter if there is any issue
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { itemID } = action.payload;
      console.log(itemID);
      const product = state.cartItems.find((item) => item.cartID == itemID);
      console.log("Current Product ", product);
      state.cartItems = state.cartItems.filter((item) => item.cartID != itemID);
      state.numberOfItems =
        Number(state.numberOfItems) - Number(product.amount);
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error(`Product Removed from Cart`);
    },
    editItem: (state, action) => {
      const { itemID, amount } = action.payload;
      let product = state.cartItems.find((item) => item.cartID == itemID);
      state.numberOfItems += Number(amount) - Number(product.amount);
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart Updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItems, clearItem, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
