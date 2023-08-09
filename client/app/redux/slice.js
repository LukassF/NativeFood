import { createSlice } from "@reduxjs/toolkit";

export const savedRecipiesSlice = createSlice({
  name: "savedRecipies",
  initialState: {
    savedRecipies: [],
  },
  reducers: {
    saveRecipe: (state, action) => {
      const contains = state.savedRecipies.filter(
        (item) => item === action.payload
      );

      if (contains.length !== 0) return;
      state.savedRecipies.push(action.payload);
    },
    reset: (state, action) => {
      state.savedRecipies = [];
    },
    removeFromSaved: (state, action) => {
      const filtered = state.savedRecipies.filter(
        (item) => item !== action.payload
      );
      state.savedRecipies = filtered;
    },
  },
});

export const { saveRecipe, reset, removeFromSaved } =
  savedRecipiesSlice.actions;
export default savedRecipiesSlice.reducer;
