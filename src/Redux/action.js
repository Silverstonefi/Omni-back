import {
  SET_TOKEN,
  PRODUCT_DETAILS,
  LOGOUT,
  SET_METHOD,
  SET_ADPRODUCT,
} from "./actionTypes";

export const setMethod = (method) => ({
  type: SET_METHOD,
  payload: method,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setProductDetails = (details) => ({
  type: PRODUCT_DETAILS,
  payload: details,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setAdProduct = (product) => ({
  type: SET_ADPRODUCT,
  payload: product,
});
