import { toast } from "react-toastify";
import { ADD_PRODUCT, UPDATE_PRODUCT } from "./types";

export const addShipping = (newProduct, platform) => (dispatch) => {
  fetch(
    process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/outwardShipping/addNew",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-auth": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        type: "additionalOutwardShipping",
        field: "kerelaMax",
        value: 76.32,
      }),
    }
  )
    .then(async function (response) {
      if (!response.ok) {
        let data = await response.json();
        throw new Error(data.message);
      }
      return response.json();
    })
    .then((data) => {
      toast.success(data.message);
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          newProduct,
        },
      });
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const updateShipping = (oldProduct, newProduct, platform) => (
  dispatch
) => {
  fetch(
    process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/outwardShipping/update",
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "x-auth": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        type: "additionalOutwardShipping",
        field: "kerelaMax",
        newValue: 0,
      }),
    }
  )
    .then(async function (response) {
      if (!response.ok) {
        let data = await response.json();
        throw new Error(data.message);
      }
      return response.json();
    })
    .then((data) => {
      toast.success(data.message);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: {
          newProduct,
          oldProduct,
        },
      });
    })
    .catch((err) => {
      toast.error(err.message);
    });
  console.log(JSON.stringify(oldProduct) + " " + JSON.stringify(newProduct));
};
