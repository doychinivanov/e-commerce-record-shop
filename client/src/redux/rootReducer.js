import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducers';
import authModalReducer from './authModal/modal-reducers';
import themeReducer from './theme/theme-reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'mode']
}


const rootReducer = combineReducers({
    user: userReducer,
    authModal: authModalReducer,
    mode: themeReducer
});

export default persistReducer(persistConfig, rootReducer);