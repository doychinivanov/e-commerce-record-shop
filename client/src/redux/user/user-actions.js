import * as actionTypes from './user-types';

export const addUserToState = (userData) => {
    return {
        type: actionTypes.ADD_TO_USER_TO_STATE,
        payload: userData
    }
}

export const removeUserFromState = () => {
    return {
        type: actionTypes.REMOVE_USER_FROM_STATE
    }
}

export const updateUserFavorites = (updatedFavorites) => {
    return {
        type: actionTypes.UPDATE_USER_FAVORITES,
        payload: updatedFavorites
    }
}

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CARD,
        payload: {
            _id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CARD,
        payload: {
            _id: itemId
        }
    }
}

export const adjustQty = (itemId, newQty) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            _id: itemId,
            qty: newQty
        }
    }
}