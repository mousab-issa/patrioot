import { Init } from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  INIT_API_FAIL,
  INIT_API_SUCCESS,
  LOGIN_USER_COUNTRY_CODE,
  LOGIN_USER_EMAIL,
  LOGIN_USER_NAME,
  LOGIN_USER_PHONE_NUMBER,
  LOGIN_USER_SOCIALMEDIA_ID,
  LOGIN_USER_SOCIALMEDIA_TYPE,
  SHOW_FLOATING_BUTTONS,
  USER_LOGGEDIN,
  USER_SELECTED_LANGUAGE
} from './types';


export const setShowFloatingButtons = (payload) => {
  return {
    type: SHOW_FLOATING_BUTTONS,
    payload,
  };
};
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

export const GetInitApiData = (token, selectedLanguage) => async (dispatch) => {

  const InitEP = Init + '?lang=' + selectedLanguage;
  apiMiddleware.getDataApi(token, InitEP)
    .then((response) => response.data)
    .then((result) => {

      if (result.success) {
  
        dispatch({
          type: INIT_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: INIT_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
  
      dispatch({
        type: INIT_API_FAIL,
        payload: 'Some thing Went Wrong !' + err,
      });
    });
};


