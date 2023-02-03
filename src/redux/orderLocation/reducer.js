import {
  CUSTOM_API_FAIL,
  CUSTOM_API_SUCCESS,
  DISTANCE_FAILED,
  DISTANCE_SUCCESS,
  END_API,
  SELECT_DETINATION_LOCATION,
  SELECT_ORDER_NOTE,
  SELECT_PICKUP_LOCATION,
  START_API,
  UPDATE_CUSTOM_API_STATUS
} from './types';

const initialState = {
  loading: false,
  error: '',
  pickupLatitude: 24.774265,
  pickupLongitude: 46.738586,
  pickupAddress: '',
  pickupHeading: '',

  destinationLatitude: 28.446959,
  destinationLongitude: 45.948944,
  destinationAddress: '',
  destinationHeading: '',

  orderDistance: 0,
  orderFare: 0,
  orderNote: '',

  customApiSuccess: false,
  lastCustomOrderId: -1,
  customOrderData: null,
};

const orderLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PICKUP_LOCATION:
      return {
        ...state,
        pickupLatitude: action.payload.latitude,
        pickupLongitude: action.payload.longitude,
        pickupAddress: action.payload.pickupAddress,
        pickupHeading: action.payload.pickupHeading
      };
    case SELECT_DETINATION_LOCATION:
      return {
        ...state,
        destinationLatitude: action.payload.latitude,
        destinationLongitude: action.payload.longitude,
        destinationAddress: action.payload.destinationAddress,
        destinationHeading: action.payload.destinationHeading,
   //     orderDistance: 3,
   //     orderFare: 3
      };
    case SELECT_ORDER_NOTE:
      return {
        ...state,
        orderNote: action.payload,
      };
    case DISTANCE_SUCCESS:
      return {
        ...state,
        orderFare: action.payload.delivery_charges == null ? 0 : action.payload.delivery_charges.toFixed(2),
        orderDistance: action.payload.km == null ? 0 : action.payload.km.toFixed(2),
        loading: false,
      };
    case DISTANCE_FAILED:
      return {
        ...state,
        orderNote: action.payload,
        orderFare: 0,
        orderDistance: 0,
        loading: false,
      };
    case START_API:
         
      return {
        ...state,
        orderDistance: 0,
        orderFare: 0,
        loading: true,
        error: '',
        customApiSuccess: false,
      };
    case CUSTOM_API_SUCCESS:

      return {
        ...state,
        error: "",
        customApiSuccess: true,
        loading: false,
        customOrderData: action.payload,
        lastCustomOrderId: action.payload.order == null ? 0 : action.payload.order.id,
      };
    case CUSTOM_API_FAIL:
    
      return {
        ...state,
        error: action.payload,
        customApiSuccess: false,
        loading: false,
      };
    case UPDATE_CUSTOM_API_STATUS:
  
      return {
        ...state,
        customApiSuccess: action.payload,
      };
    case END_API:

      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default orderLocationReducer;
