import {
  ADD_USER_MESSAGE,
  CLEAR_MESSAGES,
  ADD_MESSAGES,
  RATING_API_SUCCESS,
  RATING_API_FAIL,
  UPDATE_RATING_LOADING,
  SET_ORDER_ID,
  SET_NOTIFICATION_DATA,
  SET_SELECTED_RIDER,
  ORDER_COMPLETE_API_SUCCESS,
  ORDER_COMPLETE_API_FAIL,
  SET_ORDER_STATUS,
  SET_TRACKING_LOCATION,
  CANCEL_ORDER_API_FAIL,
  CANCEL_ORDER_API_SUCCESSFULL
} from './types';

const initialState = {
  chatData: [
  ],
  ratingApiSuccess: false,
  loading: false,
  errorMessage: "",
  orderID: 0,
  notificationData: null,
  selectedRider: null,
  orderCompleteAPISuccess: false,
  cancelledOrderId: 0,
  OrderState: '',
  trackingLocation: null,
  cancelAPiLoading: false,
  cancelApiSuccess: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_MESSAGE:
      return {
        ...state,
        chatData: state.chatData.concat(action.payload),
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        chatData: [],
      };
    case ADD_MESSAGES:
      return {
        ...state,
        chatData: action.payload,
      };
    case SET_TRACKING_LOCATION:
      return {
        ...state,
        trackingLocation: action.payload,
      };
    case RATING_API_SUCCESS:
      return {
        ...state,
        ratingApiSuccess: true,
        loading: false,
        errorMessage: ""
      };
    case RATING_API_FAIL:
      return {
        ...state,
        ratingApiSuccess: false,
        loading: false,
        errorMessage: action.payload,
      };
    case UPDATE_RATING_LOADING:
      return {
        ...state,
        ratingApiSuccess: !action.payload ? false : state.ratingApiSuccess,
        loading: action.payload,
        errorMessage: "",
      };

    case SET_ORDER_ID:
      return {
        ...state,
        orderID: action.payload,
      };

    case SET_NOTIFICATION_DATA:
      return {
        ...state,
        notificationData: action.payload,
      };

    case SET_SELECTED_RIDER:
      return {
        ...state,
        selectedRider: action.payload,
      };
    case ORDER_COMPLETE_API_SUCCESS:
      return {
        ...state,
        orderCompleteAPISuccess: true,
      };
    case ORDER_COMPLETE_API_FAIL:
      return {
        ...state,
        orderCompleteAPISuccess: false,
      };
    case SET_ORDER_STATUS:
      return {
        ...state,
        cancelledOrderId: action.payload.orderID,
        OrderState: action.payload.status
      };
    case CANCEL_ORDER_API_FAIL:
      return {
        ...state,
        cancelAPiLoading: false,
        cancelApiSuccess: false,
      };
    case CANCEL_ORDER_API_SUCCESSFULL:
      return {
        ...state,
        cancelAPiLoading: false,
        cancelApiSuccess: true,
      };
    default:
      return state;
  }
};

export default chatReducer;