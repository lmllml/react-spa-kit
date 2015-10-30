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
            var type = action.type || 'default';
            var func = reducer[type];
            return func.apply(null, arguments);
        }
    });
    return map;
})();


export default combineReducers(reducers);