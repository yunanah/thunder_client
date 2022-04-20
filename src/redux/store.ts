import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type:
export type AppDispatch = typeof store.dispatch;
