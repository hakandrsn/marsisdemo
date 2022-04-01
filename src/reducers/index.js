import { combineReducers } from "redux";
import fetchReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
    product: fetchReducer,
    categorys: categoriesReducer
});