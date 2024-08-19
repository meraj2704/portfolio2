import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  add: boolean;
  projectKeys: string[];
  projects:any[];
}

const initialState: MainState = {
  add: false,
  projectKeys: [],
  projects: [],
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
    handleProjectFilter: (state,action) => {
      state.projects = action.payload;
    }
  },
});

export const { handleAddModalOpen, handleProjectKey, handleProjectFilter } = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: MainState;
};
