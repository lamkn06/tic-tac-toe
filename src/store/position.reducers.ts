import { PayloadAction } from "@reduxjs/toolkit";

import { PositionState } from "./position";

export const reducers = {
  setValue(state: PositionState) {
    state.value = state.value === "cross" ? "cricle" : "cross";
  },

  setMove(
    state: PositionState,
    action: PayloadAction<{ row: number; col: number }>,
  ) {
    const { row, col } = action.payload;

    const positionKey = `${row},${col}`;
    const isExisted = state.positions[positionKey] !== undefined;

    if (isExisted) {
      return;
    }

    const nextValue = state.value === "cross" ? "cricle" : "cross";

    state.positions = {
      ...state.positions,
      [positionKey]: nextValue,
    };

    state.container[nextValue].rows[row] += 1;
    state.container[nextValue].cols[col] += 1;

    if (row === col) {
      state.container[nextValue].diagonal[row] += 1;
    }
  },
};
