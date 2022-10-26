import { PayloadAction } from "@reduxjs/toolkit";

import { PositionState } from "./position";

export const reducers = {
  setValue(state: PositionState) {
    state.value = state.value === "cross" ? "cricle" : "cross";
  },

  setMove(state: PositionState, action: PayloadAction<string>) {
    const isExisted = state.positions[action.payload] !== undefined;
    if (isExisted) {
      return;
    }

    state.positions = {
      ...state.positions,
      [action.payload]: state.value === "cross" ? "cricle" : "cross",
    };
  },
};
