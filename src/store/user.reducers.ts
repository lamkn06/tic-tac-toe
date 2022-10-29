import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user";

export const reducers = {
  setName(state: UserState, action: PayloadAction<string>) {
    state.name = action.payload;
  },
};
