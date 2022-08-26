import * as types from "./actionTypes";

import axios from "axios";

export const getProducts =()=>(dispatch)=>{
        dispatch({type:types.GET_PRODUCTS_DATA_REQUEST})
        return axios.get("/best-sellers")
        .then((r)=>{dispatch({type:types.GET_PRODUCTS_DATA_SUCCESS,payload:r.data})})
        .catch((e)=>{dispatch({type:types.GET_PRODUCTS_DATA_FAILURE,payload:e})})
}