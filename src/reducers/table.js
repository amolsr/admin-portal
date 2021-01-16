import {
  SET_DATA,
  REMOVE_DATA,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = {
  column: [],
  data: [],
  editable: {},
  actions: [],
};

const tableReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        data: [action.payload.newProduct, ...state.data],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: state.data.map((data) =>
          data._id === action.payload.oldProduct._id
            ? action.payload.newProduct
            : data
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        data: state.data.filter(
          (data) => data._id !== action.payload.oldProduct._id
        ),
      };
    case REMOVE_DATA:
      return {
        ...state,
        column: [],
        data: [],
        editable: {},
        actions: [],
      };
    default:
      return state;
  }
};

export default tableReducer;
