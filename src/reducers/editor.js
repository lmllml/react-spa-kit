import * as actions from '../actions';

const editor = {
    [actions.CHANGE_TEXT]: (state = '', action) => action.text || state
};

export default editor;