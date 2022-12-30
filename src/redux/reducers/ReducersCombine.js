import { combineReducers } from "redux";
// import ProductReducer from "./ProductReducer";
import ProductReducer from "./ProductReducer";

//Here we are combining all the reducer which having different-different action


export const ReducersCombine = combineReducers({
    allProducts: ProductReducer,
})