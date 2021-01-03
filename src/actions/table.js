import { toast } from "react-toastify";
import { SET_DATA, REMOVE_DATA } from "./types";

export const setData = (platform, type) => (dispatch) => {
  let column = [];
  let url = "";
  console.log(platform + " " + type);
  if (type === "Commission") {
    column = [
      { title: "Category", field: "category" },
      { title: "Commission", field: "commission" },
    ];
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/commission/getAll";
  }
  fetch(url)
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
        type: SET_DATA,
        payload: { column, data },
      });
    })
    .catch((err) => toast.error(err.message));
};
export const removeData = () => (dispatch) => {
  dispatch({
    type: REMOVE_DATA,
    payload: {},
  });
};
