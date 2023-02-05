import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
// import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Run the saga
sagaMiddleware.run(rootSaga);
