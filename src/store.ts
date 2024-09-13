import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import listsSlice from './slices/listsSlice';

export const store = configureStore({
  reducer: {
    Lists: listsSlice,
  },
});

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();