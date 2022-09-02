import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import store from './Store/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
