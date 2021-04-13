import { toast } from "react-toastify";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (set, type, details) => (dispatch) => {
  if(type==="form"){
    dispatch({
      type: SET_ALERT,
      payload: { set, type , form : details },
    });
  }
  if(type==="calculation"){
    console.log(details.platform)
    fetch( process.env.REACT_APP_API_URL +"api/users/admin/show/saved/title/data?company="+details.platform+"&email="+details.email+"&role=Admin&title="+ details.title , {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-auth": localStorage.getItem("token"),
      }
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
          type: SET_ALERT,
          payload: { set, type , calculation : {title: details.title, input: data.input, output: data.output} },
        });
      })
      .catch((err) => toast.error(err.message));
      var input = {
        "_id": "602d65e1d15fd65930ba1a46",
        "title": "pikachu",
        "category": "Appliances",
        "sellingPrice": 450,
        "gstOnProduct": 5,
        "productPriceWithoutGst": 220,
        "inwardShipping": 0.5,
        "packagingExpense": 8,
        "labour": 2,
        "storageFee": 2,
        "other": 2,
        "discountPercent": 10,
        "discountAmount": 0,
        "date": "02/18/2021"
    }
    var output = {
      "commissionFees": 8.1,
      "shippingFees": "67.62",
      "CS": "75.72",
      "gstOnCS": "4.84",
      "totalCharges": "80.56",
      "bankSettlement": 382.12,
      "gstClaim": 24.63,
      "gstPayable": 22.67,
      "totalGstPayable": -1.96,
      "tcs": 4.53,
      "profit": 147.62,
      "profitPercentage": 67.1
  }
      dispatch({
        type: SET_ALERT,
        payload: { set, type , calculation : {title: details.title ,input,output} },
      });
  }
};

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: {},
  });
};
