import { ADD_FOOD_CART } from '../foodCrad/types';
import {
  CHECKOUT_API_FAIL, CHECKOUT_API_SUCCESS, CLEAR_CART, DECREMENT_QUANTITY, DELETE_FOOD,
  EDIT_DETAILS, INCREMENT_QUANTITY,
  UPDATE_API_STATUS, UPDATE_CURRENT_VENDOR,
  UPDATE_LOADING
} from './types';

const initialState = {
  sourceData: [],
  totalPrice: 0,
  orderCount: 0,
  totalCount: 0,
  currentVendor: -1,
  branchId: -1,
  distance: -1,
  currentVendorName: "",
  loading: false,
  isError: false,
  apiCallSuccess: false,
  errorMessage: "",
};

const calculateTotals = (data) => {
  let totalPrice = 0;
  data.forEach((element) => {
    totalPrice += element.price;
  });
 
  const totals = { totalPrice, totalItems: data.length };

  return totals;
};

const cartReducer = (state = initialState, action) => {
  let cartData = [];
  let totals = {};
  let _index = -1;
  switch (action.type) {
    case ADD_FOOD_CART: {
      cartData = state.sourceData;
      let obj = action.payload;
      cartData.push(obj);
      totals = calculateTotals(cartData);
      return {
        ...state,
        sourceData: cartData,
        totalPrice: totals.totalPrice,
        totalCount: totals.totalItems,
        orderCount: cartData.length,
      };
    }
    case UPDATE_CURRENT_VENDOR: {
    
      return {
        ...state,
        currentVendor: action.payload.vendor_id,
        branchId: action.payload.branch_id,
        distance: action.payload.distance,
        currentVendorName: action.payload.currentVendorName,
      };
    }
    case CHECKOUT_API_SUCCESS: {
      return {
        ...state,
        apiCallSuccess: true,
        loading: false,
        isError: false,

        errorMessage: ""
      };
    }
    case CHECKOUT_API_FAIL: {
      return {
        ...state,
        apiCallSuccess: false,
        loading: false,
        isError: true,
        errorMessage: action.payload
      };
    }
    case UPDATE_API_STATUS: {
      return {
        ...state,
        apiCallSuccess: action.payload,
        sourceData: [],
        totalPrice: 0,
        totalCount: 0,
        orderCount: 0,
        branchId: -1,
        currentVendor: -1,
      };
    }
    case INCREMENT_QUANTITY: {
      _index = action.payload;
      cartData = state.sourceData;
      const modifyItem = { ...cartData[_index] };
      modifyItem.quantity += 1;
      modifyItem.price =
        (modifyItem.singlePrice + modifyItem.extras_price) * modifyItem.quantity;
      const updatedData = [...cartData];
      updatedData[_index] = modifyItem;
      totals = calculateTotals(updatedData);

      return {
        ...state,
        sourceData: [...updatedData],
        totalPrice: totals.totalPrice,
        totalCount: totals.totalItems,
      };
    }
    case DECREMENT_QUANTITY: {
      _index = action.payload;
      cartData = state.sourceData;
      const modifyItem = { ...cartData[_index] };
      modifyItem.quantity -= 1;
      if (modifyItem.quantity === 0) {
        return {
          ...state,
        };
        extrPrice;
      }
      modifyItem.price =
        (modifyItem.singlePrice + modifyItem.extras_price) * modifyItem.quantity;
      const updatedData = [...cartData];
      updatedData[_index] = modifyItem;
      totals = calculateTotals(updatedData);

      return {
        ...state,
        sourceData: [...updatedData],
        totalPrice: totals.totalPrice,
        totalCount: totals.totalItems,
      };
    }
    case DELETE_FOOD: {
      cartData = state.sourceData;
      
      let updatedData = [...cartData];
      _index = action.payload;
      updatedData.splice(_index, 1);
    
      totals = calculateTotals(updatedData);
    
      return {
        ...state,
        sourceData: [...updatedData],
        totalPrice: totals.totalPrice,
        totalCount: totals.totalItems,
        orderCount: cartData.length,
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        sourceData: [],
        totalPrice: 0,
        totalCount: 0,
        orderCount: 0,
        branchId: -1,
        currentVendor: -1,
      };
    }
    case UPDATE_LOADING: {
      return {
        ...state,
        loading: action.payload,
        isError: action.payload ? false : state.isError
      };
    }
    case EDIT_DETAILS: {
      _index = action.id;
      cartData = state.sourceData;
      const modifyItem = { ...cartData[_index] };
      modifyItem.note = action.details;
      const updatedData = [...cartData];
      updatedData[_index] = modifyItem;
      return {
        ...state,
        sourceData: [...updatedData],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
