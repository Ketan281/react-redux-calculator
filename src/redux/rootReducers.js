import { reducer } from "./reducers";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    ourState:reducer
})