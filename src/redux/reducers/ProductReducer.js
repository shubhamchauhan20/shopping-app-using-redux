import {ActionTypes}  from "../constants/ActionTypes";

//Here we are creating Reducer of different action
const initalState = {
    products: [
        {
            id:1,
            title: "Dipesh",
            category: "programmer"
        }
    ]
};


export default function ProductReducer(state=(initalState), { type, payload}) {
    switch (type) {
        case  ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
};
