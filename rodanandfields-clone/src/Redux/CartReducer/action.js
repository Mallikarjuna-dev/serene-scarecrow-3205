import * as ActionTypes from "./actionTypes"
import axios from "axios";
export const addToCartRequest = () => {
    return {
        type: ActionTypes.ADD_TO_CART_REQUEST
    }
}
export const addToCartSuccess = (data) => {
    return {
        type: ActionTypes.ADD_TO_CART_SUCCESS,
        payload:data
    }
}
export const addToCartFailure = () => {
    return {
        type: ActionTypes.ADD_TO_CART_FAILURE
    }
}
export const getFromCartRequest = () => {
    return {
        type: ActionTypes.GET_FROM_CART_REQUEST
    }
}
export const getFromCartSuccess = (data) => {
    return {
        type: ActionTypes.GET_FROM_CART_SUCCESS,
        payload:data
    }
}
export const getFromCartFailure = () => {
    return {
        type: ActionTypes.GET_FROM_CART_FAILURE
    }
}
export const deleteFromCartRequest = () => {
    return {
        type: ActionTypes.DELETE_FROM_CART_REQUEST
    }
}
export const deleteFromCartSuccess = (data) => {
    return {
        type: ActionTypes.DELETE_FROM_CART_SUCCESS,
        payload:data
    }
}
export const deleteFromCartFailure = () => {
    return {
        type: ActionTypes.DELETE_FROM_CART_FAILURE
    }
}

export const addToCart = (product)=>(dispatch,getState) =>{ 
    const ActionRequest = addToCartRequest(); 
    dispatch(ActionRequest);
    axios.post("/cart", product).then(({ data}) => { 
        const SuccessAction = addToCartSuccess(data);
        dispatch(SuccessAction)
    })
        
    .catch((err)=> {
        const FailureAction = addToCartFailure()
        dispatch(FailureAction)
    })
}
export const getFromCart = ()=>(dispatch,getState) =>{ 
    const ActionRequest = getFromCartRequest(); 
    dispatch(ActionRequest);
    axios.get('/cart').then(({ data}) => { 
        console.log(data)
        const SuccessAction = getFromCartSuccess(data)
        dispatch(SuccessAction)
    })
        
    .catch((err)=> {
        const FailureAction = getFromCartFailure()
        dispatch(FailureAction)
    })
}
export const deleteFromCart = (id)=>(dispatch,getState) =>{ 
    const ActionRequest = deleteFromCartRequest(); 
    dispatch(ActionRequest);
    axios.delete(`/cart/${id}`).then(({ data}) => { 
        console.log(data)
        const SuccessAction = deleteFromCartSuccess(data)
        dispatch(SuccessAction)
    }).then(() => { 
        dispatch(getFromCart())
    })
        
    .catch((err)=> {
        const FailureAction = deleteFromCartFailure()
        dispatch(FailureAction)
    })
}
   