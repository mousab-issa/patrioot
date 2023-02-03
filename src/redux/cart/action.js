import { Checkout } from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  CHECKOUT_API_FAIL,
  CHECKOUT_API_SUCCESS,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  DELETE_FOOD,
  EDIT_DETAILS,
  INCREMENT_QUANTITY,
  UPDATE_API_STATUS,
  UPDATE_CURRENT_VENDOR,
  UPDATE_LOADING
} from './types';

export const deleteCart = (payload) => {
  return {
    type: DELETE_FOOD,
    payload,
  };
};

export const updateCurrentVendor = (payload) => {
  return {
    type: UPDATE_CURRENT_VENDOR,
    payload,
  };
};
export const ClearCart = (payload) => {
  return {
    type: CLEAR_CART,
    payload,
  };
};

export const IncremenntAction = (payload) => {
  return {
    type: INCREMENT_QUANTITY,
    payload,
  };
};
export const DecrementAction = (payload) => {
  return {
    type: DECREMENT_QUANTITY,
    payload,
  };
};
export const EditAction = (id, details) => {
  return {
    type: EDIT_DETAILS,
    id,
    details,
  };
};
export const setLoading = (payload) => {
  return {
    type: UPDATE_LOADING,
    payload,
  };
};
export const updateApiCallStatus = (payload) => {
  return {
    type: UPDATE_API_STATUS,
    payload,
  };
};
export const CallCheckOutApi = (obj, token) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, Checkout, token)
    .then((response) => response.data)
    .then((result) => {
   
      if (result.success) {
    
        dispatch({
          type: CHECKOUT_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: CHECKOUT_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: CHECKOUT_API_FAIL,
        payload: 'Some thing Went Wrong !' + err,
      });
    });
};
