import { combineReducers } from 'redux';
import * as editor from './editor';

var stateToReducerMap = {
    text: editor,
};

var reducers = (() => {
    var map = {};
    Object.keys(stateToReducerMap).forEach(function (key) {
        var value = stateToReducerMap[key];
        map[key] = function (state, action) {
            var func = value.actionToReducerMap[action.type];
            if (func) {
                return func.apply(null, arguments)
            }

            if (state === undefined) {
                return value.initState;
            } else {
                return state;
            }
        }
    });
    return map;
})();

export default combineReducers(reducers);