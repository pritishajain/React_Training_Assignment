import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import "./App.css";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Provider store={store}>
      <Main />
      </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
