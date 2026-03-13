import loginReducer from "./login";

import { combineReducers } from "redux";


const allReducers = combineReducers({
    loginReducer,
    // them nhieu reducer o day     
})

export default allReducers;