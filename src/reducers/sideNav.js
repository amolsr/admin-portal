import { SELECT_NAV } from "../actions/types";
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_NAV:
      return [...state, payload];
    default:
      return state;
  }
}
