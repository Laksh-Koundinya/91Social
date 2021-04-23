import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import  reducer  from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"


const rootreducer = combineReducers({details:reducer});


const store = createStore(rootreducer,
    composeWithDevTools(applyMiddleware(thunk)))
    export default store