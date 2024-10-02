import * as types from '../types' ;

export const getProductRequest = () => {
  return {
    type: types.GET_PRODUCT_REQUEST
  };
};

export const getProductSuccess = (payload) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload,
  };
};

export const getProductFailed = (error) => {
  return {
    type: types.GET_PRODUCT_FAILED,
    error,
  };
};
