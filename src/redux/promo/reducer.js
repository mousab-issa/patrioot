import {
  UPDATE_PROMOS,
  PROMO_API_FAIL,
} from './types';
const initialState = {
  promo_data: [
    
  ],
  isLoading:true,
  offset:0,
};

const promotionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROMOS:
      return {
        ...state,
       // offset:action.payload.promo_next_offset==state.offset?0:action.payload.promo_next_offset,
      //  promo_data:(action.payload.promo_next_offset>10||action.payload.promos.length==0)?state.promo_data.concat(action.payload.promos): action.payload.promos,
      promo_data: action.payload.data != null ? action.payload.data.promos : [],
        isLoading:false,
      };
      case PROMO_API_FAIL:
      return {
        ...state,
        isLoading:false,
      };
   default:
    return {
    ...state,
  };}
};
export default promotionsReducer;
