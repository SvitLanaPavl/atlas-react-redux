import { configureStore } from '@reduxjs/toolkit';
import listsSlice from './slices/listsSlice';

export const store = configureStore({
  reducer: {
    lists: listsSlice,
  },
});
