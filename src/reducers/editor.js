import * as actions from '../actions';

const editor = {
    [actions.CHANGE_TEXT]: (state = '', action) => action.text || state,
    'default': ''
};

export default editor;