import { createSlice } from "@reduxjs/toolkit";
import { PositionKind } from "../types/position";

import { reducers } from "./position.reducers";

export interface PositionState {
  value: PositionKind;
  positions: {
    [key: string]: PositionKind;
  };
}

const initialState: PositionState = {
  value: "cross",
  positions: {},
};

const move = createSlice({
  name: "move",
  initialState,
  reducers,
});

export const { setValue, setMove } = move.actions;

export default move.reducer;
