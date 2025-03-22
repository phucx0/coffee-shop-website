import { configureStore, combineReducers} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import TabbarReducer from "./TabBarSlice"
import NotificationReducer from "./NotificationSlice"
import CartReducer from "./CartSlice"
import ItemsReducer from "./ItemSlice"
import OrderReducer from "./orderSlice"


const itemsPersistConfig = {
    key: "items",
    storage,
};

const cartPersistConfig = {
    key: "cart",
    storage,
};

const rootReducer = combineReducers({
    items: persistReducer(itemsPersistConfig, ItemsReducer),
    tabbar: TabbarReducer,
    notification: NotificationReducer,
    cart: persistReducer(cartPersistConfig, CartReducer),
    order: OrderReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["items", "cart"], // Persist các slice đã cấu hình riêng
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Tắt kiểm tra serializable
        }),
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;