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

    bedroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bedroom ${action.payload}`;
      });

      state.house = newArray;
    },

    bathroomIncrement: (state, action) => {
      state.house.push(action.payload);
    },

    bathroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bathroom ${action.payload}`;
      });

      state.house = newArray;
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
