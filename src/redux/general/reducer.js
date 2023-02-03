import {
  START_API,
  SET_GENERAL_DATA,
  END_API
} from './types';

const initialState = {
  loading: false,
  ServiceAndTax: 1,
  VATNUmber: 'ASDBNNN',
  driverListTimer:60,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {

    case START_API:
      return {
        ...state,
        loading: true,
      };
    case END_API:
      return {
        ...state,
        loading: false,
      };
    case SET_GENERAL_DATA:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
