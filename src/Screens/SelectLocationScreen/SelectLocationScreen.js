import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  I18nManager,
  TouchableHighlight,
  Keyboard,
  NativeModules,
  Dimensions,
  Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Styles from './Styles';
import Languages from '../../common/Languages';
import CustomIcon from '../../common/CustomIcon';

import Animated,
{ useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import {
  setUserSearchCurrentLocation,
  setUserCurrentLocation,
  UpdateCurrentLocationAction
} from '../../redux/search_screen/action';

import Geolocation from '@react-native-community/geolocation';

import Constants from '../../common/Constants';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import LongButton from '../../Components/LongButton/LongButton';


const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { StatusBarManager } = NativeModules;

var isHidden = false;

function SelectLocationScreen(props) {

  const {
    loading,
    error,
    token,
    pickupAddress,
    selectedLanguage,
    UpdateCurrentLocation,
    setOrderPickupLocation,
    setUserSearchCurrentLocation
  } = props;
  const _map = useRef(null)
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(150);
  const [searchText, setsearchText] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addressHeading, setAddressHeading] = useState('');
  const [bottomViewHeigh, setBottomViewHeigh] = useState(Screen.width * 0.62);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [newSavedLocation, setNewLocation] = useState({});
  const [getlocationAddress, setLocationAddress] = useState("");

  const [map, setMap] = useState(null);
  const [initialRegion, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  })
  const [loadingMap, setLoadingMap] = useState(true);
  const mapContainer = useRef(null);

  useEffect(() => {
    // height: Screen.width * 0.705,
    const deviceHeight = (Screen.height * 1.05 - 480) / 10;
    const deviceHeightIOS = (926 - Screen.height) / 10;

    settingMapCentertoUserLocation()
    setKeyboardVerticalOffset(
      Platform.OS === 'ios'
        ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
        : 110 + deviceHeight + StatusBarManager.HEIGHT,
    );
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBottomViewHeigh(Screen.width * 0.625);
        setKeyboardVisible(true); // or some other action
        setKeyboardVerticalOffset(
          Platform.OS === 'ios'
            ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
            : 90 + StatusBarManager.HEIGHT,
        );
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setBottomViewHeigh(Screen.width * 0.625);
        setKeyboardVisible(false); // or some other action
        setKeyboardVerticalOffset(
          Platform.OS === 'ios'
            ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
            : 110 + deviceHeight + StatusBarManager.HEIGHT,
        );
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();

    };
  }, []);
  const settingMapCentertoUserLocation = () => {
    Geolocation.getCurrentPosition(async (position) => {
      setRegion({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      })
      setLoadingMap(false)
    }, (error) => {
      // alert(JSON.stringify(error))
      
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
      //maximumAge: 1000
    });

  };
  const animationPin = useSharedValue(1)
  const animationPinStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(animationPin.value, {
            duration: 300
          }),

        }
      ]
    }
  })

  const onBackClicked = () => {
    props.navigation.goBack();
  };

  const onMyLocationClicked = async () => {
    Geolocation.getCurrentPosition(async (position) => {
      _map.current?.animateToRegion({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }, 500);
    }, (error) => {
      // alert(JSON.stringify(error))
      
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
    });
  };

  const onNextClicked = () => {
    Alert.alert(
      Languages.Confirmation,
      Languages.AreYouSureYourLocation,
      [
        {
          text: Languages.Cancel,
          onPress: () => {},
          style: "cancel"
        },
        {
          text: Languages.OK , onPress: () => {
            setUserSearchCurrentLocation(getlocationAddress.city + ', ' + getlocationAddress.country)
            setOrderPickupLocation(newSavedLocation)
            const currentLocaion = {
              name: 'location',
              latitude: newSavedLocation.latitude,
              longitude: newSavedLocation.longitude,
            };
            UpdateCurrentLocation(currentLocaion, token);
            props.navigation.goBack();
          }
        }
      ],
      { cancelable: false }
    );
  };

  const onSearchTextChange = (value) => {
    setsearchText(value);
  };

  const onSearchAddress = () => {
    // alert('Done')
    props.navigation.navigate('ChoseLocation');
  };

  const onRegionWillChange = () => {
    animationPin.value = -40
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

  const onRegionDidChange = async (event) => {

    animationPin.value = -15 // pinLocation
    const displayAddress = await fetchAddress(event.latitude, event.longitude)
    const newLocaion = {
      latitude: event.latitude,
      longitude: event.longitude
    };
    setLocationAddress(displayAddress);
    setNewLocation(newLocaion);

    setSelectedAddress(displayAddress.place_name)
    setAddressHeading(displayAddress.text)

  };

  const bottomViewHeigh2 = 20;

  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => [bottomViewHeigh], []);

  return (
    <SafeAreaView style={Styles.container}>
      <>
        {loadingMap ?
          <View style={{ backgroundColor: "white", flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={"green"} />
          </View>
          :
          <>


            <MapView
              ref={_map}
              onRegionChange={() => { animationPin.value = -40 }}
              onRegionChangeComplete={onRegionDidChange}
              mapType={Platform.OS == "android" ? "standard" : "standard"}
              followsUserLocation
              showsUserLocation
              showsMyLocationButton={false}
              showsCompass
              rotateEnabled
              cacheEnabled={false}
              loadingEnabled
              scrollEnabled
              pitchEnabled
              moveOnMarkerPress
              loadingBackgroundColor={"white"}
              loadingIndicatorColor={'green'}
              focusable
              renderToHardwareTextureAndroid
              toolbarEnabled
              showsScale
              zoomTapEnabled
              liteMode={false}
              provider={PROVIDER_GOOGLE}
              style={{ ...Styles.map, backgroundColor: "white", }}
              initialRegion={initialRegion}
            >
            </MapView>
          </>
        }
      </>
      <Animated.View
        pointerEvents={'none'}
        style={[Styles.middlePIN, animationPinStyle]}
      >
        <CustomIcon name={"greenPin"} />
        {/* <Image
          source={require('../../../assets/images/greenPIN.png')}
          style={Styles.pinStyle}
          resizeMode="contain"
        /> */}
      </Animated.View>

      <View style={Styles.bottomView}>
        <View style={Styles.topBottom}>
          <View style={Styles.equalspace}>
            <TouchableHighlight onPress={onBackClicked} style={Styles.back_roundView} underlayColor="none">
              <CustomIcon name={I18nManager.isRTL ? 'FatBlackArrowRTL' : 'FatBlackArrow'}
                type={'SVG'}
                iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
            </TouchableHighlight>
          </View>
          <View style={[Styles.equalspace, { alignItems: 'flex-end' }]}>
            <TouchableHighlight
              onPress={onMyLocationClicked}
              style={Styles.location_roundView} underlayColor="none">
              <CustomIcon name={'GPSLocation'}
                type={'SVG'}
                iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
            </TouchableHighlight>
          </View>
        </View>
        <View style={Styles.innerBottom}>
          <View style={Styles.inner_line} />
          <View style={Styles.viewOuter}>

            <CustomIcon name={'GreenHand'}
              type={'SVG'}
              iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
            <Text style={Styles.text_size}>
              {Languages.SelectYourAddressFromMap}
            </Text>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={Styles.text_size}>
                {addressHeading}
              </Text>
              <Text style={Styles.text_size_2}>
                {selectedAddress}
              </Text>
            </View>
            <View style={Styles.buttonOuter}>
              <LongButton onButtonClick={onNextClicked} buttonText={Languages.Confirm} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = ({ orderLocation, User }) => {
  return {
    loading: orderLocation.loading,
    error: orderLocation.error,
    pickupAddress: orderLocation.pickupAddress,
    token: User.auth_token,
    selectedLanguage: User.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderPickupLocation: (locationData) => {
      dispatch(setUserCurrentLocation(locationData));
    },
    setUserSearchCurrentLocation: (user_search_current_location) => {
      dispatch(setUserSearchCurrentLocation(user_search_current_location));
    },
    UpdateCurrentLocation: (obj, token) => {
      dispatch(UpdateCurrentLocationAction(obj, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocationScreen);
