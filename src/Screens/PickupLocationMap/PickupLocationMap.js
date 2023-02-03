import Geolocation from '@react-native-community/geolocation';
import React, {
  useEffect,
  useRef, useState
} from 'react';
import {
  ActivityIndicator, Dimensions, I18nManager, Keyboard,
  NativeModules,
  PermissionsAndroid, Platform, Text,
  TouchableHighlight, View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, {
  useAnimatedStyle, useSharedValue,
  withTiming
} from 'react-native-reanimated';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import CustomLottieIcon from '../../common/CustomLottieIcon';
import Languages from '../../common/Languages';
import LongButton from '../../Components/LongButton/LongButton';
import TouchableSearchBar from '../../Components/TouchableSearchBar/TouchableSearchBar';
import { setPickupLocationAction } from '../../redux/orderLocation/action';
import styles from './Styles';


const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { StatusBarManager } = NativeModules;

function PickupLocationMap(props) {
  const {
    loading,
    error,
    selectedLanguage,
    pickupAddress,
    pickupHeading,
    setOrderPickupLocation,
    orderLocation,
  } = props;

  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(150);
  const [bottomViewHeigh, setBottomViewHeigh] = useState(Screen.width * 0.62);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [StartAnimation, SetStartAnimation] = useState(false);

  let _map = useRef(null);
  const [initialRegion, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const [loadingMap, setMapLoading] = useState(false);
  useEffect(() => {
    settingMapCentertoUserLocation();
    const deviceHeight = (Screen.height * 1.05 - 480) / 10;
    const deviceHeightIOS = (926 - Screen.height) / 10;

    setKeyboardVerticalOffset(
      Platform.OS === 'ios'
        ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
        : 110 + deviceHeight + StatusBarManager.HEIGHT,
    );
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBottomViewHeigh(Screen.width * 0.625);
        setKeyboardVisible(true);
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
        setKeyboardVisible(false);
        setKeyboardVerticalOffset(
          Platform.OS === 'ios'
            ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
            : 110 + deviceHeight + StatusBarManager.HEIGHT,
        );
      },
    );
    if (Platform.OS == 'ios') {
      Geolocation.requestAuthorization();
    }
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const animationPin = useSharedValue(1);
  const animationPinStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(animationPin.value, {
            duration: 300,
          }),
        },
      ],
    };
  });

  const onBackClicked = () => {
    props.navigation.goBack();
  };
  const settingMapCentertoUserLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        setRegion({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
        _map.current?.animateToRegion(
          {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          },
          500,
        );
        setMapLoading(false);
      },
      (error) => {
        // alert(JSON.stringify(error));
        
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  };

  const onNextClicked = () => {
    if (pickupAddress) {
      props.navigation.navigate('DeliveryLocationMap');
    } else {
      Toast.showWithGravity(
        Languages.SelectValidPickupAddress,
        Toast.LONG,
        Toast.TOP,
      );
    }
  };
  const onSearchAddress = () => {
    props.navigation.navigate('ChoseLocation', {
      locationType: 'PICKUP',
      addressLocation: { pickupAddress },
      currentLocation: initialRegion,
    });
  };

  const fetchAddress = async (latitude, longitude) => {
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${Constants.GoogleAPIKey}&language=${selectedLanguage}`,
    );
    
    let json = await response.json();

    if (json.status == 'OK') {
      if (json.results[0]) {
        var country = null,
          countryCode = null,
          city = null,
          cityAlt = null;
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
          } else if (
            !city &&
            !cityAlt &&
            result.types[0] === 'administrative_area_level_1'
          ) {
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
        
        if (
          city == 'Riyadh' ||
          cityAlt == 'Riyadh' ||
          city == 'الرياض' ||
          cityAlt == 'الرياض' ||
          city == 'San Francisco'
        ) {
          return { text: country, place_name: json.results[0].formatted_address };
        } else {
          return { text: '', place_name: '' };
        }
      } else {
        return { text: '', place_name: '' };
      }
    } else {
      return { text: '', place_name: '' };
    }
  };

  const onMapReady = async () => {
    Platform.OS == 'android'
      ? await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      : '';
  };
  const _onRegionChange = async (event) => {
    const displayAddress = await fetchAddress(event.latitude, event.longitude);
    
    //Start Animation
    SetStartAnimation(false);
    animationPin.value = -15;
    const newLocaion = {
      latitude: event.latitude,
      longitude: event.longitude,
      pickupAddress: displayAddress.place_name,
      pickupHeading: displayAddress.text,
    };

    setOrderPickupLocation(newLocaion);
  };
  const onMyLocationClicked = async () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        _map.current?.animateToRegion(
          {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          },
          500,
        );
      },
      (error) => {
        // alert(JSON.stringify(error));
        
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  };

  return loadingMap ? (
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  ) : (
    <>
      <MapView
        ref={_map}
        onMapReady={onMapReady}
        onRegionChange={() => {
          animationPin.value = -40;
          SetStartAnimation(true);
        }}
        onRegionChangeComplete={_onRegionChange}
        mapType={Platform.OS == 'android' ? 'standard' : 'standard'}
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
        loadingBackgroundColor={'white'}
        loadingIndicatorColor={'green'}
        focusable
        renderToHardwareTextureAndroid
        toolbarEnabled
        showsScale
        zoomTapEnabled
        liteMode={false}
        provider={PROVIDER_GOOGLE}
        style={{ ...styles.map, backgroundColor: 'white' }}
        initialRegion={initialRegion}></MapView>

      <Animated.View
        pointerEvents={'none'}
        style={[styles.middlePIN, animationPinStyle]}>
        <CustomLottieIcon start={StartAnimation} name={'LoadingPickupIcon'} />
      </Animated.View>
      <View style={styles.bottomView}>
        <View style={styles.topBottom}>
          <View style={styles.equalspace}>
            <TouchableHighlight
              onPress={onBackClicked}
              style={styles.back_roundView}
              underlayColor="none">
              <CustomIcon
                name={I18nManager.isRTL ? 'FatBlackArrowRTL' : 'FatBlackArrow'}
                type={'SVG'}
                iconStyle={{
                  fontSize: Constants.ResponsiveSize.f12,
                  color: '#000000',
                  ...props.iconStyle,
                }}
              />
            </TouchableHighlight>
          </View>
          <View style={[styles.equalspace, { alignItems: 'flex-end' }]}>
            <TouchableHighlight
              onPress={onMyLocationClicked}
              style={styles.location_roundView}
              underlayColor="none">
              <CustomIcon
                name={'GPSLocation'}
                type={'SVG'}
                iconStyle={{
                  fontSize: Constants.ResponsiveSize.f12,
                  color: '#000000',
                  ...props.iconStyle,
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.innerBottom}>
          <View style={styles.inner_line} />
          <View style={styles.viewOuter}>
            <View style={styles.searchStyle}>
              <TouchableSearchBar
                searchText={Languages.SearchForYourPhone}
                onSearchAddress={onSearchAddress}
              />
            </View>
            <Text style={styles.text_size}>
              {Languages.SelectthePickupAdressfromthemap}
            </Text>
            <View
              style={
                pickupHeading != undefined && pickupHeading.length > 0
                  ? styles.addressOuter
                  : styles.addressOuter1
              }>
              <View style={styles.adressPart1}>
                <CustomLottieIcon start={true} name={'LoadingPickup'} />
              </View>
              <View style={(pickupHeading != undefined && pickupHeading.length > 0) ? styles.adressPart2 : styles.adressPart2_2}>
                <Text style={styles.inner_text_size}>
                  {pickupHeading != undefined && pickupHeading.length > 0
                    ? pickupHeading
                    : Languages.AreaNotSupported}
                </Text>
                {pickupAddress ? (
                  <Text numberOfLines={1} style={styles.addressSize}>
                    {pickupAddress}
                  </Text>
                ) : null}
              </View>
            </View>
            <View style={styles.buttonOuter}>
              <LongButton
                onButtonClick={onNextClicked}
                buttonText={Languages.Next}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const mapStateToProps = ({ orderLocation, User }) => {
  return {
    loading: orderLocation.loading,
    error: orderLocation.error,
    pickupAddress: orderLocation.pickupAddress,
    pickupHeading: orderLocation.pickupHeading,
    orderLocation: orderLocation,
    selectedLanguage: User.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderPickupLocation: (locationData) => {
      dispatch(setPickupLocationAction(locationData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocationMap);
