import { combineReducers } from "redux";
import fetchReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    product: fetchReducer,
    categorys: categoriesReducer,
    carts: cartReducer
});