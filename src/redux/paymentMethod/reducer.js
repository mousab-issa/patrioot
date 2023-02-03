import {
  ADD_CARD,
  DELETE_CARD
} from './types';

const initialState = {
  loading: false,
  error: '',
  isCardAdded: false,
  cardData: null,
};

const paymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cardData: action.payload
      };
    case DELETE_CARD:
      return {
        ...state,
        cardData: null
      };

    default:
      return state;
  }
};

export default paymentMethodReducer;
