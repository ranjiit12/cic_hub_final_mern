import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers'; 
// import Routes from './routes';


import App from './App';
// css
import "./assests/css/bootstrap.min.css";
import "./assests/css/style.css";
import "./assests/css/index.css";
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

