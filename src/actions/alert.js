import { SET_ALERT } from "./types";

export const setAlert = (set, title = "", form = {}) => (dispatch) => {
  console.log(process.env);
  dispatch({
    type: SET_ALERT,
    payload: { set, title, form },
  });
};
