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
        console.log("state log:", initialState)
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

// issue with front end neediong to be refreshed in prder to show item that was selected to be deleted 


export function actionDeleteCart(id){
    console.log("we got here :)")
    let updatedCart = axios.delete(`/product/cart?id=${id}`).then( res => {
            console.log("res.data:", res.data)
            return res.data
        }
    )
    return{
        type: DELETE_ITEM_CART,
        payload: updatedCart
    }
}
