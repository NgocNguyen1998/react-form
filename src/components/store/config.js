import { combineReducers,createStore } from "redux";
import {BaiTapForm} from './reducer'
const rootReducers = combineReducers({
    BaiTapForm,

   
})

export const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())