// NOTE: use this store variable to create a store.
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { Cartreducer } from "./CartReducer/CartReducer";
import { FillterReducer } from "./FillterReducer/FillterReducer";
import { WishListReducer } from "./WishListReducer/WishListReducer" 


const rootReduser=combineReducers({
    Cartreducer:Cartreducer,
    WishList:WishListReducer,
    Fillters:FillterReducer,
  })

const composeEnhaneser=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})|| compose
export const  store =legacy_createStore(rootReduser,composeEnhaneser(applyMiddleware(thunk)))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

