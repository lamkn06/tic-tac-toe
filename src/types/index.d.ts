import { PositionState } from "../store/position";
import { UserState } from "../store/user";

export interface ApplicationRootState {
  readonly user: UserState;
  readonly position: PositionState;
}
