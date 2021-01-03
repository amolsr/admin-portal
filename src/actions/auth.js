import { toast } from "react-toastify";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

// Login User
export const login = (pin) => (dispatch) => {
  fetch(process.env.REACT_APP_API_URL + "api/MPC/admin/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: pin }),
  })
    .then(async function (response) {
      console.log(response.status);
      if (!response.ok) {
        let data = await response.json();
        throw new Error(data.message);
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
      });
      toast.success(data.message);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      toast.error(err);
    });
};
