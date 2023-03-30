import { combineReducers } from "redux";
import productReducer from "./fetch_reducer";

const rootReducer = combineReducers({productReducer:productReducer})

export default rootReducer;