import {
  SET_TOKEN,
  PRODUCT_DETAILS,
  LOGOUT,
  SET_ADPRODUCT,
} from "./actionTypes";

const initialState = {
  token: "",
  product_details: {
    name: "",
    client: "",
    id: "",
    address: "",
    dhl: "",
    order: 0,
  },
  product: {},
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case PRODUCT_DETAILS:
      return { ...state, product_details: { ...action.payload } };
    case SET_ADPRODUCT:
      return { ...state, product: { ...action.payload } };
    case LOGOUT:
      return {
        ...state,
        token: "",
        product_details: {
          name: "",
          client: "",
          id: "",
          address: "",
          dhl: "",
          order: 0,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
