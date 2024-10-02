import { produce } from "immer";
import * as types from "../types";

const inititalState = {
  data: [],
  error: null,
};

const ProductReducer = produce((draf = inititalState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_REQUEST:
      draf.isLoading = true;
      draf.error = null;
      break;
    case types.GET_PRODUCT_SUCCESS:
      draf.isLoading = false;
      draf.error = null;
      draf.data = action.payload.data;
      break;
    case types.GET_PRODUCT_FAILED:
      draf.isLoading = false;
      draf.error = null;
      draf.data = [];
      break;
    default:
      return draf;
  }
});

export default ProductReducer;
