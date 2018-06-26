import axios from "axios";

const initialState = {
    cart: []
}

const UPDATE_CART_DATA = "UPDATE_CART_DATA"
const DELETE_ITEM_CART = "DELETE_ITEM_CART"

export default function reducer(state = initialState, action){
    let { payload } = action;
    switch(action.type){
        case UPDATE_CART_DATA:
            return Object.assign({}, state, {cart: payload})
        case DELETE_ITEM_CART:
            return Object.assign({}, state, {cart: payload})
        default:
            return state
    }
}

export function actionCartChange(items){
    return{
        type: UPDATE_CART_DATA,
        payload: items
    }
}

export function actionDeleteCart(newCart){
    console.log("fired")
    return{
        type: DELETE_ITEM_CART,
        payload: newCart
    }
}


