import { PositionType } from "../../types/position";

export const isClicked = (
  positions: PositionType[],
  value: string,
): boolean => {
  return !!positions.find((position) => position.value === value);
};
