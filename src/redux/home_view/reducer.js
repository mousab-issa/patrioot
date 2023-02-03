import Theme from "../../common/Theme";
import {
  INIT_API_FAIL,
  INIT_API_SUCCESS,
  SHOW_FLOATING_BUTTONS
} from './types';


const initialState = {
  dataLoaded: false,
  loading: false,
  home_view_data: [
    {
      id: 'datanotLoaded',
      heading: 'Order a Cutsom delivery',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at diam sagittis amet massa tempus. Click on the notification to add the card. ',
      imageData: Theme.sample2,
      hasText: false,
    },
    {
      id: '3',
      heading: 'Welcome to patrioot',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at diam sagittis amet massa tempus. Click on the notification to add the card',
      imageData: Theme.sample4,
      hasText: true,
    },
    {
      id: '4',
      heading: 'Welcome to patrioot',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at diam sagittis amet massa tempus. Click on the notification to add the card',
      imageData: Theme.sample3,
      hasText: true,
    },
  ],
  showFloatingButtons: true,
  VATNumber: 'ABCD',
  serviceTax: 1, 
};

const home_view = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FLOATING_BUTTONS:
      return {
        ...state,
        showFloatingButtons: action.payload,
      };
    case INIT_API_SUCCESS:
    
      return {
        ...state,
        home_view_data: action.payload.data.home.posts,
        VATNumber: (action.payload.data.init != null && action.payload.data.init.VATNumber != null) ? action.payload.data.init.VATNumber : '',
        serviceTax: (action.payload.data.init != null && action.payload.data.init.service != null) ? action.payload.data.init.service : 1,
        dataLoaded: true,
        loading: true,
      };
    case INIT_API_FAIL:
      var homeData = (state.dataLoaded || state.home_view_data[0].id != 'datanotLoaded') ? state.home_view_data : [];
      return {
        ...state,
        home_view_data: homeData,
        dataLoaded: false,
      };
    default:
      return state;
  }
};
export default home_view;
