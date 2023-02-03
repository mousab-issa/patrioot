import {
  ADD_USER_MESSAGE, CLEAR_OLD_MESSAGE,
} from './types';

export const addUserMessageAction = (payload) => {
  return {
    type: ADD_USER_MESSAGE,
    payload,
  };
};

export const clearOldCustomerMessages = (payload) => {
  return {
    type: CLEAR_OLD_MESSAGE,
    payload,
  };
};


export const addUserMessage = (obj) => async (dispatch) => {
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
        payload: 'Some thing Went Wrong !',
      });
    });
};
