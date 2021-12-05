import * as actionTypes from './modal-types';

export const turnModalOn = () => {
    return {
        type: actionTypes.SET_AUTH_MODAL_STATE,
        payload: true
    }
}

export const turnModalOff = () => {
    return {
        type: actionTypes.SET_AUTH_MODAL_STATE,
        payload: false
    }
}