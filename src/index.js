import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router } from 'react-router'; 
import { routeConfig } from './routes';

var {
    Component
} = React;

const target = document.getElementById('root');
const store = configureStore();

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router routes={routeConfig}/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, target);