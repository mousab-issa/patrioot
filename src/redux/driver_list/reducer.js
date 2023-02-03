import {
  ACCEPT_ORDER_API_FAIL,
  ACCEPT_ORDER_API_SUCCESSFULL,
  CANCEL_ORDER_API_FAIL,
  CANCEL_ORDER_API_SUCCESSFULL,
  DRIVER_API_FAIL,
  DRIVER_API_SUCCESSFULL,
  UPDATE_ACCEPT_ORDER_LOADING,
  UPDATE_CANCEL_LOADING,
  SET_DRIVER_LIST_DATA
} from "./types";

const initialState = {
  driverList: [],
  driverApiLoading: true,
  errorMessage: "",
  cancelAPiLoading: false,
  cancelApiSuccess: false,
  acceptOrderLoading: false,
  acceptApiSuccess: false,

};

const driver_list = (state = initialState, action) => {
  switch (action.type) {
    case DRIVER_API_SUCCESSFULL:
      return {
        ...state,
        //    driverList: action.payload.rider,
        driverList: action.payload.data,
        driverApiLoading: false,
        errorMessage: "",

      };
    case DRIVER_API_FAIL:
      return {
        ...state,
        driverApiLoading: false,
        errorMessage: action.payload,
      }
    case CANCEL_ORDER_API_SUCCESSFULL:
      return {
        ...state,
        cancelApiSuccess: true,
        cancelAPiLoading: false,
        driverApiLoading: true,
      }
    case CANCEL_ORDER_API_FAIL:
      return {
        ...state,
        cancelAPiLoading: false,
        cancelApiSuccess: false,
      }
    case UPDATE_CANCEL_LOADING:
      return {
        ...state,
        cancelAPiLoading: action.payload,
        cancelApiSuccess: !action.payload ? false : state.cancelApiSuccess,

      }
    case ACCEPT_ORDER_API_SUCCESSFULL:
      return {
        ...state,
        acceptOrderLoading: false,
        acceptApiSuccess: true,
      }
    case ACCEPT_ORDER_API_FAIL:
      return {
        ...state,
        acceptOrderLoading: false,
        acceptApiSuccess: false,
      }
    case UPDATE_ACCEPT_ORDER_LOADING:
      return {
        ...state,
        acceptOrderLoading: action.payload,
        acceptApiSuccess: !action.payload ? false : state.acceptApiSuccess,

      }
    case SET_DRIVER_LIST_DATA:
      return {
        ...state,
        cancelApiSuccess: false,
        acceptApiSuccess: false,

      }
    default:
      return {
        ...state,
      };
  };
};
export default driver_list;
