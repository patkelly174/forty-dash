import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { initialState } from "./Weather.initial";

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherRequest(state, action) {
      console.log("test");
    },
    getWeatherSuccess(state, action) {
      console.log(action.payload);
      state.timelines - action.payload;
    },
  },
});

export const { getWeatherRequest, getWeatherSuccess } = weatherSlice.actions;

export const getState = (state: RootState) => state;

export default weatherSlice.reducer;
