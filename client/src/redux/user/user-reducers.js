import * as actionTypes from './user-types';

const INITIAL_USER_STATE = null;

const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_USER_TO_STATE:
            return { ...action.payload }
        case actionTypes.REMOVE_USER_FROM_STATE:
            return null
        case actionTypes.UPDATE_USER_FAVORITES:
            return { ...state, favorites: action.payload }
        case actionTypes.ADD_ITEM_TO_STATE_CART:
            const isInCart = state?.cart.find(x => x._id === action.payload._id ? true : false);
                
            return {
                ...state,
                cart: isInCart 
                ? state.cart.map(item => item._id === action.payload._id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item) 
                : [...state.cart, action.payload]
            };
        case actionTypes.ADD_CART_STATE:
            return {
                ...state,
                cart: action.payload
            }    
        case actionTypes.REMOVE_FROM_CARD:
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload._id)
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload._id ? {...item, quantity: action.payload.qty} : item)
            }    
        default:
            return state;
    }
}

export default userReducer;