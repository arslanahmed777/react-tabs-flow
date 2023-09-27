import { configureStore } from '@reduxjs/toolkit'
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import TabsSlice from './Redux/TabsSlice/TabsSlice'

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['userAuth', 'socket', 'messenger', 'cart'] //.... iclude those reducers that you dont want to persist
// }

const rootReducer = combineReducers({
    tabs: TabsSlice,

})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer:   persistedReducer
    reducer: rootReducer
})

// export const persistor = persistStore(store)