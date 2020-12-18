import { SET_ALERT } from "../actions/types";

const initialState = {
  set: false,
  form: {
    set: false,
  },
};

const alertReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
