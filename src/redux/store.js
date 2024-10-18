import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage
import { persistReducer, persistStore } from 'redux-persist'; // Make sure this is imported
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Persist configuration
const persistConfig = {
  key: 'root', // Key to store persisted data
  storage, // Storage mechanism
};

// Combining the reducers
const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

// Applying the persistReducer wrapper to rootReducer
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer, // Using persisted reducer for contacts
    filter: filterReducer, // Not persisted
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
