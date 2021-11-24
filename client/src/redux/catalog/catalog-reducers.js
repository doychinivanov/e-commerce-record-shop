import * as actionTypes from './catalog-types';

const INITIAL_STATE = {
    products: [],
    currentItem: null
}

const catalogReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CATALOG :
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default: 
            return state;    
    }
}

export default catalogReducer;