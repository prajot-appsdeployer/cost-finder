import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = { house: House, carpetArea: 510, userCarpetAreaValue: 0 };

export const HouseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setID: (state) => {
      state.house.forEach((el) => {
        const id = el.title.toLowerCase().replaceAll(" ", "");
        el.id = id;
      });
    },

    bedroomIncrement: (state, action) => {
      state.house.push(action.payload);
      state.carpetArea += 120;
    },

    bedroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bedroom ${action.payload}`;
      });
      state.house = newArray;

      if (action.payload > 1) {
        state.carpetArea -= 120;
      }
    },

    bathroomIncrement: (state, action) => {
      state.house.push(action.payload);
      state.carpetArea += 40;
    },

    bathroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bathroom ${action.payload}`;
      });
      state.house = newArray;

      if (action.payload > 1) {
        state.carpetArea -= 40;
      }
    },

    userCarpetArea: (state, action) => {
      state.userCarpetAreaValue = action.payload;
    },
  },
});

export const {
  setID,
  bedroomIncrement,
  bedroomDecrement,
  bathroomIncrement,
  bathroomDecrement,
  userCarpetArea,
} = HouseSlice.actions;

export default HouseSlice.reducer;
