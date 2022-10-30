import { createSlice } from "@reduxjs/toolkit";
import { PositionKind } from "../types/position";

import { reducers } from "./position.reducers";

export interface PositionState {
  value: PositionKind;
  positions: {
    [key: string]: PositionKind;
  };
  container: {
    cross: {
      rows: number[];
      cols: number[];
      diagonal: number[];
      oppositeDiagonal: number[];
    };
    circle: {
      rows: number[];
      cols: number[];
      diagonal: number[];
      oppositeDiagonal: number[];
    };
  };
}

export const initialState: PositionState = {
  value: "cross",
  positions: {},
  container: {
    cross: {
      rows: [0, 0, 0],
      cols: [0, 0, 0],
      diagonal: [0, 0, 0],
      oppositeDiagonal: [0, 0, 0],
    },
    circle: {
      rows: [0, 0, 0],
      cols: [0, 0, 0],
      diagonal: [0, 0, 0],
      oppositeDiagonal: [0, 0, 0],
    },
  },
};

const position = createSlice({
  name: "position",
  initialState,
  reducers,
});

export const { setValue, setPosition, resetPosition } = position.actions;

export default position.reducer;
