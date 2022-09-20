import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './persistconfig';

// List of redux-persist actions to be ignored
// for serializableCheck on redux toolkit middleware serializableCheck
const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions,
      },
    });
  },
  // do not allow redux devtools in production environment
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// ReturnType<> - will return the return type of the store.getState method
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
