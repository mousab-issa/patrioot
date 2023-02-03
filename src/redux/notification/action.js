import { NotificationEndPoint } from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  ADD_NOTIFICATION,
  NOTIFICATION_API_FAIL,
  NOTIFICATION_API_SUCCESS
} from './types';

export const addNotificationAction = (payload) => {
  return {
    type: ADD_NOTIFICATION,
    payload,
  };
};

export const GetNotificatonData = (token, selectedLanguage) => async (dispatch) => {

  const notificationEP = NotificationEndPoint + '?lang=' + selectedLanguage;
  apiMiddleware.getDataApi(token, notificationEP)
    .then((response) => response.data)
    .then((result) => {
      if (result.success) {
  
        dispatch({
          type: NOTIFICATION_API_SUCCESS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: NOTIFICATION_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: NOTIFICATION_API_FAIL,
        payload: 'Some thing Went Wrong !' + err,
      });
    });
};


