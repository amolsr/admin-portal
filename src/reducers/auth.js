import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {};

const alertReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default alertReducer;
