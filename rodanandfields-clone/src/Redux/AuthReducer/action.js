//Write the ActionCreator functions here
import *as types from "./actionTypes";
import axios from "axios";


const login = (payload) => (dispatch) => {

    dispatch({ type: types.LOGIN_REQUEST });

    return axios({
        method: "post",
        url: "/api/login",
        baseURL: "https://reqres.in",

        data: payload,
    })
        .then((r) => dispatch({
            type: types.LOGIN_SUCCESS,
            payload: r.data
        }))
        .catch((e) => dispatch({
            type: types.LOGIN_FAILURE
        }));


}


const signup = (payload) => (dispatch) => {
    dispatch({ type: types.SIGNUP_REQUEST })
    if (payload) {
        dispatch({
            type: types.SIGNUP_SUCCESS,
            payload
        })
    } else {
        dispatch({ type: types.SIGNUP_FAILURE })
    }

}
export { login, signup }