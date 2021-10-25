import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filterReducer, newContactReducer, isLoading, entities, error } from './reducer';
import authReducer from './auth/auth-slice';
import inputsReducer from './inputs/inputs-slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'isLoggedIn'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: combineReducers({ isLoading, entities, error }),
  filter: filterReducer,
  newContact: newContactReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  inputs: inputsReducer,
});

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
// const persistedReducer = ;
// const defaultExportObject = { store, persistor };
// export default defaultExportObject;
