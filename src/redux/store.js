import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; // imports from redux-persist
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authSlice from './admin/auth/authSlice';

const rootReducer = combineReducers({
    auth: authSlice
});

const persistConfig = {
    // configuration object for redux-persist
    key: 'root',
    storage // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
