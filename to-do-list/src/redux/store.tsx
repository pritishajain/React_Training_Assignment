import { createStore } from "redux";
import itemReducer from "./reducers/to-do-reducers";

const store = createStore(itemReducer)

export default store;

