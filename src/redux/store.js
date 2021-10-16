// import { kapustaReducer } from './kapusta';
import { authReducer, kapustaReducer, session } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    session: persistReducer(authPersistConfig, session),
    auth: authReducer,
    kapusta: kapustaReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
