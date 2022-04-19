import {rootReducer} from './reducers';
import thunk from 'redux-thunk';
import persist from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, persist] as const,
});
