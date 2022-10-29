import { createSlice } from "@reduxjs/toolkit";
import { ApplicationRootState } from "../types";

import { reducers } from "./user.reducers";

export interface UserState {
  name: string | undefined;
}

const initialState: UserState = {
  name: undefined,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const selectIsWinner = (state: ApplicationRootState): boolean => {
  const { container, value } = state.position;
  const rowWinner = container[value].rows.includes(3);
  const colWinner = container[value].cols.includes(3);

  const diagonalWinner = `${container[value].diagonal}` === `1,1,1`;
  const oppositeWinner = `${container[value].oppositeDiagonal}` === `1,1,1`;

  return rowWinner || colWinner || diagonalWinner || oppositeWinner;
};

export const { setName } = user.actions;

export default user.reducer;
