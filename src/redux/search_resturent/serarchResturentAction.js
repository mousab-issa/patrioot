import { GetFood } from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import { ADD_FOOD, FOOD_API_FAIL, SECTION_ID, UPDATE_RESTAURANT } from './types';

export const addFood = (payload) => {
  return {
    type: ADD_FOOD,
    payload,
  };
};

export const setSectionIndexAction = (payload) => {
  return {
    type: SECTION_ID,
    payload,
  };
};

export const GetRestaurantFood = (obj, token) => async (dispatch) => {
  
  apiMiddleware.postAPIWithToken(obj, GetFood, token)
    .then((response) => response.data)
    .then((result) => {

      if (result.success) {
   
        dispatch({
          type: UPDATE_RESTAURANT,
          payload: result,
        });
      }
      else {
        dispatch({
          type: FOOD_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: FOOD_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
};