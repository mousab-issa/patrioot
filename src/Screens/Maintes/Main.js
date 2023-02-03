import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  StatusBar,
  I18nManager,
} from 'react-native';
import Theme from '../../common/Theme';
import { useSelector, connect } from 'react-redux';
import HomeScreen from './Home';
import ChatScreen from './Chat';
import PromosScreen from './Promos';
import Colors from './../../theme/colors';
import RNLocation from 'react-native-location';
import Constants from './../../common/Constants';
import CustomIcon from './../../common/CustomIcon';
import Languages from './../../common/Languages';
import NetInfo from "@react-native-community/netinfo";
import Geolocation from '@react-native-community/geolocation';
import { useIsFocused } from '@react-navigation/native';

import {
  setPickupLocationAction,
} from '../../redux/orderLocation/action';
import {
  setUserSearchCurrentLocation,
  setUserCurrentLocation,
  UpdateCurrentLocationAction
} from '../../redux/search_screen/action';


import {
  GetPromoData
} from '../../redux/promo/action';
import { GetInitApiData } from '../../redux/home_view/action';
import { Alert } from 'react-native';
import { GetNotificatonData } from '../../redux/notification/action';
import { AppState } from 'react-native';

const { width, height } = Dimensions.get('screen');

const tabscreen = {
  Promos: Theme.promos,
  Home: Theme.home,
  Chat: Theme.chat,
};

const data = Object.keys(tabscreen).map((i) => ({
  key: i,
  title: i,
  image: tabscreen[i],
  ref: React.createRef(),
}));

const data2 = Object.keys(tabscreen).map((i) => ({
  key: i,
  title: i,
  image: tabscreen[i],
  ref: React.createRef(),
}));

const data_reverse = data2.reverse();

const Tab = React.forwardRef(({ item, onItemPress, selected }, ref) => {
  const notifications = useSelector(
    (state) => state.notification.notification_data,
  );
  return (
    <TouchableWithoutFeedback onPress={onItemPress}>
      <View
        ref={ref}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View>
          {(item.title === 'Chat' && notifications.length > 0) && (
            <View style={styles.circle}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={styles.badge2}>
                  {notifications.length}
                </Text>
              </View>
            </View>
          )}
          <CustomIcon
            name={
              item.title == 'Chat'
                ? 'ChatTab'
                : item.title == 'Home'
                  ? 'HomeTab'
                  : 'PromosTab'
            }
            type={'SVG'}
            iconStyle={{
              fontSize: Constants.ResponsiveSize.f12,
              color: '#000000',
            }}
          />

        </View>
        <Animated.Text
          style={[
            !I18nManager.isRTL ? styles.tabText : styles.tabText_rtl,
            { color: selected ? Colors.WhiteColor : Colors.WhiteColor },
          ]}>
          {item.title == 'Chat'
            ? Languages.Notification
            : item.title == 'Home'
              ? Languages.Home
              : Languages.Promos}
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

const Indicator = ({ measures, scrollX }) => {
  const paddingHoz = 15;
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width + paddingHoz * 2),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        zIndex: -1,
        position: 'absolute',
        height: 36,
        width: indicatorWidth,
        left: -paddingHoz,
        backgroundColor: Colors.TabSelectedBG,
        transform: [
          {
            translateX,
          },
        ],
        top: -7,
        borderRadius: 17,
        borderColor: 'rgba(0,0,0,0.05)',
        borderWidth: 0.5,
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress, pageNumber }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, []);

  //temp
  return (
    <View style={styles.tabsContainer}>
      <View
        ref={containerRef}
        style={[
          styles.tabsWrapper,
          { flexDirection: !I18nManager.isRTL ? 'row' : 'row-reverse' },
        ]}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
              selected={pageNumber === index}
            />
          );
        })}
        {measures.length > 0 && (
          <Indicator measures={measures} scrollX={scrollX} />
        )}
      </View>
    </View>
  );
};

function Main(props) {
  const {
    navigation,
    token,
    selectedLanguage,
    homedata,
    homeDataLoaded,
    getPromodata,
    getInitData,
    notificationDataLoaded,
    locationUpdateSuccess,
    updateNotificationData,
    setCurrentLocation,
    setUserSearchCurrentLocation,
    UpdateCurrentLocation
  } = props;
  const [pageNumber, setPageNumber] = useState(-1);
  const [isNetworkDialog, setNetworkDialog] = useState(false);
  const [isNetworkConnected, setNetworkConnected] = useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const onItemPress = React.useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });

  React.useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
     
    });

    AppState.addEventListener('change', handleAppStateChange);

    if (I18nManager.isRTL) {
      ref?.current?.scrollToOffset({
        offset: 1 * width,
      });
    } else {
      ref?.current?.scrollToOffset({
        offset: 1 * width,
      });
    }
    NetInfo.addEventListener(state => {
      if (state.isConnected && (homedata.length == 0 || !homeDataLoaded)) {
        settingCentertoUserLocation();
        // getPromodata(token, selectedLanguage);
        getInitData(token, selectedLanguage);
        setTimeout(() => {
          //LocationRequestPermission();
          UpdateUserLocation();
        }, 1500)
      }
      if (state.isConnected && !notificationDataLoaded) {
        updateNotificationData(token, selectedLanguage);
      }
      //TODO:if need to set here
      // showNetworkAlert(state.isConnected);
    });


    return () => {
      unsubscribe;
      AppState.removeEventListener("change", handleAppStateChange);
    };

  }, [navigation]);

  const handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      
      settingCentertoUserLocation();
      // getPromodata(token, selectedLanguage);
      getInitData(token, selectedLanguage);
      updateNotificationData(token, selectedLanguage);
      setTimeout(() => {
        // LocationRequestPermission();
        UpdateUserLocation();
      }, 1500)
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    
  }

  React.useEffect(() => {
  
    if (locationUpdateSuccess) {
      getPromodata(token, selectedLanguage);
    }
  }, [locationUpdateSuccess]);

  const UpdateUserLocation = () => {
    try {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      }).then((granted) => {
       
        if (granted) {
          RNLocation.getLatestLocation({ timeout: 60000 })
            .then(latestLocation => {
              var llatitude = latestLocation.latitude;
              var llongitude = latestLocation.longitude;

              const newLocaion = {
                latitude: llatitude,
                longitude: llongitude
              };
              setCurrentLocation(newLocaion);

              const currentLocaion = {
                name: 'location',
                latitude: Constants.debugMode ? 24.633306485697915 : llatitude, // , // 24.7136, // latitude,
                longitude: Constants.debugMode ? 46.69774263794346 : llongitude, //, // 46.6753, // longitude
              };
              UpdateCurrentLocation(currentLocaion, token);
              const displayAddress = fetchAddress(llatitude, llongitude)
            })
         
        }
      });

    } catch (e) {
      
    }
  }

  const showNetworkAlert = (connected) => {
    if (!isNetworkDialog) {
      setNetworkDialog(true);
      Alert.alert(
        Languages.NetworkError,
        Languages.NetworkErrorMessage,
        [
          {
            text: Languages.Exit,
            onPress: () => {
              setNetworkDialog(false);
             
            },
            style: "cancel"
          },
          {
            text: Languages.Retry, onPress: () => {
              NetInfo.fetch().then(state => {
                
                if (state.isConnected)
                  setNetworkDialog(false);
                else
                  showNetworkAlert(isNetworkConnected);
              });
            }
          }
        ]
      );
    }
  }
  const LocationRequestPermission = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          (locations) => {
          
            if (locations.length > 0) {
              let latitude = locations[0].latitude;
              let longitude = locations[0].longitude;
              // setlatitude(latitude);
              // setlongitude(longitude);
              const newLocaion = {
                latitude: latitude,
                longitude: longitude
              };
              setCurrentLocation(newLocaion);
             
              const displayAddress = fetchAddress(newLocaion.latitude, newLocaion.longitude)

              // call Lcoation update API
              const currentLocaion = {
                name: 'location',
                latitude: Constants.debugMode ? 24.633306485697915 : latitude, // 24.7136, // latitude,
                longitude: Constants.debugMode ? 46.69774263794346 : longitude, // 46.6753, // longitude
              };
              UpdateCurrentLocation(currentLocaion, token);
            }
          },
        );
      }
    });
  };

  const fetchAddress = async (latitude, longitude) => {
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${Constants.GoogleAPIKey}&language=${selectedLanguage}`
    );
    let json = await response.json();

    if (json.status == "OK") {
      if (json.results[0]) {
        var country = null, countryCode = null, city = null, cityAlt = null;
        var c, lc, component;
        for (var r = 0, rl = json.results.length; r < rl; r += 1) {
          var result = json.results[r];

          if (!city && result.types[0] === 'locality') {
            for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
              component = result.address_components[c];

              if (component.types[0] === 'locality') {
                city = component.long_name;
                break;
              }
            }
          }
          else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
            for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
              component = result.address_components[c];

              if (component.types[0] === 'administrative_area_level_1') {
                cityAlt = component.long_name;
                break;
              }
            }
          } else if (!country && result.types[0] === 'country') {
            country = result.address_components[0].long_name;
            countryCode = result.address_components[0].short_name;
          }

          if (city && country) {
            break;
          }
        }
        var currentLocation = city + ', ' + country;
        if (city == null) currentLocation = country;
        if (country == null) currentLocation = city;
        if (country == null && city == null) currentLocation = '';
        setUserSearchCurrentLocation(currentLocation)
        
        return { text: country, place_name: json.results[0].formatted_address, city: city, country: country }

      }
      else {
        return { text: "", place_name: "" }
      }
    }
    else {
      return { text: "", place_name: "" }
    }

  };

  const settingCentertoUserLocation = () => {
    Geolocation.getCurrentPosition(async (position) => {
      const currentLocaion1 = {
        name: 'location',
        latitude: position.coords.latitude, // latitude,
        longitude: position.coords.longitude, // longitude
      };
      
      const currentLocaion = {
        name: 'location',
        latitude: Constants.debugMode ? 24.633306485697915 : position.coords.latitude, // 24.7136, // latitude,
        longitude: Constants.debugMode ? 46.69774263794346 : position.coords.longitude, //46.6753, // longitude
      };
      UpdateCurrentLocation(currentLocaion, token);
    }, (error) => {
     
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
      //maximumAge: 1000
    });

  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} translucent backgroundColor="transparent" barStyle='dark-content' />
      <Tabs
        data={!I18nManager.isRTL ? data : data}
        scrollX={scrollX}
        onItemPress={onItemPress}
        pageNumber={pageNumber}
      />

      <Animated.FlatList
        ref={ref}
        data={!I18nManager.isRTL ? data : data_reverse}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: (event) => {
              let newPage = Math.round(
                parseFloat(event.nativeEvent.contentOffset.x / width),
              );
              if (pageNumber !== newPage) {

              }
            },
          },
        )}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, backgroundColor: Colors.WhiteColor }}>
              {item.title == 'Promos' && (
                <PromosScreen navigation={props.navigation} />
              )}
              {item.title == 'Home' && (
                <HomeScreen navigation={props.navigation} />
              )}
              {item.title == 'Chat' && (
                <ChatScreen navigation={props.navigation} />
              )}
            </View>
          );
        }}
      />
    </View>
  );
}
const mapStateToProps = ({ User, home_view, notification, searchScreen }) => {
 
  return {
    token: User.auth_token,
    selectedLanguage: User.selectedLanguage,
    homedata: home_view.home_view_data,
    homeDataLoaded: home_view.dataLoaded,
    notificationDataLoaded: notification.dataLoaded,
    locationUpdateSuccess: searchScreen.locationUpdateSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLocation: (locationData) => {
      dispatch(setUserCurrentLocation(locationData));
    },
    setUserSearchCurrentLocation: (user_search_current_location) => {
      dispatch(setUserSearchCurrentLocation(user_search_current_location));
    },
    UpdateCurrentLocation: (obj, token) => {
      dispatch(UpdateCurrentLocationAction(obj, token));
    },
    getPromodata: (obj, selectedLanguage) => {
      dispatch(GetPromoData(obj, '0', selectedLanguage));
    },
    getInitData: (token, selectedLanguage) => {
      dispatch(GetInitApiData(token, selectedLanguage));
    },
    updateNotificationData: (token, selectedLanguage) => {
      dispatch(GetNotificatonData(token, selectedLanguage));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ButtonColor,
  },
  circle: {
    zIndex: 1,
    position: 'absolute',
    top: -7,
    left: -7,
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#F34E4E',
    justifyContent: 'center',
  },
  circle_rtl: {
    zIndex: 1,
    position: 'absolute',
    top: -7,
    right: -7,
    width: 19,
    height: 19,
    borderRadius: 100,
    backgroundColor: '#F34E4E',
  },
  tabText: {
    color: Theme.primary,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f14,
    paddingLeft: Constants.ResponsiveSize.f5,
  },
  tabText_rtl: {
    color: Theme.primary,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyArabicBold,
    fontSize: Constants.ResponsiveSize.f14,
    paddingLeft: Constants.ResponsiveSize.f5,
    paddingRight: Constants.ResponsiveSize.f5,
  },
  badge2: {
    textAlign: 'center',
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f12,
    bottom: 1
  },
  tabsContainer: {
    marginTop: Constants.ResponsiveSize.f47,
    width,
    paddingHorizontal: 30,
    paddingBottom: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5,
  },
  tabsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabsShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
