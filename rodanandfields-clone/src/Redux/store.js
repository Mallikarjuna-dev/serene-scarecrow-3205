import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./AuthReducer/reducer";
import { CartReducer } from "./CartReducer/reducer";
const rootReducer = combineReducers({
    auth: reducer,
    cart: CartReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
