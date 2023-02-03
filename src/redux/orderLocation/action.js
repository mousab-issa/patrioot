import {
  CustomOrder,
  CustomOrderDistance
} from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  CUSTOM_API_FAIL,
  CUSTOM_API_SUCCESS,
  DISTANCE_FAILED,
  DISTANCE_SUCCESS,
  END_API,
  SELECT_DETINATION_LOCATION,
  SELECT_ORDER_NOTE,
  SELECT_PICKUP_LOCATION,
  START_API,
  UPDATE_CUSTOM_API_STATUS
} from './types';
import Languages from '../../common/Languages';

export const setPickupLocationAction = (payload) => {
  return {
    type: SELECT_PICKUP_LOCATION,
    payload,
  };
};

export const setDestinationLocationAction = (payload) => {
  return {
    type: SELECT_DETINATION_LOCATION,
    payload,
  };
};

export const setOrderNoteAction = (payload) => {
  return {
    type: SELECT_ORDER_NOTE,
    payload,
  };
};

export const setStartAPIAction = () => {
  return {
    type: START_API,
    payload: 'START'
  };
};
export const updateCustomApiStatus = (payload) => {
  return {
    type: UPDATE_CUSTOM_API_STATUS,
    payload,
  };
};

export const setEndAPIAction = () => {
  return {
    type: END_API,
    payload: 'END'
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


export const PlaceCustomOrder = (obj, AuthToken) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, CustomOrder, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
      
        dispatch({
          type: CUSTOM_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: CUSTOM_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {

      dispatch({
        type: CUSTOM_API_FAIL,
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const GetLocationDistance = (obj, AuthToken) => async (dispatch) => {
  
  apiMiddleware.postAPIWithToken(obj, CustomOrderDistance, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
        dispatch({
          type: DISTANCE_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: DISTANCE_FAILED,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: DISTANCE_FAILED,
        payload: Languages.SomethingWentWrong,
      });
    });
};