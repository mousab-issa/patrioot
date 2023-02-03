import { ADD_FOOD_CART } from './types';

export const foodCardAction = (payload) => {
  return {
    type: ADD_FOOD_CART,
    payload,
  };
};
