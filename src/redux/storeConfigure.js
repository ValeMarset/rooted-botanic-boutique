import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartReducer";
import userReducer from "../redux/userReducer";
import productsReducer from "../redux/productsReducer";
import cartViewReducer from "../redux/cartViewReducer";
import loginViewReducer from "../redux/loginViewReducer";
import registerViewReducer from "../redux/registerViewReducer";
import navbarColorReducer from "../redux/navbarColorReducer";
import pageReducer from "./pageReducer";
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
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
  cartView: cartViewReducer,
  loginView: loginViewReducer,
  registerView: registerViewReducer,
  navbarColor: navbarColorReducer,
  modalView: pageReducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
