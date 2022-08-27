//Write the ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

const login = (payload, cc) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.LOGIN_REQUEST });
  if (!cc) {
    return axios({
      method: "post",
      url: "/api/login",
      baseURL: "https://reqres.in",
      data: payload,
    })
      .then((r) =>
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: r.data,
        })
      )
      .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE });
      });
  } else {
    dispatch({ type: types.LOGIN_REQUEST });
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: payload,
    });
  }
};

const signup = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.SIGNUP_REQUEST });
  if (payload) {
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload,
    });
  } else {
    dispatch({ type: types.SIGNUP_FAILURE });
  }
};
export { login, signup };
