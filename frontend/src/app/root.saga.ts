import { all, fork } from "redux-saga/effects";
import { watchGetWeatherData } from "../features/weather/Weather.saga";

export default function* rootSaga() {
  yield all([fork(watchGetWeatherData)]);
}
