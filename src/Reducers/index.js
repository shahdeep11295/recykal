import {combineReducers} from "redux";
import productdata from "./productdata.reducer";
import loader from "./loader.reducer";

export default combineReducers({
    productdata,
    loader,
})