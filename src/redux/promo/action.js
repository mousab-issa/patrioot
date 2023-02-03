import { GetPromos, getPromosNearBy2 } from '../../config/API_EndPoints';
import apiMiddleware from '../../services/apiMiddleware';
import {
  PROMO_API_FAIL, UPDATE_PROMOS,

  USER_SELECTED_LANGUAGE
} from './types';

export const setSelectedLanguageAction = (payload) => {
  return {
    type: USER_SELECTED_LANGUAGE,
    payload,
  };
};


export const GetPromoData = (token, offset, selectedLanguage) => async (dispatch) => {
 
  const lang = selectedLanguage
  const promoData = {
    offset,
    lang
  };

  // getPromosNearBy2
 // const GetPromosEP = GetPromos + '?lang=' + selectedLanguage;
 // apiMiddleware.getApi(token, data, GetPromosEP)
 apiMiddleware.postAPIWithToken(promoData, getPromosNearBy2, token)
    .then((response) => response.data)
    .then((result) => {
     
      if (result.success) {
       
        dispatch({
          type: UPDATE_PROMOS,
          payload: result,
        });
      }
      else {
        dispatch({
          type: PROMO_API_FAIL,
          payload: result.message,
        });
      }

    })
    .catch((err) => {
      
      dispatch({
        type: PROMO_API_FAIL,
        payload: 'Some thing Went Wrong !',
      });
    });
}
