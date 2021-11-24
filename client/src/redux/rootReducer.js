import { combineReducers } from 'redux';
import catalogReducer from './catalog/catalog-reducers';

const rootReducer = combineReducers({
    catalog: catalogReducer
});

export default rootReducer;