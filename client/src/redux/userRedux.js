import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const userSlice = createSlice({
  name: "pizzaUser",
  initialState: {
    currentUser: null,
  },
  reducers: {
    logInn: (state, action) => {
      state.currentUser = action.payload;
      
    },
    logOutt: (state) => {
      state.currentUser = null;
    },
  },
});

export const { logInn, logOutt } = userSlice.actions;
export default userSlice.reducer;
