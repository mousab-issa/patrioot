
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import WelcomePage from '../Screens/WelcomePage/WelcomePage';
import SearchScreen from '../Screens/Search/SearchScreen';
import SearchScreenInput from '../Screens/Search/SearchScreenInput';
import FoodCard from '../Screens/FoodCard/FoodCard';

import MyAccountScreen from '../Screens/MyAccount/MyAccountScreen';
// import AddPaymentMethodScreen from '../Screens/PaymentMethod/AddPaymentMethodScreen';
import CustomerSupportScreen from '../Screens/CustomerSupport/CustomerSupportScreen';
import ChatScreenView from '../Screens/ChatScreenView/ChatScreenView';

import MapDistanceTime from '../Screens/MapDistanceTime/MapDistanceTime';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import VerificationScreen from '../Screens/VerificationScreen/VerificationScreen';
import SignUpScreen from '../Screens/Register/Register';
import CreatedAlert from '../Screens/CreateedAlert/CreatedAlert';

import MapDeliverdLocation from '../Screens/MapDeliverLocation/MapDeliverLocation';
import PickupLocationMap from '../Screens/PickupLocationMap/PickupLocationMap';
import DeliveryLocationMap from '../Screens/DeliveryLocationMap/DeliveryLocationMap';
import MapLocation from '../Screens/MapLocation/MapLocation';
import ChoseLocation from '../Screens/ChoseLocation/ChoseLocation';
import DeliveryDistance from '../Screens/DeliveryDistance/DeliveryDistance';
import DriverList from '../Screens/DriverList/DriverList';
import OrderDetails from '../Screens/OrderDetails/OrderDetails';
import CartScreen from '../Screens/CartScreen/CartScreen';
import SelectLocationScreen from '../Screens/SelectLocationScreen/SelectLocationScreen';
import SearchResturant from '../Screens/SearchResturant/SearchResturant';

import HomeScreen from '../Screens/Main/Main';

import Flags from '../Screens/Flags/Flags';

const Screens = () => (
  <MainNavigation.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={'Splash'}>
    <MainNavigation.Screen name="SearchResturant" component={SearchResturant} />
    <MainNavigation.Screen name="Splash" component={Splash} />
    <MainNavigation.Screen name="WelcomePage" component={WelcomePage} />
    <MainNavigation.Screen name="HomeScreen" component={HomeScreen} />
    <MainNavigation.Screen name="SearchScreen" component={SearchScreen} />
    <MainNavigation.Screen
      name="SearchScreenInput"
      component={SearchScreenInput}
      options={{
        animationEnabled: false,
      }}
    />
    <MainNavigation.Screen name="MyAccountScreen" component={MyAccountScreen} />
    {/* <MainNavigation.Screen
      name="AddPaymentMethodScreen"
      component={AddPaymentMethodScreen}
    /> */}
    <MainNavigation.Screen
      name="CustomerSupportScreen"
      component={CustomerSupportScreen}
    />
    <MainNavigation.Screen name="ChatScreenView" component={ChatScreenView} />
    <MainNavigation.Screen name="MapDistanceTime" component={MapDistanceTime} />
    <MainNavigation.Screen name="LoginScreen" component={LoginScreen} />
    <MainNavigation.Screen
      name="VerificationScreen"
      component={VerificationScreen}
    />
    <MainNavigation.Screen name="SignUpScreen" component={SignUpScreen} />
    <MainNavigation.Screen name="CreatedAlert" component={CreatedAlert} />
    <MainNavigation.Screen
      name="MapDeliverdLocation"
      component={MapDeliverdLocation}
    />
    <MainNavigation.Screen
      name="PickupLocationMap"
      component={PickupLocationMap}
    />
    <MainNavigation.Screen
      name="DeliveryLocationMap"
      component={DeliveryLocationMap}
    />
    <MainNavigation.Screen name="MapLocation" component={MapLocation} />

    <MainNavigation.Screen name="FoodCard" component={FoodCard} />
    <MainNavigation.Screen name="ChoseLocation" component={ChoseLocation} />
    <MainNavigation.Screen
      name="DeliveryDistance"
      component={DeliveryDistance}
    />
    <MainNavigation.Screen name="DriverList" component={DriverList} />
    <MainNavigation.Screen name="OrderDetails" component={OrderDetails} />
    <MainNavigation.Screen name="CartScreen" component={CartScreen} />
    <MainNavigation.Screen
      name="SelectLocationScreen"
      component={SelectLocationScreen}
    />

    <MainNavigation.Screen name="Flags" component={Flags} />
  </MainNavigation.Navigator>
);

const MainNavigation = createStackNavigator();
export default () => (
  <NavigationContainer>
    <Screens />
  </NavigationContainer>
);
