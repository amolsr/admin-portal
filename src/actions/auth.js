import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Login User
export const login = (pin) => async (dispatch) => {
  fetch(process.env.REACT_APP_API_URL + "/api/MPC/admin/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: pin }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "loggedIn") {
        dispatch({
          type: LOGIN_SUCCESS,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    });
};
