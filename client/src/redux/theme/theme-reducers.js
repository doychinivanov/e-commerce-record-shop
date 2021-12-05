import * as actionTypes from './theme-types';

const INITIAL_USER_STATE = { mode: 'light' };

const themeReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            }
        default:
            return state;
    }
}

export default themeReducer;