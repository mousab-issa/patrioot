import * as geolib from 'geolib';
import React, {
  useEffect,
  useRef, useState
} from 'react';
import {
  ActivityIndicator, I18nManager, Platform, Text,
  TouchableHighlight, TouchableOpacity, View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import Toast from 'react-native-simple-toast';
import CustomIcon from '../../common/CustomIcon';
import CustomLottieIcon from '../../common/CustomLottieIcon';
import Languages from '../../common/Languages';
import {
  GetLocationDistance,
  setEndAPIAction, setStartAPIAction
} from '../../redux/orderLocation/action';
import styles from './Styles';

function DeliverDistance(props) {
  const [mapCenterCoordinate, setMapCenterCoordinate] = useState({
    latitude: pickupLatitude,
    longitude: pickupLongitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  })
  const [loading, setLoading] = useState(false)
  const [pathCoords, setPathCoords] = useState([])

  const {
    error,
    isLoading,
    auth_token,
    selectedLanguage,
    pickupAddress,
    destinationAddress,
    orderFare,
    orderDistance,
    destinationLatitude,
    destinationLongitude,
    pickupLatitude,
    pickupLongitude,
    GetDistance,
    setStartAPI,
  } = props;


  const [isfirst, setfirstState] = useState(0);

  useEffect(() => {

    setMapCenterCoordinate({
      latitude: pickupLatitude,
      longitude: pickupLongitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    })
    // getPath()

    if (isfirst == 0) {
      setfirstState(isfirst + 1)
      if (!isLoading) {
        setStartAPI()

        getLocationDistance()
      }
    }


  }, [orderFare, orderDistance, isLoading, error])

  let _map = useRef(null)

  const onBackClicked = () => {
    props.navigation.goBack();
  };
  const OnEdit = () => {
    props.navigation.goBack();
  };

  const onOrderNowClicked = () => {
    if (isLoading)
      return;
    if (orderDistance > 0) {
      props.navigation.navigate('OrderDetails');
    }
    else {
      Toast.showWithGravity(
        Languages.InvalidDistance,
        Toast.SHORT,
        Toast.CENTER,
      );
    }

  };

  const getLocationDistance = () => {
    const lang = selectedLanguage;
    const pickup_latitude = pickupLatitude;
    const pickup_longitude = pickupLongitude;
    const dropoff_latitude = destinationLatitude;
    const dropoff_longitude = destinationLongitude;

    const data = {
      pickup_latitude,
      pickup_longitude,
      dropoff_latitude,
      dropoff_longitude,
      lang
    }

    GetDistance(data, auth_token)

  };

  // const getPath = () => {
  //   const decode = (t, e) => { for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) { a = null, h = 0, i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c]) } return d = d.map(function (t) { return { latitude: t[0], longitude: t[1] } }) }
  //   const mode = 'driving'; // 'walking';
  //   const origin = `${pickupLatitude},${pickupLongitude}`;
  //   const destination = `${destinationLatitude},${destinationLongitude}`;
  //   const APIKEY = Constants.GoogleAPIKey;
  //   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       if (responseJson.routes.length) {
  //         setPathCoords(decode(responseJson.routes[0].overview_polyline.points))
  //       }
  //       const new_center = [
  //         { latitude: destinationLatitude, longitude: destinationLongitude },
  //         { latitude: pickupLatitude, longitude: pickupLongitude },
  //       ]
  //       setTimeout(() =>
  //         _map.current?.fitToCoordinates(new_center, {
  //           edgePadding: {
  //             top: 250,
  //             right: 80,
  //             bottom: 250,
  //             left: 80
  //           },
  //           animated: true
  //         })
  //         , 300);
  //       setLoading(false)
  //     }).catch(e => { })
  // }
  const RenderAnnotation = ({ lat, lng, image }) => {
    const id = `pointAnnotation${image}`;
    const coordinate = { latitude: lat, longitude: lng }

    return (
      <Marker
        key={id}
        coordinate={coordinate}
        description={image}
        onPress={() => { _map.current?.animateToRegion({ ...coordinate, latitudeDelta: 0.001, longitudeDelta: 0.001 }, 500); }}
      >
        <CustomIcon name={image == 'pick' ? 'FinalPickup' : 'FinalDelivery'} />
      </Marker>
    );
  }
  return (
    <>
      {loading ?
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} color={"green"} />
        </View>
        :
        <>
          <MapView
            ref={_map}
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
            style={{ ...styles.map, backgroundColor: "white", }}
            initialRegion={mapCenterCoordinate}
          >
            <RenderAnnotation lat={pickupLatitude} lng={pickupLongitude} image={"pick"} />
            <RenderAnnotation lat={destinationLatitude} lng={destinationLongitude} image={"drop"} />
          </MapView>

          <View style={styles.mainBottom}>
            <TouchableHighlight onPress={onBackClicked} style={styles.back_roundView} underlayColor="none">
              <CustomIcon name={I18nManager.isRTL ? 'FatBlackArrowRTL' : 'FatBlackArrow'}
                type={'SVG'}
                iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
            </TouchableHighlight>
            <View style={styles.innerBottom}>
              <View style={styles.inner_line} />
              <View style={styles.leftPinImg}>
                <CustomIcon name={'TwinPins'}
                  type={'SVG'}
                  iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
                <Text style={styles.distanceSize}>{orderDistance} {Languages.KM}</Text>
              </View>
              <TouchableHighlight
                style={styles.bottomVieww}
                onPress={onOrderNowClicked}
                underlayColor="none">
                <View
                  style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                  {!isLoading &&
                    <View
                      style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.fontSixe, { marginLeft: 33 }]}>{Languages.OrderNow}</Text>
                      </View>
                      <View style={styles.marginn}>
                        <Text style={styles.fontSixe}> {orderFare} {Languages.SR} </Text>
                        <View style={styles.back_roundViewInner}>
                          <CustomIcon name={I18nManager.isRTL ? 'FatGreenArrowRTL' : 'FatGreenArrow'}
                            type={'SVG'}
                            iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
                        </View>
                      </View>
                    </View>}
                  {isLoading &&
                    <ActivityIndicator size="small" color="#fff" />
                  }
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.choseLocationbg}>
            <View style={styles.addressOuter}>
              <View style={styles.adressPart1}>
                <CustomLottieIcon start={false} name={'LoadingPickup'} />
              </View>
              <View style={styles.adressPart2}>
                <Text numberOfLines={1} style={styles.inner_text_size}>
                  {pickupAddress}
                </Text>
              </View>
            </View>
            <View style={styles.hrRowinner} />
            <View style={styles.rightEditView}>
              <TouchableOpacity onPress={OnEdit} style={styles.editView}>
                <Text style={styles.editText}>{Languages.Edit}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addressOuter}>
              <View style={styles.adressPart1}>
                <CustomLottieIcon start={false} name={'LoadingDelivery'} />

              </View>
              <View style={styles.adressPart2}>
                <Text numberOfLines={1} style={styles.inner_text_size}>
                  {destinationAddress}
                </Text>
              </View>
            </View>
          </View>
        </>
      }
    </>
  );
}

const mapStateToProps = ({ orderLocation, User }) => {

  return {
    isLoading: orderLocation.loading,
    error: orderLocation.error,
    pickupAddress: orderLocation.pickupAddress,
    destinationAddress: orderLocation.destinationAddress,
    orderFare: orderLocation.orderFare,
    orderDistance: orderLocation.orderDistance,
    destinationLatitude: orderLocation.destinationLatitude,
    destinationLongitude: orderLocation.destinationLongitude,
    pickupLatitude: orderLocation.pickupLatitude,
    pickupLongitude: orderLocation.pickupLongitude,
    auth_token: User.auth_token,
    selectedLanguage: User.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    setEndAPI: () => {
      dispatch(setEndAPIAction());
    },
    GetDistance: (obj, auth_token) => dispatch(GetLocationDistance(obj, auth_token)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(DeliverDistance);
