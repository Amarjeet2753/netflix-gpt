import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


import { rootReducer } from "./rootReducer";


import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key :'root',
    storage
}
const  persistedReducer =persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,applyMiddleware(thunk))

export const persistor  = persistStore(store)


export default store