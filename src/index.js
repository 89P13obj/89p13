import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import store from "./setup/store";
import { Provider } from "react-redux";
import { load } from "./behavior/actions";

store.dispatch(load(10));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
