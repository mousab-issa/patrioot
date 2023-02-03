import {
  ADD_CARD,
  DELETE_CARD
} from './types';

export const addCardAction = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};
export const deleteCardAction = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};




