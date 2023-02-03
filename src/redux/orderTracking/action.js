import {
  SELECT_ORDER_NOTE
} from './types';

export const setOrderNoteAction = (payload) => {
  return {
    type: SELECT_ORDER_NOTE,
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
        payload: 'Some thing Went Wrong !',
      });
    });
};
