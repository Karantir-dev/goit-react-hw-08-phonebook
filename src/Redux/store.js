import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const middleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,

  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development'
});

export default store;
