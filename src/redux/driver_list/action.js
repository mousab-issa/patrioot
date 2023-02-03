import {
  AssignOrder, CancelOrder, SearchDriver
} from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  ACCEPT_ORDER_API_FAIL,
  ACCEPT_ORDER_API_SUCCESSFULL,
  CANCEL_ORDER_API_FAIL,
  CANCEL_ORDER_API_SUCCESSFULL,
  DRIVER_API_FAIL,
  DRIVER_API_SUCCESSFULL,
  LOGIN_USER_COUNTRY_CODE,
  LOGIN_USER_EMAIL,
  LOGIN_USER_NAME,
  LOGIN_USER_PHONE_NUMBER,
  LOGIN_USER_SOCIALMEDIA_ID,
  LOGIN_USER_SOCIALMEDIA_TYPE,
  UPDATE_ACCEPT_ORDER_LOADING,
  UPDATE_CANCEL_LOADING,
  USER_LOGGEDIN,
  USER_SELECTED_LANGUAGE,
  SET_DRIVER_LIST_DATA
} from './types';

export const setSelectedLanguageAction = (payload) => {
  return {
    type: USER_SELECTED_LANGUAGE,
    payload,
  };
};
export const setIsUserLoggedInAction = (payload) => {
  return {
    type: USER_LOGGEDIN,
    payload,
  };
};
export const setUserNameAction = (payload) => {
  return {
    type: LOGIN_USER_NAME,
    payload,
  };
};
export const setUserEmailAddressAction = (payload) => {
  return {
    type: LOGIN_USER_EMAIL,
    payload,
  };
};
export const setUserPhoneNumberAction = (payload) => {
  return {
    type: LOGIN_USER_PHONE_NUMBER,
    payload,
  };
};
export const setUserCountryCodeAction = (payload) => {
  return {
    type: LOGIN_USER_COUNTRY_CODE,
    payload,
  };
};

export const setUserSocialMediaLoginTypeAction = (payload) => {
  return {
    type: LOGIN_USER_SOCIALMEDIA_TYPE,
    payload,
  };
};

export const setUserLoggedInSocialMediaTokenIDAction = (payload) => {
  return {
    type: LOGIN_USER_SOCIALMEDIA_ID,
    payload,
  };
};

export const UpdateCancelApiStatus = (payload) => {
  return {
    type: UPDATE_CANCEL_LOADING,
    payload,
  };
};

export const setDriverListDataAction = () => {
  return {
    type: SET_DRIVER_LIST_DATA,
    
  };
};


export const GetAvailAbleDrivers = (obj, AuthToken) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, SearchDriver, AuthToken)
    .then((response) => response.data)
    .then((result) => {
  
      if (result.success) {
    
        dispatch({
          type: DRIVER_API_SUCCESSFULL,
          payload: result,
        });
      }
      else {
        dispatch({
          type: DRIVER_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
     
      dispatch({
        type: DRIVER_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
};

export const CancleCustomOrder = (obj, AuthToken) => async (dispatch) => {
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
        payload: 'Some thing Went Wrong !',
      });
    });
};

export const UpdateAcceptLoadingStatus = (payload) => {
  return {
    type: UPDATE_ACCEPT_ORDER_LOADING,
    payload,
  };
};

export const accceptCustomOrder = (obj, AuthToken) => async (dispatch) => {
  apiMiddleware.postAPIWithToken(obj, AssignOrder, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      if (result.success) {
      
        dispatch({
          type: ACCEPT_ORDER_API_SUCCESSFULL,
          payload: result,
        });
      }
      else {
        dispatch({
          type: ACCEPT_ORDER_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {

      dispatch({
        type: ACCEPT_ORDER_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
};