import * as actionTypes from './user-types';

const INITIAL_USER_STATE =  null;

const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_USER_TO_STATE :
            return {...action.payload}
        case actionTypes.REMOVE_USER_FROM_STATE:
            return null
        case actionTypes.ADD_RECORD_TO_FAVORITES: 
            return {...state, favorites: action.payload}    
        default: 
            return state;    
    }
}

export default userReducer;