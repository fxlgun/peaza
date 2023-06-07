import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "pizzaCart",
  initialState: {
      orderItems: [],
      totalPrice: 0,
    },
  reducers: {
    addPizza: (state, action) => {
        console.log(state.user);
      state.orderItems.push(action.payload);
      state.totalPrice +=
        parseInt(action.payload.price) * parseInt(action.payload.quantity);
    },
    removePizza: (state, action) => {
      const [index, pizza] = action.payload;
      state.orderItems.splice(index, 1);
      state.totalPrice -= parseInt(pizza.quantity) * parseInt(pizza.price);
    },
    cartReset: (state) => {
      state.totalPrice = 0;
      state.orderItems = [];
    },
  },
});

export const { addPizza, removePizza, cartReset } = cartSlice.actions;
export default cartSlice.reducer;
