import * as actionTypes from './catalog-types';

export const addToCatalog = (itemArray) => {
    return {
        type: actionTypes.ADD_TO_CATALOG,
        payload: itemArray
    }
}


export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}