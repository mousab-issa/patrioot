import {
  ADD_NOTIFICATION, NOTIFICATION_API_FAIL, NOTIFICATION_API_SUCCESS
} from './types';

const initialState = {
  dataLoaded: false,
  notification_data: [
    {
      id: '1',
      title: 'Patrioot',
      heading: 'Please add a credit card',
      details:
        'Please add a credit card to start using the app Click on the notification to add the card',
    },
  ],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification_data: state.notification_data.concat(action.payload),
      };

    case NOTIFICATION_API_SUCCESS:
     
      return {
        ...state,
        dataLoaded: true,
        notification_data: action.payload.notifications,
      };
    case NOTIFICATION_API_FAIL:
      return {
        ...state,
        dataLoaded: false,
        notification_data: [],
      };

    default:
      return state;
  }
};
export default notificationReducer;
