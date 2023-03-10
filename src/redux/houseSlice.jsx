import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = {
  house: House,
  carpetArea: 510,
  userCarpetAreaValue: 0,
  bedroomQuantity: 1,
  bathroomQuantity: 1,
  totalCost: 0,
};

export const HouseSlice = createSlice({
  name: "home",
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
      state.bedroomQuantity = state.bedroomQuantity + 1;
    },

    bedroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bedroom ${state.bedroomQuantity}`;
      });
      state.house = newArray;

      if (state.bedroomQuantity > 1) {
        state.carpetArea -= 120;
        state.bedroomQuantity = state.bedroomQuantity - 1;
      } else {
        return state.bedroomQuantity;
      }
    },

    bathroomIncrement: (state, action) => {
      state.house.push(action.payload);
      state.carpetArea += 40;
      state.bathroomQuantity = state.bathroomQuantity + 1;
    },

    bathroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bathroom ${state.bathroomQuantity}`;
      });
      state.house = newArray;

      if (state.bathroomQuantity > 1) {
        state.carpetArea -= 40;
        state.bathroomQuantity = state.bathroomQuantity - 1;
      } else {
        return state.bathroomQuantity;
      }
    },

    userCarpetArea: (state, action) => {
      state.userCarpetAreaValue = action.payload;
    },

    floorCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.floorCost = action.payload.image.cost;
        }
      });
    },

    wallCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.wallCost = action.payload.image.cost;
        }
      });
    },

    ceilingCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.ceilingCost = action.payload.image.cost;
        }
      });
    },

    electricalCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.electricalCost = action.payload.image.cost;
        }
      });
    },

    windowCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.windowCost = action.payload.image.cost;
        }
      });
    },

    doorCustomizationPrice: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.doorCost = action.payload.image.cost;
        }
      });
    },

    totalExpense: (state, action) => {
      state.totalCost = action.payload;
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
  floorCustomizationPrice,
  wallCustomizationPrice,
  ceilingCustomizationPrice,
  electricalCustomizationPrice,
  windowCustomizationPrice,
  doorCustomizationPrice,
  totalExpense,
} = HouseSlice.actions;

export default HouseSlice.reducer;
