import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { signinReducer } from "./reducer";

const finalReducer = combineReducers({
    signin:signinReducer
})
const store = createStore(
    finalReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;
