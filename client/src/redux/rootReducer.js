import { combineReducers } from 'redux';
import userReducer from './user/user-reducers';
import authModalReducer from './authModal/modal-reducers';

const rootReducer = combineReducers({
    user: userReducer,
    authModal: authModalReducer
});

export default rootReducer;