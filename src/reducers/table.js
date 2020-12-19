import { SET_DATA, REMOVE_DATA } from "../actions/types";

const initialState = {
  column: [],
  data: [],
};

const tableReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_DATA:
      return {
        ...state,
        column: [],
        data: [],
      };
    default:
      return state;
  }
};

export default tableReducer;
