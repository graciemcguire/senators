import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './userReducer'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.navigator.userAgent.includes('Chrome') ?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  ),
);

export default store;
