import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
  createRef,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  I18nManager,
  AppState,
  Image
} from 'react-native';
//State manengment
import { connect } from 'react-redux';
import { GetPromoData } from '../../redux/promo/action';
import { GetInitApiData } from '../../redux/home_view/action';
import { Alert } from 'react-native';
import { GetNotificatonData } from '../../redux/notification/action';
import {
  setUserSearchCurrentLocation,
  setUserCurrentLocation,
  UpdateCurrentLocationAction,
} from '../../redux/search_screen/action';
//Content components
import HomeScreen from './Home';
import ChatScreen from './Chat';
// import PromosScreen from './Promos';
import Patiroot from './Patrioot';
//Theming and layout components
import Tabs from '../../Components/Main/Layout/Tabs';
import HomeToolbar from '../../Components/Main/Layout/HomeToolbar';
//Theming
import Theme from '../../common/Theme';
import Colors from './../../theme/colors';
import Constants from './../../common/Constants';
import Languages from './../../common/Languages';
//APIs
import RNLocation from 'react-native-location';
import NetInfo from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
//Layout
import BottomSheet from '@gorhom/bottom-sheet';
//Reanimated 
import { withSpring, useSharedValue, withTiming, useAnimatedStyle, useAnimatedProps } from "react-native-reanimated";

// Screen layouts
const { width, height } = Dimensions.get('screen');

//Layout data
const tabscreen = {
  Promos: Theme.promos,
  Home: Theme.home,
  Chat: Theme.chat,
};
const data = Object.keys(tabscreen).map((i) => ({
  key: i,
  title: i,
  image: tabscreen[i],
  ref: createRef(),
}));
const data2 = Object.keys(tabscreen).map((i) => ({
  key: i,
  title: i,
  image: tabscreen[i],
  ref: createRef(),
}));
const data_reverse = data2.reverse();
//end of layout data

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
    UpdateCurrentLocation,
  } = props;
  //refs
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef();
  const appState = useRef(AppState.currentState);
  const sheetRef = useRef([]);
  const snapPoints = useMemo(() => ['40%', '100%'], []);
  //state
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [pageNumber] = useState(-1);
  const [isNetworkDialog, setNetworkDialog] = useState(false);
  const [isNetworkConnected] = useState(false);
  // Contorl the margin
  const [ToolBarShown, setTooBarShown] = useState(true);

  // LifeCycle methods
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

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

    NetInfo.addEventListener((state) => {
      if (state.isConnected && (homedata.length == 0 || !homeDataLoaded)) {
        settingCentertoUserLocation();
        // getPromodata(token, selectedLanguage);
        getInitData(token, selectedLanguage);
        setTimeout(() => {
          //LocationRequestPermission();
          UpdateUserLocation();
        }, 1500);
      }
      if (state.isConnected && !notificationDataLoaded) {
        updateNotificationData(token, selectedLanguage);
      }
    });

    return () => {
      unsubscribe;
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [navigation]);


  useEffect(() => {
    if (locationUpdateSuccess) {
      getPromodata(token, selectedLanguage);
    }
  }, [locationUpdateSuccess]);

  // callbacks and events Handeling


  const handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      settingCentertoUserLocation();
      getInitData(token, selectedLanguage);
      updateNotificationData(token, selectedLanguage);
      setTimeout(() => {
        UpdateUserLocation();
      }, 1500);
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);

  };

  const UpdateUserLocation = () => {
    try {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      }).then((granted) => {

        if (granted) {
          RNLocation.getLatestLocation({ timeout: 60000 }).then(
            (latestLocation) => {
              var llatitude = latestLocation.latitude;
              var llongitude = latestLocation.longitude;

              const newLocaion = {
                latitude: llatitude,
                longitude: llongitude,
              };
              setCurrentLocation(newLocaion);

              const currentLocaion = {
                name: 'location',
                latitude: Constants.debugMode ? 24.633306485697915 : llatitude, // , // 24.7136, // latitude,
                longitude: Constants.debugMode ? 46.69774263794346 : llongitude, //, // 46.6753, // longitude
              };
              UpdateCurrentLocation(currentLocaion, token);
            },
          );

        }
      });
    } catch (e) {

    }
  };

  const showNetworkAlert = (connected) => {
    if (!isNetworkDialog) {
      setNetworkDialog(true);
      Alert.alert(Languages.NetworkError, Languages.NetworkErrorMessage, [
        {
          text: Languages.Exit,
          onPress: () => {
            setNetworkDialog(false);

          },
          style: 'cancel',
        },
        {
          text: Languages.Retry,
          onPress: () => {
            NetInfo.fetch().then((state) => {

              if (state.isConnected) setNetworkDialog(false);
              else showNetworkAlert(isNetworkConnected);
            });
          },
        },
      ]);
    }
  };

  const settingCentertoUserLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const currentLocaion1 = {
          name: 'location',
          latitude: position.coords.latitude, // latitude,
          longitude: position.coords.longitude, // longitude
        };

        const currentLocaion = {
          name: 'location',
          latitude: Constants.debugMode
            ? 24.633306485697915
            : position.coords.latitude, // 24.7136, // latitude,
          longitude: Constants.debugMode
            ? 46.69774263794346
            : position.coords.longitude, //46.6753, // longitude
        };
        UpdateCurrentLocation(currentLocaion, token);
      },
      (error) => {

      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        //maximumAge: 1000
      },
    );
  };

  //Pressing Indicators
  const onItemPress = useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });

  // ToolBar change 
  const offset = useSharedValue(0);
  const HandleHomeChange = (index) => {
    'worklet';
    if (index === 0) {
      offset.value = withSpring(200)
    } else if (index === 1) {
      offset.value = withSpring(0)
    }
  };
  //

  //Flat list callbacks
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      currentScreenIndex = viewableItems[0].index;
      sheetRef.current[currentScreenIndex].snapTo(1);
    }
  };

  const viewabilityConfig = {
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 100,
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);


  //Margin Change Test
  const MarginChange = useSharedValue(0);

  const OnDragStart = (index) => {
    'worklet';
    MarginChange.value = withTiming(1.5)
  };
  const OnDragEnd = (index) => {
    'worklet';
    MarginChange.value = withTiming(1)
  };
  const sheetStyle = useMemo(
    () => ({

      marginHorizontal: MarginChange.value
    }),
    [MarginChange.value]
  );
  //


  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
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
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          },
        )}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width, backgroundColor: Colors.GreenColor }}>
              <View style={styles.Imagecontainer}>
                <Image source={Theme.MainBackground} style={styles.image}>
                </Image>
              </View>

              <BottomSheet
                ref={(el) => (sheetRef.current[index] = el)}
                onChange={item.title === 'Home' ? HandleHomeChange : null}
                index={1}
                snapPoints={snapPoints}
                activeOffsetY={[-1, 1]}
                failOffsetX={[-5, 5]}
                animateOnMount={true}
                style={{ marginHorizontal: .5 }}


              >
                {item.title == 'Promos' && (
                  <Patiroot navigation={props.navigation} />
                )}
                {item.title == 'Home' && (
                  <HomeScreen navigation={props.navigation} />
                )}
                {item.title == 'Chat' && (
                  <ChatScreen navigation={props.navigation} />
                )}
              </BottomSheet>
              {item.title === 'Home' ? (
                <HomeToolbar
                  navigation={navigation}
                  ToolBarShown={ToolBarShown}
                  offset={offset}
                />
              ) : null}
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
    locationUpdateSuccess: searchScreen.locationUpdateSuccess,
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
    backgroundColor: Colors.GreenColor,
  },
  Imagecontainer: {
    flex: 1,
    flexDirection: "column",

  },
  image: {
    flex: 1,
    top: -100,
    height: '50%',
    width: '50%',
    resizeMode: "contain",
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },

});
