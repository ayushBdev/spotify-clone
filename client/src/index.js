import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./index.css";

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import store from "./component/#Redux/Store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);