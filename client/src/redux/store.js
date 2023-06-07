import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userRedux from "./userRedux";
import cartRedux from "./cartRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 2,
  storage,
};

const combinedReducer = combineReducers({pizzaUser:userRedux, pizzaCart:cartRedux})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
