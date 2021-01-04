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
  if (type === "Shipping") {
    if (platform === "ClubFactory") {
      column = [
        { title: "Type", field: "type" },
        { title: "Region", field: "region" },
        { title: "Min", field: "min" },
        { title: "Max", field: "max" },
      ];
    }
    if (platform === "Flipkart") {
      column = [
        { title: "Type", field: "type" },
        { title: "Local", field: "local" },
        { title: "Zonal", field: "zonal" },
        { title: "National", field: "national" },
      ];
    }

    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/outwardShipping/getAll";
  }
  if (type === "Fixed Fees") {
    column = [
      { title: "Min", field: "minSp" },
      { title: "Max", field: "maxSp" },
      { title: "Range", field: "rate" },
    ];
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/fixedFees/getAll";
  }
  if (type === "Collection Fees") {
    column = [
      { title: "Min", field: "minSp" },
      { title: "Max", field: "maxSp" },
      { title: "Post Paid %", field: "postPaidPercentage" },
      { title: "Post Paid \u20B9", field: "postPaidRuppee" },
      { title: "Pre Paid %", field: "prePaidPercentage" },
      { title: "Pre Paid \u20B9", field: "prePaidRuppee" },
    ];
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/collectionFees/getAll";
  }
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-auth": localStorage.getItem("token"),
    },
  })
    .then(async function (response) {
      if (!response.ok && parseInt(response.status) !== 401) {
        let data = await response.json();
        throw new Error(data.message);
      }
      if (parseInt(response.status) === 401) {
        localStorage.removeItem("token");
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
