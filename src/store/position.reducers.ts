import { PayloadAction } from "@reduxjs/toolkit";

import { initialState, PositionState } from "./position";

export const reducers = {
  setValue(state: PositionState) {
    state.value = state.value === "cross" ? "circle" : "cross";
  },

  resetPosition(state: PositionState) {
    return initialState;
  },

  setPosition(
    state: PositionState,
    action: PayloadAction<{ row: number; col: number }>,
  ) {
    const { row, col } = action.payload;

    const positionKey = `${row},${col}`;
    const isExisted = state.positions[positionKey] !== undefined;

    if (isExisted) {
      return;
    }

    const nextValue = state.value === "cross" ? "circle" : "cross";

    state.positions = {
      ...state.positions,
      [positionKey]: nextValue,
    };

    const container = state.container[nextValue];
    container.rows[row] += 1;
    container.cols[col] += 1;

    if (row === col) {
      container.diagonal[row] += 1;
    }

    if (row + col + 1 === 3) {
      container.oppositeDiagonal[row] += 1;
    }
  },
};
