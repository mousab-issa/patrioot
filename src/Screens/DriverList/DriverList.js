import { CommonActions } from '@react-navigation/native';
import React, {
  useEffect,
  useState
} from 'react';
import {
  ActivityIndicator, Dimensions,
  FlatList, Image,
  Platform, SafeAreaView, Text,
  TouchableHighlight, TouchableOpacity,
  UIManager, View
} from 'react-native';
import Animated, {
  useAnimatedStyle, useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';
import TimerCountdown from '../../common/TimerCountdown';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import DriverListComponent from '../../Components/DriverListComponent/DriverListComponent';
import {
  accceptCustomOrder,
  CancleCustomOrder,
  GetAvailAbleDrivers,
  UpdateAcceptLoadingStatus,
  UpdateCancelApiStatus,
  setDriverListDataAction
} from '../../redux/driver_list/action';

import {
  setOrderIDAction,
  setNotificationDataAction,
  setSelectedRiderAction
} from '../../redux/chat/action';

import { addNotificationAction } from '../../redux/notification/action';
import Colors from '../../theme/colors';
import Styles from './Styles';
import MQTT from 'sp-react-native-mqtt';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const DriversList = (props) => {
  const {
    addNotificationData,
    driverList,
    getAvailableDriversList,
    authToken,
    driverApiLoading,
    errorMessage,
    timerCount,
    orderId,
    userId,
    cancelApiSuccess,
    selectedLanguage,
    cancelAPiLoading,
    cancelOrderApi,
    startCancleLoading,
    pickupLatitude,
    pickupLongitude,
    acceptOrderApi,
    acceptApiSuccess,
    acceptOrderLoading,
    acceptOrderLoadinUpdate,
    setOrderID,
    setNotificationData,
    setSelectedRider,
    fcmToken
  } = props;

  const [driverListData, setDriverListData] = useState([]);
  const [biddingDriverList, setBiddingDriverList] = useState(null);
  const [driverListTempData, setDriverListTempData] = useState([]);
  const [bottomViewHeigh, setBottomViewHeigh] = useState(Screen.width * 0.62);
  const [biddingDriver, setBiddingDriver] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [countDownTime, setCountDownTime] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState(null);
  const [orderAssigned, setOrderAssigned] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  //mqqtt states
  //  const [isMqttConnecting, setMqttconnecting] = useState(false);
  const [isMqttconnected, setMqttConnected] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
  //  const [isMqttError, setMqttError] = useState(false);
  const [isOrderCancelled, setIsOrderCancelled] = useState(false);
  const [mqttClient, setMqttClient] = useState(null);
  var lldriverData = null

  const FloatingDriver = (props) => {
    const animationView = useSharedValue(1);
    const animationOpacityView = useSharedValue(1);
    const animationViewStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withTiming(animationView.value, {
              duration: 3500,
            }),
          },
        ],
        opacity: withTiming(animationOpacityView.value, {
          duration: 1500,
        }),
      };
    });

    useEffect(() => {
      animationView.value = -(Screen.width * 0.25);
      animationOpacityView.value = 0;
    }, []);

    return (
      <Animated.View
        style={[Styles.handImg, { top: props.topDistance }, animationViewStyle]}>
        <Image
          style={Styles.handImage}
          source={require('../../../assets/images/hand.png')}
        />
      </Animated.View>
    );
  };
  useEffect(() => {
    const notificationData = props.route.params.notificationData;
    setOrderData(notificationData);
    setLoading(driverApiLoading);

    var driversList = [];
    for (driver in driverList) {
      var driverData = {
        id: driverList[driver].id,
        username: driverList[driver].username,
        phone: driverList[driver].phone,
        profile_pic: driverList[driver].profile_pic,
        location_name: driverList[driver].location_name,
        animate: false,
      }
      driversList.push(driverData)
    }

    if (driversList.length > 0) {

      lldriverData = driversList;
      //  setDriverListData(driversList);
      setDriverListTempData(prev => [...prev, driversList]);
    }


  }, [driverApiLoading, driverList, errorMessage]);

  useEffect(() => {
    //  setDriverListData();
    const data = {
      latitude: pickupLatitude,
      longitude: pickupLongitude,
    }
    getAvailableDriversList(data, authToken);
  }, []);

  useEffect(() => {

    if (biddingDriver > 0) {

      var lDriverList = driverListData;
      var messageIndex = lDriverList.findIndex(function (c) {
        return (c.id == biddingDriver || c.id == biddingDriver + '');
      });

      for (driver in lDriverList) {
        lDriverList[driver].animate = false;
      }
      if (lDriverList.length > messageIndex) {
        if (lDriverList[messageIndex] != null) {

          lDriverList[messageIndex].animate = true;
        }
      }
      //  setDriverListData(lDriverList)
      //  setBiddingDriver(0)
    }

  }, [biddingDriver]);

  useEffect(() => {
    if (!isMqttconnected)
      establishMqttConnection();
    return async () => {

      // if(mqttClient != null){
      //   mqttClient?.disconnect();
      // }
    }
  }, []);
 // }, [isMqttconnected, mqttClient]);

  useEffect(() => {
    if (!cancelAPiLoading && cancelApiSuccess && isOrderCancelled) {
      startCancleLoading(false);
      moveTOHomeScreen('CANCEL');
    }
  }, [cancelAPiLoading, cancelApiSuccess]);

  useEffect(() => {
    if (!acceptOrderLoading && acceptApiSuccess) {
      acceptOrderLoadinUpdate(false);
      moveTOHomeScreen('ACCEPT');
    }
  }, [acceptOrderLoading]);

  useEffect(() => {
    //setMessages([...messages, newMessage])

    if (orderData != null && biddingDriverList.order_id == orderData.order.id) {
      if (biddingDriverList != null && driverListData.length < 10) {
        var driverIndex = driverListData.findIndex(function (c) {
          return (c.id == biddingDriverList.id || c.id == biddingDriverList.id + '');
        });
        if (driverIndex < 0) {
          const _currentDrivers = [...driverListData];
          for (lDriver in _currentDrivers) {
            _currentDrivers[lDriver].animate = false;
          }
          //    if (driverListData.length == 0) {
          setDriverListData([...driverListData, biddingDriverList])
          //    }
          //    else {
          //       setDriverListData([_currentDrivers, biddingDriverList])
          //     }
        }
        else {
          const _currentDrivers = [...driverListData];
          for (lDriver in _currentDrivers) {
            _currentDrivers[lDriver].animate = false;
          }
          for (lDriverData in _currentDrivers) {
            if (_currentDrivers[lDriverData].id == biddingDriverList.id) {
              _currentDrivers[lDriverData].animate = true;
            }
          }
          setDriverListData(null)
          setDriverListData(_currentDrivers)
        }
      }
    }

  }, [biddingDriverList]);



  function onTimerTick() {
    if (countDownTime == 2) driverFactory(countDownTime);
    if (countDownTime == 4) driverFactory(countDownTime);
    if (countDownTime == 6) driverFactory(countDownTime);
    if (countDownTime == 8) driverFactory(countDownTime);
    if (countDownTime == 10) driverFactory(countDownTime);
  }

  const driverFactory = (itemNumber) => {

    return (
      <FloatingDriver id={1} topDistance={Screen.width * 0.25 * itemNumber} />
    );
  };

  const onBackClicked = () => {
    setIsFinished(true)
    const data = {
      order_id: orderId,
      cancellation_reason: "Time Up",
    }
    cancelOrderApi(data, authToken)
    props.navigation.goBack();
  };

  const onDriverItemClicked = (item, index) => {

    setSelectedDriver(item)
    if (acceptOrderLoading) return;
    if (orderAssigned) return;

    //lines to comment
    const driverData = 'ORDER_ID::' + orderId + '===DRIVER_ID::' + item.id
    const channel = 'ORDERID' + orderId

    // mqttClient.publish(channel, driverData, 1, true);

    acceptOrderLoadinUpdate(true);
    const data = {
      order_id: orderId,
      driver_id: item.id,
    }
    acceptOrderApi(data, authToken)

    var lDriverList = driverListData;
    for (driver in lDriverList) {
      lDriverList[driver].animate = false;
    }
    lDriverList[index].animate = true;
    // setDriverListData(lDriverList)
  };

  const updateReceivedData = (msg) => {
    if (msg != null) {
      if (msg.data != null) { //ORDER_ID=56
        const msgData = msg.data.split('=:=:')
        if (msgData.length > 1) {
          if (msgData[0] == 'DRIVER') {
            // const driverID = msgData[1]
            const driverData = msgData[1]

            const parsedDriver = JSON.parse(msgData[1])
            // const iDriverID = parseInt(driverID)
            //  setBiddingDriver(iDriverID)
            setBiddingDriverList(parsedDriver)
            // setMessages([...messages, newMessage])

          }
        }
      }
    }
  }

  //************************************************************************************ */
  establishMqttConnection = () => {

    // setMqttconnecting(true);
    // setMqttError(false);
    MQTT.createClient({
      uri: Constants.MQTT_URI,
      clientId: 'CUSTOMER' + userId, // 'hgfghjhjjvjcj',
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
      //  console.log('MQTT DIS connected');
        // if(!isFinished){
        //   mqttClient.reconnect();
        // }
        
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
        const channel = 'ORDERID' + orderId

        client.subscribe(channel, 1);
     //   console.log('MQTT connected');
      });

      client.connect();
    }).catch(function (err) {
      updateConnectingStatus(err, false, false, null)

    });
  }
  const updateConnectingStatus = (msg, isError, isConnected, client) => {
    //  setMqttconnecting(false);
 if(Platform.OS != 'ios'){
  setMqttConnected(isConnected);
 }
    
    //  setMqttMessage(msg);
    //  setMqttError(isError);
    if(client != null){
      setMqttClient(client);
    }
  }

  //*********************************************************************************************** */
  const moveTOHomeScreen = (orderStatus) => {
    setOrderAssigned(true)
    setIsFinished(true)

    const lOrder = {
      data: orderData,
    }
    if (orderStatus == 'ACCEPT') //CANCEL 
    {
      const driverData = 'ORDER_ID::' + lOrder.data.order.id + '===DRIVER_ID::' + selectedDriver.id

      const channel = 'ORDERID' + orderId

      if (mqttClient != null) {
        mqttClient.publish(channel, driverData, 1, false);
        mqttClient.unsubscribe(channel);
        MQTT.disconnectAll();
        mqttClient.disconnect();
        // MQTT.removeClient(mqttClient);

        //   mqttClient.disconnect();
      }

      setOrderID(lOrder.data.order.id)
      setNotificationData(lOrder)
      setSelectedRider(selectedDriver)
      const timeoutHandle = setTimeout(() => {
        clearTimeout(timeoutHandle);
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'ChatScreenView',
            },
          ],
        });
        props.navigation.dispatch(resetAction);
      }, 500);
      // props.navigation.navigate('ChatScreenView',
      //   {
      //     notificationData: lOrder,
      //     selectedRider: selectedDriver,
      //     orderId: lOrder.data.order.id
      //   });
    }
    else {
      if (mqttClient != null) {
        const channel = 'ORDERID' + orderId
        mqttClient.unsubscribe(channel);
        MQTT.disconnectAll();
        mqttClient.disconnect();
        // MQTT.removeClient(mqttClient);

        //   mqttClient.disconnect();
      }
      const timeoutHandle = setTimeout(() => {
        clearTimeout(timeoutHandle);
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'HomeScreen',
            },
          ],
        });
        props.navigation.dispatch(resetAction);
      }, 2500);
    }
  }
  const onDriverTimeElapsed = () => {
    if (acceptOrderLoading) return;
    if (orderAssigned) return;
    alert(Languages.OrderTimeOver);
    startCancleLoading(true);
    setIsOrderCancelled(true);
    const data = {
      order_id: orderId,
      lang: selectedLanguage,
      cancellation_reason: "Time Up",
    }
    cancelOrderApi(data, authToken);
    // mqttClient?.disconnect();

  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.centerTop}>
        <View style={Styles.forBack}>
          <View style={Styles.adressPart1}>
            <TouchableOpacity onPress={onBackClicked}>
              <BackBlackArrow navigation={props.navigation} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 7, justifyContent: 'center' }}>
            </View>
            <View style={{ flex: 3, alignItems: 'flex-end' }}>
              {!isLoading && <TimerCountdown
                colors={[
                  ['#00FF00', 0.4],
                  ['#F7B801', 0.4],
                  ['#A30000', 0.2],
                ]}
                size={Constants.ResponsiveSize.f35}
                duration={180}
                animatedColor={'#000000'}
                trailColor={'#FFFFFF'}
                remainingTime={180}
                strokeWidth={Constants.ResponsiveSize.f3}
                onComplete={() => {
                  onDriverTimeElapsed();
                }}
              />}
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.forBack2}>
        <Text style={Styles.size}>{Languages.ListOfDrivers}</Text>
      </View>
      {(driverListData != null && driverListData.length > 0) &&
        <FlatList
          data={driverListData}
          extraData={refresh}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              onPress={() => onDriverItemClicked(item, index)}
              underlayColor="none">
              <DriverListComponent item={item} />
            </TouchableHighlight>
          )}
        />}
      {(driverListData == null || driverListData.length == 0) &&
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' color={Colors.ButtonColor} />
        </View>
      }
    </SafeAreaView>
  );
};
const mapStateToProps = ({ driver_list, User, general, orderLocation }) => {
  return {
    userId: User._id,
    orderId: orderLocation.lastCustomOrderId,
    timerCount: general.driverListTimer,
    authToken: User.auth_token,
    fcmToken: User.fcmToken,
    selectedLanguage: User.selectedLanguage,
    driverList: driver_list.driverList,
    driverApiLoading: driver_list.driverApiLoading,
    errorMessage: driver_list.errorMessage,
    cancelAPiLoading: driver_list.cancelAPiLoading,
    cancelApiSuccess: driver_list.cancelApiSuccess,
    acceptOrderLoading: driver_list.acceptOrderLoading,
    acceptApiSuccess: driver_list.acceptApiSuccess,
    pickupLatitude: orderLocation.pickupLatitude,
    pickupLongitude: orderLocation.pickupLongitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNotificationData: (notificationData) => {
      dispatch(addNotificationAction(notificationData));
    },
    getAvailableDriversList: (obj, token) => {
      dispatch(GetAvailAbleDrivers(obj, token));
    },
    cancelOrderApi: (obj, token) => {
      dispatch(CancleCustomOrder(obj, token));
    },
    startCancleLoading: (token) => {
      dispatch(UpdateCancelApiStatus(token));
    },
    acceptOrderApi: (obj, token) => {
      dispatch(accceptCustomOrder(obj, token));
    },
    acceptOrderLoadinUpdate: (token) => {
      dispatch(UpdateAcceptLoadingStatus(token));
    },
    setOrderID: (orderId) => {
      dispatch(setOrderIDAction(orderId));
    },
    setNotificationData: (notificationData) => {
      dispatch(setNotificationDataAction(notificationData));
    },
    setSelectedRider: (riderData) => {
      dispatch(setSelectedRiderAction(riderData));
    },
    setDriverListData: () => {
      dispatch(setDriverListDataAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);

