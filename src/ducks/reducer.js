import axios from "axios";

const initialState = {
    cart: [],
    prices: [],
    total: 0
}

const UPDATE_CART_DATA = "UPDATE_CART_DATA"
const DELETE_ITEM_CART = "DELETE_ITEM_CART"
const GET_ITEM_PRICES = "GET_ITEM_PRICES"

export default function reducer(state = initialState, action){
    let { payload } = action;
    switch(action.type){
        case UPDATE_CART_DATA:
        console.log("state log:", initialState)
            return Object.assign({}, state, {cart: payload})
        case DELETE_ITEM_CART:
            return Object.assign({}, state, {cart: payload})
        case GET_ITEM_PRICES:
            return Object.assign({}, state, {prices: payload});
        
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

export function getPrices(){
    let prices = axios.get('/product/prices').then( res => {
        return res.data;
        })
    return{
        type: GET_ITEM_PRICES,
        payload: prices
    }
}

export function getTotal(total){
    return{

    }
}

export function actionDeleteCart(newCart){
    console.log("we got here")
    return{
        type: DELETE_ITEM_CART,
        payload: newCart
    }
}
