import {
  ADD_USER_MESSAGE, CLEAR_OLD_MESSAGE
} from './types';

const initialState = {
  customerSupportData: [
    
  ],
};

const customerSupportReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_MESSAGE:
      return {
        ...state,
        customerSupportData: state.customerSupportData.concat(action.payload),
      };
    case CLEAR_OLD_MESSAGE:
      return {
        ...state,
        customerSupportData: [],
      };

    default:
      return state;
  }
};

export default customerSupportReducer;
