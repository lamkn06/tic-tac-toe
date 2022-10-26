import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./user.reducers";

export interface UserState {
  name: string | undefined;
}

const initialState: UserState = {
  name: undefined,
};

const follow = createSlice({
  name: "user",
  initialState,
  reducers,
});

export default follow.reducer;
