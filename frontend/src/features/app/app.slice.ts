import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { initialState } from "./App.interface";

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleAppTheme(state, action) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleAppTheme } = appSlice.actions;

export const getTheme = (state: RootState) => state.app.theme;

export default appSlice.reducer;
