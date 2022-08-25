
import *as types from "./actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  userdata: [{ email: "admin", password: "admin" },]
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        userdata: [...payload],
      };
    case types.SIGNUP_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };
