import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import combined from "./reducers/index";
import createLogger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import App from './components/Main';
import AsyncApp from './containers/AsyncApp';
let store = createStore(
    combined,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
    )

);
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path='/' component={App}/>
          <Route path='/async' component={AsyncApp}/>
      </Router>

  </Provider>
  , document.getElementById('app'));
