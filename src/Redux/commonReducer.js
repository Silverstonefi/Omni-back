import { SET_METHOD } from "./actionTypes";

const initial_state = {
  paymentMethod: {
    method: "",
    amt: 0,
  },
};

const commonReducer = (state = initial_state, action = {}) => {
  switch (action.type) {
    case SET_METHOD:
      return { ...state, paymentMethod: { ...action.payload } };
    default:
      return state;
  }
};

export default commonReducer;
