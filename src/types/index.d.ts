import { PositionState } from "../store/position";

export interface ApplicationRootState {
  readonly position: PositionState;
}
