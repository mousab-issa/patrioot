import {
  START_API,
  SET_GENERAL_DATA,
  END_API
} from './types';

import apiMiddleware from '../../services/apiMiddleware';

export const setFCMTokenAction = (payload) => {
  return {
    type: SET_GENERAL_DATA,
    payload,
  };
};

export const setStartAPIAction = () => {
  return {
    type: START_API,
    payload: 'START'
  };
};

export const setEndAPIAction = () => {
  return {
    type: END_API,
    payload: 'END'
  };
};

export const GetGeneralData = (obj, AuthToken) => async (dispatch) => {
 

  apiMiddleware.getDataApi(AuthToken, obj)
    .then((response) => response.data)
    .then((result) => {
    
      if (result.success) {
   
        dispatch({
          type: VERIFICATION_USER_SUCCESS,
          payload: result.message,
        });
      }
      else {
        dispatch({
          type: LOGIN_USER_FAILED,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
  
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: 'Some thing Went Wrong !',
      });
    });
};

