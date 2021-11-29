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


// export const loadCurrentItem = (item) => {
//     return {
//         type: actionTypes.LOAD_CURRENT_ITEM,
//         payload: item
//     }
// }