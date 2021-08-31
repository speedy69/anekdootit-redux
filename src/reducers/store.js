import { createStore, combineReducers, applyMiddleware } from "redux";
import anecdoteReducer from './anecdoteReducer'
import notificationReduser from "./notificationReduser";
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from "./filterReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    notification: notificationReduser,
    filter: filterReducer,
    anecdotes: anecdoteReducer     
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))