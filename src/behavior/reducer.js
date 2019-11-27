import * as types from "./actionTypes";

const initialState = {
  companies: {},
  position: 10
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_COMPANY: {
      return {
        position: payload.position,
        companies: payload.companies
      };
    }

    default:
      return state;
  }
}
