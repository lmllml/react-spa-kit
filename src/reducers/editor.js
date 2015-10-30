import * as actions from '../actions';

const editor = {
    [actions.CHANGE_TEXT]: (state = '', action) => action.text || state,
    'default': (state='', action) => state
};

export default editor;