import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ApplicationRootState } from "../types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<ApplicationRootState> =
  useSelector;
