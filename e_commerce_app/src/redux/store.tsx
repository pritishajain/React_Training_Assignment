import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { firestoreMiddleware } from "./middlewares/fetch_middleware";
import rootReducer from "./reducers/combineReducer";

/* const store = configureStore({
  reducer: rootReducer,
  middleware: [applyMiddleware(firestoreMiddleware)],
}); */

const store =createStore(rootReducer,applyMiddleware(firestoreMiddleware))
export default store;
