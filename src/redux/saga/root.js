import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_REQUEST } from "../types/index";

import { getProduct } from "./productSaga";

function* rootSaga() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProduct);
}

export default rootSaga;
