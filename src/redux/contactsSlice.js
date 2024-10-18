import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

// Utility function to create action matchers
const getActions = type =>
  isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// Initial state for the contacts slice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Creating the contacts slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null; // Clear error on successful fetch
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null; // Clear error on successful add
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
        state.isLoading = false;
        state.error = null; // Clear error on successful delete
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true; // Set loading state when actions are pending
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false; // Stop loading on error
        state.error = action.payload; // Set the error payload
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false; // Ensure loading is false on fulfilled actions
        state.error = null; // Clear error on successful actions
      });
  },
});

// Export the reducer for use in the store
export const contactsReducer = contactsSlice.reducer;
