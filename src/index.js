import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleWare from "redux-thunk";
import App from "./containers/App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import { createLogger } from "redux-logger";
import { searchComments, requestComments } from "./reducers";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const rootReducer = combineReducers({ searchComments, requestComments });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
