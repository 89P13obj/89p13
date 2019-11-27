import * as types from "./actionTypes";
import axios from "axios";

export function addCompany(companies, position) {
  return {
    type: types.ADD_COMPANY,
    payload: {
      companies,
      position
    }
  };
}

export function load(position) {
  return function(dispatch) {
    if (position < 10) return;

    const apiURL = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?listLimit=${position}&token=pk_000e2ae04d7945c6a83a4ff64cb35347`;
    axios.get(apiURL).then(response => {
      dispatch(addCompany(response.data, position));
    });
  };
}
