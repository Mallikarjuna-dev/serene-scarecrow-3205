import * as types from "./actionTypes";

import axios from "axios";

export const getProducts = (url) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_DATA_REQUEST });
  return axios
    .get(`/${url}`)
    .then((r) => {
      dispatch({ type: types.GET_PRODUCTS_DATA_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_PRODUCTS_DATA_FAILURE, payload: e });
    });
};
