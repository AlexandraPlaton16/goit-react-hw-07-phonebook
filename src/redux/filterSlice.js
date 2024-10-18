import { createSlice } from '@reduxjs/toolkit';

// Creating a slice for the filter
export const filterSlice = createSlice({
  name: 'filter', // Unique name for the slice
  initialState: '', // Initial state of the filter (empty string)
  reducers: {
    // Defining the changeFilter reducer
    changeFilter(state, action) {
      return action.payload; // Update the state with the new filter value
    },
  },
});

// Exporting the changeFilter action from the filterSlice
export const { changeFilter } = filterSlice.actions;

// Exporting the filterReducer from the filterSlice
export const filterReducer = filterSlice.reducer;
