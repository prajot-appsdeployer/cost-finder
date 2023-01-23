import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = { house: House };

export const HouseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    bedroomIncrement: (state, action) => {
      state.house.push(action.payload);
    },

    bedroomDecrement: (state) => {
      state.house.splice(4, 1);
    },

    bathroomIncrement: (state, action) => {
      state.house.push(action.payload);
    },

    bathroomDecrement: (state) => {
      state.house.splice(4, 1);
    },
  },
});

export const {
  bedroomIncrement,
  bedroomDecrement,
  bathroomIncrement,
  bathroomDecrement,
} = HouseSlice.actions;

export default HouseSlice.reducer;
