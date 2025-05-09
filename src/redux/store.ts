import { configureStore } from "@reduxjs/toolkit";
import spaceSlice from "./slices/spaceSlice";
import type { SpaceState } from "../types";

export interface RootState {
  space: SpaceState;
}

export const store = configureStore({
  reducer: {
    space: spaceSlice,
  },
});
