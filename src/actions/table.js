import { toast } from "react-toastify";
import {
  addCommission,
  updateCommission,
  deleteCommission,
} from "./commission";
import { addShipping, updateShipping } from "./shipping";
import { setAlert } from "./alert";
import { SET_DATA, REMOVE_DATA } from "./types";
import { addFixedFees, deleteFixedFees, updateFixedFees } from "./fixedfees";

export const setData = (platform, type) => (dispatch) => {
  let column = [];
  let editable = {};
  let actions = [];
  let url = "";
  console.log(platform + " " + type);
  if (type === "Commission") {
    column = [
      { title: "Category", field: "category", editable: "onAdd" },
      { title: "Commission", field: "commission" },
    ];
    let form = {
      set: true,
      type: "Add",
      page: type,
      fields: ["category", "commission"],
      onSubmit: addCommission,
    };

    actions = [
      {
        icon: "add",
        tooltip: "Add Commission",
        isFreeAction: true,
        onClick: (event) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              dispatch(setAlert(true, form));
              resolve();
            }, 1000);
          }),
      },
    ];
    editable = {
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(updateCommission(oldData, newData, platform));
            resolve();
          }, 1000);
        }),
      onRowDelete: (oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(deleteCommission(oldData, platform));
            resolve();
          }, 1000);
        }),
    };
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/commission/getAll";
  }
  if (type === "Shipping") {
    if (platform === "clubFactory") {
      column = [
        { title: "Type", field: "type", editable: "onAdd" },
        { title: "Region", field: "region", editable: "onAdd" },
        { title: "Min", field: "min" },
        { title: "Max", field: "max" },
      ];
      let form = {
        set: true,
        type: "Add",
        page: type,
        fields: ["type", "field", "value"],
        onSubmit: addShipping,
      };
      actions = [
        {
          icon: "add",
          tooltip: "Add Shipping",
          isFreeAction: true,
          onClick: (event) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(setAlert(true, form));
                resolve();
              }, 1000);
            }),
        },
      ];
    }
    if (platform === "flipkart") {
      column = [
        { title: "Type", field: "type", editable: "onAdd" },
        { title: "Local", field: "local" },
        { title: "Zonal", field: "zonal" },
        { title: "National", field: "national" },
      ];
      let form = {
        set: true,
        type: "Add",
        page: type,
        fields: ["type", "field", "value"],
        onSubmit: addShipping,
      };
      actions = [
        {
          icon: "add",
          tooltip: "Add Shipping",
          isFreeAction: true,
          onClick: (event) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(setAlert(true, form));
                resolve();
              }, 1000);
            }),
        },
      ];
    }
    editable = {
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(updateShipping(oldData, newData, platform));
            resolve();
          }, 1000);
        }),
    };
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/outwardShipping/getAll";
  }
  if (type === "Fixed Fees") {
    column = [
      { title: "Min", field: "minSp", editable: "onAdd" },
      { title: "Max", field: "maxSp", editable: "onAdd" },
      { title: "Range", field: "rate" },
    ];
    url =
      process.env.REACT_APP_API_URL +
      "api/MPC/" +
      platform +
      "/admin/fixedFees/getAll";
    let form = {
      set: true,
      type: "Add",
      page: type,
      fields: ["minSp", "rate"],
      onSubmit: addFixedFees,
    };
    actions = [
      {
        icon: "add",
        tooltip: "Add Fixed Fees",
        isFreeAction: true,
        onClick: (event) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              dispatch(setAlert(true, form));
              resolve();
            }, 1000);
          }),
      },
    ];
    editable = {
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(updateFixedFees(oldData, newData, platform));
            resolve();
          }, 1000);
        }),
      onRowDelete: (oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(deleteFixedFees(oldData, platform));
            resolve();
          }, 1000);
        }),
    };
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
  console.log(url);
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
        payload: { column, data, editable, actions },
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
