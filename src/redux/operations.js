import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Update with the correct base URL from MockAPI
axios.defaults.baseURL =
  'https://67122b974eca2acdb5f76c2e.mockapi.io/contacts-api';

// Creating an asynchronous Thunk action fetchContacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Creating an asynchronous Thunk action addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Creating an asynchronous Thunk action deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
