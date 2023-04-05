import { combineReducers } from "redux";
import productReducer from "./fetch_reducer";
import filterPropertyReducer from "./filter_property_reducer";

const rootReducer = combineReducers({ productReducer: productReducer, filterPropertyReducer: filterPropertyReducer });

export default rootReducer;
