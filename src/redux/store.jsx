import { configureStore } from "@reduxjs/toolkit";
import HouseReducer from "./houseSlice";

export const store = configureStore({
  reducer: {
    home: HouseReducer,
  },
});
