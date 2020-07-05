import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers";

import HomePage from "./pages/Home/HomePage";
import Users from "./pages/Users/Users";
import PageArticle from "./pages/PageArticle/PageArticle"
import PageUser from "./pages/PageUser/PageUser"

export const ACTION_DATA_POST = "ACTION_DATA_POSTER";
export const ACTION_DATA_USER = "ACTION_DATA_USER";
export const ACTION_DATA_COMMENT = "ACTION_DATA_COMMENT";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={Users} />
            <Route path="/articles/:articleId" component={PageArticle} />
            <Route path="/user/:userId" component={PageUser} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
