import _ from 'lodash';
import {
  AUTOCOMPLETE_API_FAIL,
  NEARBY_API_FAIL,
  START_NEARBY_LOADING,
  START_FIRST_LOADING,
  START_SEARCH_LOADING,
  UPDATE_NEARBY_RESTURANTS,
  UPDATE_VENDOR_AUTOCOMPLETE,
  USER_CURRENT_LOCATION,
  USER_SEARCH_CURRENT_LOCATION,
  LOCATION_UPDATE_SUCCESSFUL,
  LOCATION_UPDATE_FAIL,
} from './types';
const initialState = {
  search_resturent_data: [

  ],
  nearby_resturent_data: [
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  nearby_featured_resturent_data: [
    {},
    {},
  ],
  categories: [
    {},
    {},
    {},
    {},
  ],
  user_search_current_location: 'Riyadh, Saudi Arabia',
  currentLatitude: 24.774265,
  currentLongitude: 46.738586,
  failMessage: "",
  isLoading: false,
  offset: 0,
  nearByOffset: 0,
  nearByLoading: false,
  locationUpdateSuccess: false
};

const searchScreen = (state = initialState, action) => {
  switch (action.type) {
    case USER_SEARCH_CURRENT_LOCATION:
      return {
        ...state,
        user_search_current_location: action.payload,
        isLoading: false,
        failMessage: "",

      };
    case USER_CURRENT_LOCATION:
      return {
        ...state,
        currentLatitude: action.payload.latitude,
        currentLongitude: action.payload.longitude,
        isLoading: false,
        failMessage: "",

      };
    case UPDATE_VENDOR_AUTOCOMPLETE:
      return {
        ...state,
        offset: action.payload.new_offset == state.offset ? 0 : action.payload.new_offset,
        search_resturent_data: (action.payload.data.vendor_data.length == 0 && action.payload.new_offset == 0) ? [] :
          (action.payload.next_offset > 4 || action.payload.data.vendor_data.length == 0) ? state.search_resturent_data.concat(action.payload.data.vendor_data)
            : action.payload.data.vendor_data,
        isLoading: false,
        failMessage: "",
      };
    case AUTOCOMPLETE_API_FAIL:
      return {
        ...state,
        failMessage: action.payload,
        isLoading: false,
        search_resturent_data: []
      };
    case LOCATION_UPDATE_SUCCESSFUL:
      return {
        ...state,
        locationUpdateSuccess: action.payload,
      };
    case LOCATION_UPDATE_FAIL:
      return {
        ...state,
        locationUpdateSuccess: false,
      };
    case START_SEARCH_LOADING:
      return {
        ...state,
        isLoading: true,
        // categories: [
        //   {},
        //   {},
        //   {},
        //   {},
        // ]
      };
    case UPDATE_NEARBY_RESTURANTS:
      
      let currentList = (action.payload.data.vendor_data.length == 0 && action.payload.new_offset == 0) ? [] :
        (action.payload.new_offset > 20 || action.payload.data.vendor_data.length == 0) ? state.nearby_resturent_data.concat(action.payload.data.vendor_data)
          : action.payload.data.vendor_data;
      return {
        ...state,
        nearByOffset: action.payload.new_offset == state.nearByOffset ? 1 : action.payload.new_offset,
        nearby_resturent_data: currentList,
        nearby_featured_resturent_data: _.filter(currentList, { featured: 1 }),
        nearByLoading: false,
        failMessage: "",
        categories: (action.payload.new_offset <= 20 && action.payload.data.tags.length != 0) ? action.payload.data.tags : state.categories.concat(action.payload.data.tags.filter((item) => state.categories.map(function (e) { return e.id; }).indexOf(item.id) < 0))
      };
    case NEARBY_API_FAIL:
      return {
        ...state,
        failMessage: action.payload,
        nearByOffset: 0,
        nearByLoading: false,
        nearby_resturent_data: [],
        nearby_featured_resturent_data: [],
        categories: []
      };
    case START_FIRST_LOADING:
     
      return {
        ...state,
        nearby_resturent_data: [
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        nearby_featured_resturent_data: [
          {},
          {},
        ],
        categories: [
          {},
          {},
          {},
          {},
        ],
        nearByLoading: action.payload,
      };
    case START_NEARBY_LOADING:
     
      if (action.payload == true && state.nearby_resturent_data.length == 0) {
        return {
          ...state,
          nearby_resturent_data: [
            {},
            {},
            {},
            {},
            {},
            {},
          ],
          nearby_featured_resturent_data: [
            {},
            {},
          ],
          categories: [
            {},
            {},
            {},
            {},
          ],
          nearByLoading: action.payload,
        };

      }
      return {
        ...state,
        nearByLoading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchScreen;
