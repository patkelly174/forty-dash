import { weatherService } from "./Weather.services";
import { getWeatherRequest } from "./weather.slice";
import { call, takeLatest } from "@redux-saga/core/effects";

// Saga Worker
export function* fetchWeatherData(): any {
  try {
    const response = yield call(weatherService.getAll);
  } catch (e) {
    console.log(e);
  }
}

// Saga Watchers
export function* watchGetWeatherData() {
  yield takeLatest(getWeatherRequest, fetchWeatherData);
}
