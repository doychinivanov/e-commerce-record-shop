import * as actionTypes from './modal-types';

const INITIAL_USER_STATE = {'isOn': false};

const authModalReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_MODAL_STATE: 
        return {
            ...state,
            'isOn': action.payload
        }
        default:
            return state;
    }
}

export default authModalReducer;
