import {
  END_API, LOGIN_USER,
  LOGIN_USER_COUNTRY_CODE,
  LOGIN_USER_EMAIL,
  LOGIN_USER_FAILED,
  LOGIN_USER_NAME,
  LOGIN_USER_PHONE_NUMBER,
  LOGIN_USER_SOCIALMEDIA_ID,
  LOGIN_USER_SOCIALMEDIA_TYPE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_GOOGLE_SUCCESS,
  RESET_USRE_DATA,
  SET_OTP_HASH_DATA,
  SET_FCM_TOKEN,
  SET_USER_LOGGED_IN,
  SET_USRE_DATA,
  START_API,
  UPDATE_NAME_API_SUCCESS,
  USER_LOGEDOUT,
  USER_LOGGEDIN,
  USER_SELECTED_LANGUAGE,
  VERIFICATION_USER_SUCCESS
} from './types';

const initialState = {
  loading: false,
  success: false,
  auth_token: null,
  password: '',
  _id: 0,
  error: null,
  name: '',
  emailAddress: '',
  phoneNumber: '',
  countryCode: '',
  selectedSocialMedia: '',
  socialMediaTokenID: '',
  userLoggedIn: false,
  selectedLanguage: 'en',
  fcmToken: '',
  otpHash: ''
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case START_API:
    
      return {
        ...state,
        loading: true,
        error: null,
      };
    case END_API:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };
    case LOGIN_USER_GOOGLE_SUCCESS:
     
      var lphoneNumber = '';
      var lcountryCode = '';
      if ((action.payload.user.phone != null && action.payload.user.phone.length > 0)) {
        if (action.payload.user.phone.length == 14) {
          lphoneNumber = action.payload.user.phone.substring(5, 14)
          var llcountryCode = action.payload.user.phone.substring(0, 5)
          lcountryCode = llcountryCode.replace("00", "+")
        }
      }
      return {
        ...state,
        auth_token: action.payload.user.auth_token,
        _id: action.payload.user.id,
        name: action.payload.user.username,
        emailAddress: action.payload.user.email != null ? action.payload.user.email : '',
        phoneNumber: lphoneNumber,
        countryCode: lcountryCode,
        loading: false,
        success: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:

      return {
        ...state,
        auth_token: action.payload.user.auth_token,
        _id: action.payload.user.id,
        name: action.payload.user.username,

        loading: false,
        success: true,
        error: null,
      };
    case LOGIN_USER_FAILED:
  
      return {
        ...state,
        error: action.payload,
        loading: true,
        success: false,
        loading: false,
      };
    case VERIFICATION_USER_SUCCESS:
      return {
        ...state,
        error: action.payload,
        loading: true,
        success: false,
        loading: false,
      };
    case SET_USER_LOGGED_IN:
   
      return {
        ...state,
        userLoggedIn: true,
      };
    case USER_LOGEDOUT:

      return {
        ...state,
        userLoggedIn: false,
      };
    case SET_USRE_DATA:
      
      return {
        ...state,
        _id: action.payload.userId,
        name: action.payload.nameValue,
        emailAddress: action.payload.emailAddressValue,
        fcmToken: action.payload.fcmTokenValue,
        countryCode: action.payload.userCountryCodeValue,
        phoneNumber: action.payload.userPhoneNumberValue,
        auth_token: action.payload.auth_tokenValue,
        userLoggedIn: action.payload.userLoggedInData,
        selectedLanguage: action.payload.appLanguage,
      };
    case RESET_USRE_DATA:
      return {
        ...state,
        _id: 0,
        name: '',
        emailAddress: '',
        countryCode: '',
        phoneNumber: '',
        auth_token: '',
        userLoggedIn: false,
      };
    case SET_FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload,
      };
    case SET_OTP_HASH_DATA:
      return {
        ...state,
        otpHash: action.payload,
      };
    case UPDATE_NAME_API_SUCCESS:
      return {
        ...state,
        emailAddress: action.payload.email,
        name: action.payload.name
      };
    case USER_LOGGEDIN:
    
      return {
        ...state,
        userLoggedIn: action.payload,
      };
    case LOGIN_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case LOGIN_USER_EMAIL:
      return {
        ...state,
        emailAddress: action.payload,
      };
    case LOGIN_USER_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case LOGIN_USER_SOCIALMEDIA_TYPE:
      return {
        ...state,
        selectedSocialMedia: action.payload,
      };
    case LOGIN_USER_SOCIALMEDIA_ID:
      return {
        ...state,
        socialMediaTokenID: action.payload,
      };
    case LOGIN_USER_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload,
      };
    case USER_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case START_API:
   
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
};

export default UserReducer;
