import { combineReducers, configureStore } from "@reduxjs/toolkit";// defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import CounterSlice from "./CounterSlice";
import ListTimersSlice from "./ListTimersSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    version:1
};

const rootReducer = combineReducers({
  // tus reducers van aquí
    counter: CounterSlice,
    ListTimers: ListTimersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);