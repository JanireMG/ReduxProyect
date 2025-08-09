import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";
import Home from './components/home';
import Results from './components/results';

import "./style/main.scss";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/results' component={Results}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
