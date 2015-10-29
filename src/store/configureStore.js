import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore (initialState) {
    return applyMiddleware(
        thunk
    )(createStore)(
        rootReducer, initialState
    );
}