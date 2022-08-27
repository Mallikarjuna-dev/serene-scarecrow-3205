import * as ActionTypes from "./actionTypes"

const initState = {
    loading: false,
    cart: [],
    error:false
}

export const CartReducer = (state = initState, { type, payload }) => { 
    switch (type) { 
        case ActionTypes.ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading:true
            }
        case ActionTypes.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart:[...state.cart,payload]
            }
        case ActionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:true
            }
        case ActionTypes.GET_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.GET_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart:[...payload]
            }
        case ActionTypes.GET_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:true
            }
        default:
            return state;
    }
}