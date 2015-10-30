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
            if (!func) {
                func = reducer['default'];
            }
            return func.apply(null, arguments);
        }
    });
    return map;
})();

console.log(reducers);

export default combineReducers(reducers);