import loginReducer from "./login";
import scoreReducer from "./score"
import { combineReducers } from "redux";


const allReducers = combineReducers({
    loginReducer, scoreReducer
    // them nhieu reducer o day     
})

export default allReducers;