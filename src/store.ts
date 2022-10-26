import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const createReducer = (injectedReducers = {}) =>
  combineReducers({
    ...injectedReducers,
  });

const store = configureStore({
  reducer: createReducer(),
});

export default store;
