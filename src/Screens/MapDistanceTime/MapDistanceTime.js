import React, {
  useEffect,
  useRef, useState
} from 'react';
import {
  ActivityIndicator, Dimensions,
  I18nManager, Image, Platform, SafeAreaView, Text,
  TouchableOpacity, View
} from 'react-native';
import MapView, {
  AnimatedRegion, Marker,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import MQTT from 'sp-react-native-mqtt';
import Toast from 'react-native-simple-toast';
import Styles from './Styles';
import TrackingData from './TrackingData';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

var isHidden = false;

function MapDistanceTime(props) {

  const {
    orderId,
    userId,
    trackingLocation
  } = props;

  const [driverLocation, set_driverLocation] = useState({
    latitude: 24.571434165848927,
    longitude: 46.56661803154316,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [shopLocation, setShopLocation] = useState({
    latitude: 21.54328,
    longitude: 39.17251,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [myLocation, setMyLocation] = useState({
    latitude: 21.5246,
    longitude: 39.16327,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [ANIMATED_DRIVER_LOCATION, SET_ANIMATED_DRIVER_LOCATION] = useState(
    new AnimatedRegion(driverLocation),
  );

  const [loading, setLoading] = useState(true);
  const [pathCoords, setPathCoords] = useState([]);
  const [index, setIndex] = useState(0);
  const [orderID, setOrderID] = useState(null);
  const [driverName, setDriverName] = useState('');
  const [isFirst, setIsFirst] = useState(true);
  const [newDriverLatitude, setNewDriverLatitude] = useState(0.0);
  const [newDriverLongitude, setNewDriverLongitude] = useState(0.0);
  const [isMqttconnected, setMqttConnected] = useState(false);
  const [mqttClient, setMqttClient] = useState(null);
  const [mapCenterCoordinate, setMapCenterCoordinate] = useState({
    ...driverLocation,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  let _map = useRef(null);
  let _driver = useRef(null);
  let _shop = useRef(null);
  let _myLocation = useRef(null);

  useEffect(() => {
    const startLat = props.route.params.startLatitude;
    const startLong = props.route.params.startLongitude;
    const destinationLat = props.route.params.destinationLatitude;
    const destinationLong = props.route.params.destinationLongitude;
    const lorderId = props.route.params.orderId;
    const driverName = props.route.params.driverName

    setDriverName(driverName)
    setOrderID(lorderId);

    setShopLocation({
      latitude: startLat,
      longitude: startLong,
      latitudeDelta: 0,
      longitudeDelta: 0,
    });

    setMyLocation({
      latitude: destinationLat,
      longitude: destinationLong,
      latitudeDelta: 0,
      longitudeDelta: 0,
    });

    setLoading(false);
    // getPath();
    const new_center = [driverLocation, myLocation];//[driverLocation, shopLocation, myLocation];
    setTimeout(() => {
      _map.current?.fitToCoordinates(new_center, {
        edgePadding: {
          top: 180,
          right: 80,
          bottom: 180,
          left: 80,
        },
        animated: true,
      });
    }, 1300);

    _toggleSubview();
    return () => { };
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      try {
        if (pathCoords.length > 0) {
          if (index == pathCoords.length - 1) {
            clearInterval(time);
          } else {
            setIndex(index + 1);
          }

          if (Platform.OS === 'android') {
            SET_ANIMATED_DRIVER_LOCATION(
              new AnimatedRegion({
                ...pathCoords[index],
                latitudeDelta: 0,
                longitudeDelta: 0,
              }),
            );

            //  _driver.current.animateMarkerToCoordinate(pathCoords[index], 500);

          } else {
            ANIMATED_DRIVER_LOCATION.timing(pathCoords[index]).start();
          }
        } else {
          clearInterval(time);
        }
      } catch (e) {

      }
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, [pathCoords, index]);

  useEffect(() => {
    const lorderId = props.route.params.orderId;
    // if (!isMqttconnected) {
    //   establishMqttConnection(lorderId);
    // }
  }, [isMqttconnected]);

  useEffect(() => {

    if (newDriverLatitude != null && newDriverLongitude != null) {
      if (newDriverLatitude != 0 && newDriverLongitude != 0) {
        const animatedLocation = {
          latitude: newDriverLatitude,
          longitude: newDriverLongitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }
        setMapCenterCoordinate(animatedLocation)
        set_driverLocation(animatedLocation)
        SET_ANIMATED_DRIVER_LOCATION(new AnimatedRegion(animatedLocation))
      }
    }
  }, [newDriverLatitude, newDriverLongitude]);

  useEffect(() => {

    if (trackingLocation != null) {
      if (trackingLocation.latitude != 0 && trackingLocation.longitude != 0) {
        const animatedLocation = {
          latitude: trackingLocation.latitude,
          longitude: trackingLocation.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }
        const lData = trackingLocation.latitude + ', ' + trackingLocation.longitude

        set_driverLocation({
          latitude: trackingLocation.latitude,
          longitude: trackingLocation.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        });
        // Toast.showWithGravity(
        //   lData,
        //   Toast.SHORT,
        //   Toast.TOP,
        // );
        SET_ANIMATED_DRIVER_LOCATION(new AnimatedRegion(animatedLocation))
        if (isFirst) {
          const new_center = [animatedLocation, myLocation];//[driverLocation, shopLocation, myLocation];
          setTimeout(() => {
            _map.current?.fitToCoordinates(new_center, {
              edgePadding: {
                top: 180,
                right: 80,
                bottom: 180,
                left: 80,
              },
              animated: true,
            });
          }, 1300);
          setIsFirst(false)
        }


        //  _map.current?.animateCamera({center: animatedLocation,pitch: 2, heading: 20,altitude: 200, zoom: 15}, 20000)
        //  _map.current?.animateToRegion(animatedLocation, 1000)
        //  const new_center = [animatedLocation];//[driverLocation, shopLocation, myLocation];
        // setTimeout(() => {
        //   _map.current?.fitToCoordinates(new_center, {
        //     edgePadding: {
        //       top: 180,
        //       right: 200,
        //       bottom: 180,
        //       left: 200,
        //     },
        //     animated: true,
        //   });
        // }, 1300);
      }
    }
  }, [trackingLocation]);


  const onBackClicked = () => {
    props.navigation.goBack();
  };

  //************************************************************************************ */
  establishMqttConnection = (lorderId) => {


    MQTT.createClient({
      uri: Constants.MQTT_URI,
      clientId: 'CUSTOMER' + userId,
      user: Constants.MQTT_USER,
      // port:8883,
      // host:"patrioot.senarios.co",
      pass: Constants.MQTT_PASS,
      auth: true,
      // tls:true,
      keepalive: 1,
    }).then(function (client) {

      client.on('closed', function () {
        updateConnectingStatus("", false, false, null);

      });

      client.on('error', function (msg) {
        updateConnectingStatus(msg, true, false, client);

      });

      client.on('message', function (msg) {
        updateConnectingStatus(msg.data, false, true, client);

        updateReceivedData(msg)
      });

      client.on('connect', function () {
        updateConnectingStatus("", false, true, client);
        const channel = 'LOCATION' + lorderId

        client.subscribe(channel, 1);

      });

      client.connect();
    }).catch(function (err) {
      updateConnectingStatus(err, false, false, null)

    });
  }
  const updateConnectingStatus = (msg, isError, isConnected, client) => {
    // setMqttconnecting(false);
    setMqttConnected(isConnected);
    //  setMqttMessage(msg);
    // setMqttError(isError);
    setMqttClient(client);

  }

  const updateReceivedData = (msg) => {

    if (msg != null) {
      if (msg.data != null) { //ORDER_ID=56

        const msgData = msg.data.split('===')
        if (msgData.length > 1) {
          if (msgData[0] == 'LOCATION') {
            const locationData = msgData[1].split(',')

            if (locationData.length == 2) {
              setNewDriverLatitude(parseFloat(locationData[0]));
              setNewDriverLongitude(parseFloat(locationData[1]));
            }

          }
        }
      }
    }
  }

  //*********************************************************************************************** */

  function _toggleSubview() {
    var toValue = 0;

    if (isHidden) {
      toValue = Screen.width * 0.423 - 30;
    }

    isHidden = !isHidden;
  }

  const getPath = () => {
    const decode = (t, e) => {
      for (
        var n,
        o,
        u = 0,
        l = 0,
        r = 0,
        d = [],
        h = 0,
        i = 0,
        a = null,
        c = Math.pow(10, e || 5);
        u < t.length;

      ) {
        (a = null), (h = 0), (i = 0);
        do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
        while (a >= 32);
        (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
        do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
        while (a >= 32);
        (o = 1 & i ? ~(i >> 1) : i >> 1),
          (l += n),
          (r += o),
          d.push([l / c, r / c]);
      }
      return (d = d.map(function (t) {
        return { latitude: t[0], longitude: t[1] };
      }));
    };
    const mode = 'driving';
    const origin = `${myLocation.latitude},${myLocation.longitude}`;
    const destination = `${shopLocation.latitude},${shopLocation.longitude}`;

    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${Constants.GoogleAPIKey}&mode=${mode}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.routes.length) {
          setPathCoords(
            decode(responseJson.routes[0].overview_polyline.points),
          );
        }
      })
      .catch((e) => {

      });
  };

  const RenderAnnotation = ({ lat, lng, image }) => {
    const id = `pointAnnotation${image}`;
    const coordinate = { latitude: lat, longitude: lng };
    return (
      <Marker.Animated
        ref={
          image == 'driver' ? _driver : image == 'shop' ? _shop : _myLocation
        }
        key={id}
        coordinate={image == 'driver' ? ANIMATED_DRIVER_LOCATION : coordinate}
        description={image}
        onPress={() => {

          _map.current?.animateToRegion(
            { ...coordinate, latitudeDelta: 0.001, longitudeDelta: 0.001 },
            500,
          );
        }}>
        <View style={{ alignItems: 'center', marginBottom: image == 'driver' ? -35 : 0 }}>

          <Text
            style={{
              backgroundColor: 'white',
              fontSize: Constants.ResponsiveSize.f12,
              fontFamily: I18nManager.isRTL
                ? Constants.fontFamilyArabicMedium
                : Constants.fontFamilyMedium,
              padding: 4,
              flex: 1,
              textAlign: 'center',
              borderRadius: 6,
              overflow: 'hidden',
              alignSelf: 'center',
              marginBottom: image == 'driver' ? -20 : 5,
            }}>
            {image == 'myLocation'
              ? Languages.You
              : image == 'shop'
                ? Languages.Store
                : driverName}
          </Text>
          <CustomIcon name={image} />
        </View>
      </Marker.Animated>
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <>
        {loading ? (
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={'large'} color={'green'} />
          </View>
        ) : (
            <>
              <MapView
                ref={_map}
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
                style={{ ...Styles.map, backgroundColor: 'white' }}
                initialRegion={mapCenterCoordinate}>
                <RenderAnnotation
                  lat={shopLocation.latitude}
                  lng={shopLocation.longitude}
                  image={'shop'}
                />
                <RenderAnnotation
                  lat={myLocation.latitude}
                  lng={myLocation.longitude}
                  image={'myLocation'}
                />
                <RenderAnnotation
                  lat={driverLocation.latitude}
                  lng={driverLocation.longitude}
                  image={'driver'}
                />
              </MapView>
            </>
          )}
      </>
      <TouchableOpacity onPress={onBackClicked} style={Styles.back_roundView}>
        <Image
          source={Languages.BackGreenArrow}
          style={Styles.backArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TrackingData orderIdData={orderID} />
    </SafeAreaView>
  );
}

const mapStateToProps = ({ orderTracking, User, chat }) => {
  return {
    userId: User._id,
    orderId: chat.orderID,
    trackingLocation: chat.trackingLocation,

  };
};

export default connect(mapStateToProps, null)(MapDistanceTime);
