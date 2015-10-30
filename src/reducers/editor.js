import * as actions from '../actions';

export const initState='';

export const actionToReducerMap = {
    [actions.CHANGE_TEXT]: (state, action) => action.text || ''
};