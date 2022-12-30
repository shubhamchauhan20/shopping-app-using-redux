import { ActionTypes } from "../constants/ActionTypes";

//Here we are assignning different action which are goind to perform


export function setProducts (products) {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export function selectedProducts (product) {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};