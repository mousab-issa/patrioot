import {
  AutoCompleteSearchVendor,
  NearByResturants,
  UserLocationUpdate
} from '../../config/API_EndPoints';

import apiMiddleware from '../../services/apiMiddleware';
import {
  AUTOCOMPLETE_API_FAIL,
  LOGIN_USER_COUNTRY_CODE,
  LOGIN_USER_EMAIL,
  LOGIN_USER_NAME,
  LOGIN_USER_PHONE_NUMBER,
  LOGIN_USER_SOCIALMEDIA_ID,
  LOGIN_USER_SOCIALMEDIA_TYPE,
  NEARBY_API_FAIL,
  START_NEARBY_LOADING,
  START_FIRST_LOADING,
  START_SEARCH_LOADING,
  UPDATE_NEARBY_RESTURANTS,
  UPDATE_VENDOR_AUTOCOMPLETE,
  USER_CURRENT_LOCATION,
  USER_SEARCH_CURRENT_LOCATION,
  USER_SELECTED_LANGUAGE,
  LOCATION_UPDATE_SUCCESSFUL,
  LOCATION_UPDATE_FAIL
} from './types';

export const setSelectedLanguageAction = (payload) => {
  return {
    type: USER_SELECTED_LANGUAGE,
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
export const setUserSearchCurrentLocation = (payload) => {
  return {
    type: USER_SEARCH_CURRENT_LOCATION,
    payload,
  };
};
export const setUserCurrentLocation = (payload) => {
  return {
    type: USER_CURRENT_LOCATION,
    payload,
  };
};

export const startLoading = (payload) => {
  return {
    type: START_SEARCH_LOADING,
    payload,
  };
};


export const GetAutoCompleteSearchVendor = (obj, token) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, AutoCompleteSearchVendor, token)
    .then((response) => response.data)
    .then((result) => {
     
      if (result.success) {
     
        dispatch({
          type: UPDATE_VENDOR_AUTOCOMPLETE,
          payload: result,
        });
      }
      else {
        dispatch({
          type: AUTOCOMPLETE_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: AUTOCOMPLETE_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
};

export const GetNearByResturants = (obj, token) => async (dispatch) => {
 
  apiMiddleware.postAPIWithToken(obj, NearByResturants, token)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
       
        dispatch({
          type: UPDATE_NEARBY_RESTURANTS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: NEARBY_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
   
      dispatch({
        type: NEARBY_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
};

export const startFirstLoading = (payload) => {
  return {
    type: START_FIRST_LOADING,
    payload,
  };
};

export const startNearByLoading = (payload) => {
  return {
    type: START_NEARBY_LOADING,
    payload,
  };
};

export const UpdateCussrentLocation = () => {
  return {
    type: LOCATION_UPDATE_FAIL,
    
  };
};

// LOCATION_UPDATE_FAIL
export const UpdateCurrentLocationAction = (obj, AuthToken) => async (dispatch) => {
  
  dispatch(UpdateCussrentLocation(false));
  apiMiddleware.postAPIWithToken(obj, UserLocationUpdate, AuthToken)
    .then((response) => response.data)
    .then((result) => {
    
      if (result.success) {
      
        dispatch({
          type: LOCATION_UPDATE_SUCCESSFUL,
          payload: true,
        });
      }
      else {
        
      }
    })
    .catch((err) => {
  

    });
};