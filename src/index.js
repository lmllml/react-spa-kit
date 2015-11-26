import './polyfill.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootRouter from './routes';


import './styles/core.scss';


const target = document.getElementById('root');
const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <RootRouter/>
    </Provider>
), target);