const initialState = {
    cartItems: []
}

const UPDATE_CART_DATA = "UPDATE_CART_DATA"

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_CART_DATA:
            return Object.assign({}, state, {cartItems: action.payload})
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
