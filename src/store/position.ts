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
    cricle: {
      rows: number[];
      cols: number[];
      diagonal: number[];
      oppositeDiagonal: number[];
    };
  };
}

const initialState: PositionState = {
  value: "cross",
  positions: {},
  container: {
    cross: {
      rows: [0, 0, 0],
      cols: [0, 0, 0],
      diagonal: [0, 0, 0],
      oppositeDiagonal: [0, 0, 0],
    },
    cricle: {
      rows: [0, 0, 0],
      cols: [0, 0, 0],
      diagonal: [0, 0, 0],
      oppositeDiagonal: [0, 0, 0],
    },
  },
};

const move = createSlice({
  name: "move",
  initialState,
  reducers,
});

export const { setValue, setMove } = move.actions;

export default move.reducer;
