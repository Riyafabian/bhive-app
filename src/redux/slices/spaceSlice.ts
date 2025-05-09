import { createSlice } from "@reduxjs/toolkit";
import type { SpaceState } from "../../types";

const initialState: SpaceState = {
  spaces: [],
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setSpaceList: (state, action) => {
      state.spaces = action.payload.spaces;
    },
  },
});

export const { setSpaceList } = spaceSlice.actions;
export default spaceSlice.reducer;
