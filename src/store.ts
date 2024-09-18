import { configureStore } from '@reduxjs/toolkit';
import listsSlice from './slices/listsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedListReducer = persistReducer(
  { key: 'list', storage },
  listsSlice
)

export const store = configureStore({
  reducer: {
    lists: persistedListReducer,
  },
});

export const persistor = persistStore(store);

// These types are helpful for the typescript autocomplete

// Defines RootState based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Optional: define AppDispatch to type dispatches
export type AppDispatch = typeof store.dispatch;
