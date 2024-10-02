import { put, call } from "redux-saga/effects";
import {
  getProductSuccess,
  getProductFailed,
} from "../actions/productActions";

import ApiClient from "../../service/productService";

export function* getProduct(action) {
  try {
    const response = yield call(ApiClient.getListProduct, action.params);
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductFailed(error));
  }
}


