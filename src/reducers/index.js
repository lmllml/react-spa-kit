import { combineReducers } from 'redux';
import editor from './editor';

var stateToReducerMap = {
    text: editor
};

var reducers = (() => {
    var map = {};
    Object.keys(stateToReducerMap).forEach(function (key) {
        var reducer = stateToReducerMap[key];
        map[key] = function (state, action) {
            var func = reducer[action.type];
            return func && func.apply(null, arguments) || reducer['default'];
        }
    });
    return map;
})();


export default combineReducers(reducers);