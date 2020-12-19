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
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: SET_DATA,
        payload: { column, data },
      });
    });
};
export const removeData = () => (dispatch) => {
  dispatch({
    type: REMOVE_DATA,
    payload: {},
  });
};
