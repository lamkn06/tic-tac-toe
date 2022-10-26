import { configureStore } from "@reduxjs/toolkit";
import position from "./store/position";
import user from "./store/user";

const store = configureStore({
  reducer: {
    user,
    position,
  },
});

export default store;
