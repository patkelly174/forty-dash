import { combineReducers } from "redux";
import appSlice from "../features/app/app.slice";

const rootReducer = combineReducers({ app: appSlice });

export default rootReducer;
