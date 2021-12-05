import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducers';
import authModalReducer from './authModal/modal-reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}


const rootReducer = combineReducers({
    user: userReducer,
    authModal: authModalReducer
});

export default persistReducer(persistConfig, rootReducer);