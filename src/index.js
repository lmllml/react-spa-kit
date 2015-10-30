require('es6-promise').polyfill();
import 'fetch-detector';
import 'fetch-polyfill';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route } from 'react-router';
import routeConfig from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';


import './styles/core.scss';


const target = document.getElementById('root');
const store = configureStore();

const history = createBrowserHistory();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history} routes={ routeConfig }>
        </Router>
    </Provider>
), target);