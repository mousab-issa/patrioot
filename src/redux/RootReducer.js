import { combineReducers } from 'redux';
import cartReducer from '../redux/cart/reducer';
import chatReducer from '../redux/chat/reducer';
import customerSupportReducer from '../redux/customer_suport/reducer';
import driver_list from '../redux/driver_list/reducer';
import foodCardReducer from '../redux/foodCrad/reducer';
import generalReducer from '../redux/general/reducer';
import home_view from '../redux/home_view/reducer';
import notificationReducer from '../redux/notification/reducer';
import orderLocationReducer from '../redux/orderLocation/reducer';
import orderTrackingReducer from '../redux/orderTracking/reducer';
import paymentMethodReducer from '../redux/paymentMethod/reducer';
import promotionsReducer from '../redux/promo/reducer';
import search_resturent from '../redux/search_resturent/reducer';
import searchScreen from '../redux/search_screen/reducer';
import UserReducer from '../redux/user/reducer';


const RootReducer = combineReducers({
  User: UserReducer,
  foodCard: foodCardReducer,
  cart: cartReducer,
  chat: chatReducer,
  customer_suport: customerSupportReducer,
  driver_list: driver_list,
  searchScreen: searchScreen,
  search_resturent: search_resturent,
  home_view: home_view,
  notification: notificationReducer,
  promo: promotionsReducer,
  paymentMethod: paymentMethodReducer,
  orderLocation: orderLocationReducer,
  orderTracking: orderTrackingReducer,
  general: generalReducer,
});

export default RootReducer;
