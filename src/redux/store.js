import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './user-slice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;