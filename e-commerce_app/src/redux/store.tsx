import { configureStore } from "@reduxjs/toolkit";
import { firestoreMiddleware } from "./middlewares/fetch_middleware";
import rootReducer from "./reducers/combine_reducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firestoreMiddleware),
  });

//  const store =createStore(rootReducer,applyMiddleware(firestoreMiddleware))

export default store;
