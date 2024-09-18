import { configureStore } from '@reduxjs/toolkit';
import listsSlice from './slices/listsSlice';

export const store = configureStore({
  reducer: {
    lists: listsSlice,
  },
});

// These types are helpful for the typescript autocomplete

// Defines RootState based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Optional: define AppDispatch to type dispatches
export type AppDispatch = typeof store.dispatch;
