import {
  ADD_MESSAGES,
  ADD_USER_MESSAGE,
  CLEAR_MESSAGES,
  SET_ORDER_ID,
  SET_NOTIFICATION_DATA,
  SET_SELECTED_RIDER,
  RATING_API_FAIL,
  RATING_API_SUCCESS,
  UPDATE_RATING_LOADING,
  ORDER_COMPLETE_API_SUCCESS,
  ORDER_COMPLETE_API_FAIL,
  SET_ORDER_STATUS,
  SET_TRACKING_LOCATION,
  CANCEL_ORDER_API_FAIL,
  CANCEL_ORDER_API_SUCCESSFULL
} from './types';

import apiMiddleware from '../../services/apiMiddleware';
import {
  rating,
  CancelOrder,
  OrderCompleteCustomer
} from '../../config/API_EndPoints';

export const addUserMessageAction = (payload) => {
  return {
    type: ADD_USER_MESSAGE,
    payload,
  };
};

export const addAllMessagesAction = (payload) => {
  return {
    type: ADD_MESSAGES,
    payload,
  };
};

export const clearMessagesAction = (payload) => {
  return {
    type: CLEAR_MESSAGES,
    payload,
  };
};

export const setOrderIDAction = (payload) => {
  return {
    type: SET_ORDER_ID,
    payload,
  };
};

export const setNotificationDataAction = (payload) => {
  return {
    type: SET_NOTIFICATION_DATA,
    payload,
  };
};

export const setSelectedRiderAction = (payload) => {
  return {
    type: SET_SELECTED_RIDER,
    payload,
  };
};

export const startRatingLoading = (payload) => {
  return {
    type: UPDATE_RATING_LOADING,
    payload,
  };
};
export const setTrackingLocationAction = (payload) => {
  return {
    type: SET_TRACKING_LOCATION,
    payload,
  };
};


export const setOrderStatusAction = (payload) => {
  return {
    type: SET_ORDER_STATUS,
    payload,
  };
};

export const AddUserMessage = (obj) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  User.loginUser(obj)
    .then((response) => response.data)
    .then((result) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {

      dispatch({
        type: LOGIN_USER_FAILED,
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const CallRatingApi = (obj, token) => async (dispatch) => {
  apiMiddleware.postAPIWithToken(obj, rating, token)
    .then((response) => response.data)
    .then((result) => {

      if (result.success) {

        dispatch({
          type: RATING_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: RATING_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      dispatch({
        type: RATING_API_FAIL,
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const CallOrderCompleteApi = (obj, token) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, OrderCompleteCustomer, token)
    .then((response) => response.data)
    .then((result) => {

      if (result.success) {

        dispatch({
          type: ORDER_COMPLETE_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: ORDER_COMPLETE_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {

      dispatch({
        type: ORDER_COMPLETE_API_FAIL,
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const CancleOrderAction = (obj, AuthToken) => async (dispatch) => {
  apiMiddleware.postAPIWithToken(obj, CancelOrder, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      if (result.success) {

        dispatch({
          type: CANCEL_ORDER_API_SUCCESSFULL,
          payload: result,
        });
      }
      else {
        dispatch({
          type: CANCEL_ORDER_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {

      dispatch({
        type: CANCEL_ORDER_API_FAIL,
        payload: Languages.SomethingWentWrong,
      });
    });
};