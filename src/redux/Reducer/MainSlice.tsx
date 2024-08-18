import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  add: boolean;
  projectKeys: string[];
}

const initialState: MainState = {
  add: false,
  projectKeys: [],
};

export const MainSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    handleProjectKey: (state, action) => {
      const key = action.payload;
      const existIndex = state.projectKeys.findIndex((exist) => exist === key);
      if (existIndex === -1) {
        state.projectKeys.push(key);
      } else {
        state.projectKeys.splice(existIndex, 1);
      }
    },
  },
});

export const { handleAddModalOpen, handleProjectKey } = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: MainState;
};
