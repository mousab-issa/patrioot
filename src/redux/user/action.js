import {
  Continuewithfacebook, 
  Continuewithgoolge, 
  ContinueWithPhone,
  Signup,
  UpdateNameEmail
} from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  END_API, LOGIN_USER_COUNTRY_CODE, LOGIN_USER_EMAIL, LOGIN_USER_FAILED,
  LOGIN_USER_NAME,
  LOGIN_USER_PHONE_NUMBER,
  LOGIN_USER_SOCIALMEDIA_ID, 
  LOGIN_USER_SOCIALMEDIA_TYPE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_GOOGLE_SUCCESS,
  RESET_USRE_DATA,
  SET_FCM_TOKEN, SET_USER_LOGGED_IN,
  SET_USRE_DATA,
  SET_OTP_HASH_DATA,
  START_API, USER_LOGGEDIN,
  USER_SELECTED_LANGUAGE, 
  UPDATE_NAME_API_SUCCESS,
  VERIFICATION_USER_SUCCESS
} from './types';

import Languages from '../../common/Languages';
import Constants from '../../common/Constants';

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
export const setOTPHashAction = (payload) => {
  return {
    type: SET_OTP_HASH_DATA,
    payload,
  };
};
export const setUserLoggedInAction = (payload) => {
  return {
    type: SET_USER_LOGGED_IN,
    payload,
  };
};

export const setUserSocialMediaLoginTypeAction = (payload) => {
  return {
    type: LOGIN_USER_SOCIALMEDIA_TYPE,
    payload,
  };
};
export const setUserDataAction = (payload) => {
  return {
    type: SET_USRE_DATA,
    payload,
  };
};
export const resetUserDataAction = (payload) => {
  return {
    type: RESET_USRE_DATA,
    payload,
  };
};

export const setUserLoggedInSocialMediaTokenIDAction = (payload) => {
  return {
    type: LOGIN_USER_SOCIALMEDIA_ID,
    payload,
  };
};

export const setFCMTokenAction = (payload) => {
  return {
    type: SET_FCM_TOKEN,
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

export const Login_User = (obj) => async (dispatch) => {
  apiMiddleware.postAPI(obj, ContinueWithPhone, '')
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
       
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result,
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
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const LoginWithGoogle = (obj) => async (dispatch) => {
  apiMiddleware.postAPI(obj, Continuewithgoolge, '')
    .then((response) => response.data)
    .then((result) => {
     
      if (result.success) {
       
        dispatch({
          type: LOGIN_USER_GOOGLE_SUCCESS,
          payload: result,
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
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const LoginWithFacebook = (obj) => async (dispatch) => {
  apiMiddleware.postAPI(obj, Continuewithfacebook, '')
    .then((response) => response.data)
    .then((result) => {
     
      if (result.success) {
      
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result,
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
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const VerifyPhoneNumber = (obj, AuthToken) => async (dispatch) => {
  

  apiMiddleware.getDataApi(AuthToken, obj)
    .then((response) => response.data)
    .then((result) => {
  
      if (result.success) {
     
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result.data,
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
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const ResendVerificationUserCode = (obj, AuthToken) => async (dispatch) => {

  apiMiddleware.getDataApi(AuthToken, obj)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
      
        dispatch({
          type: VERIFICATION_USER_SUCCESS,
          payload: Constants.debugMode ? (result.data.phone_verification_code + '') : result.message,
         //payload: result.data.phone_verification_code + '',
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
        payload: Languages.SomethingWentWrong,
      });
    });
};


export const Register_User = (obj, AuthToken) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, Signup, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
       
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result,
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
        payload: Languages.SomethingWentWrong,
      });
    });
};

export const UpdateUserNameEmail = (obj, AuthToken) => async (dispatch) => {

  apiMiddleware.postAPIWithToken(obj, UpdateNameEmail, AuthToken)
    .then((response) => response.data)
    .then((result) => {
      
      if (result.success) {
       
        dispatch({
          type: UPDATE_NAME_API_SUCCESS,
          payload: obj,
        });
      }
      else {
        // dispatch({
        //   type: CUSTOM_API_FAIL,
        //   payload: result.message,
        // });
      }

    })
    .catch((err) => {
      
      // dispatch({
      //   type: CUSTOM_API_FAIL,
      //   payload: 'Some thing Went Wrong !',
      // });
    });
};