
import { legacy_createStore, applyMiddleware ,combineReducers,compose} from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {reducer as AppReducer} from "./AppReducer/reducer"
import { reducer as CartReducer} from "./CartReducer/reducer";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer =combineReducers({AppReducer,AuthReducer,CartReducer})

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export { store };
