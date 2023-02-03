import {
  SELECT_ORDER_NOTE
} from './types';

const initialState = {
  loading: false,
  error: '',

  currentLatitude: 24.774265,
  currentLongitude: 46.738586,

  estimatedDistance: 42,
  estimatedTime: 25,
  orderNote: '',
};

const orderTrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ORDER_NOTE:
      return {
        ...state,
        orderNote: action.payload,
      };
    default:
      return state;
  }
};


export default orderTrackingReducer;
