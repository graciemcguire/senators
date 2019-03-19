import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {BrowserRouter} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
//
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// import {reducer} from './Redux/reducer'

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(

  <Provider >
    <App />
  </Provider>

  , document.getElementById('root'));
