import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { firestoreMiddleware } from "./middlewares/fetch_middleware";
import rootReducer from "./reducers/combine_reducer";

const store =createStore(rootReducer,applyMiddleware(firestoreMiddleware))

export default store;
