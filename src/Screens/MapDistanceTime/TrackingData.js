import React, { useState, useEffect } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import MQTT from 'sp-react-native-mqtt';
import styles from './Styles';
import {
  setTrackingLocationAction
} from '../../redux/chat/action';


const TrackingData = (props) => {
  const {
    orderId,
    userId,
    setTrackingLocation,
    orderIdData
  } = props;

  const [isMqttconnected, setMqttConnected] = useState(false);
  const [mqttClient, setMqttClient] = useState(null);

  useEffect(() => {

  }, []);

  useEffect(() => {
    
    const lorderId = orderId; //props.orderId;
    if (!isMqttconnected) {
      if(lorderId!=null){
        establishMqttConnection(lorderId);
      }
    }
  }, [isMqttconnected]);

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
              //  setNewDriverLatitude(parseFloat(locationData[0]));
              //  setNewDriverLongitude(parseFloat(locationData[1]));
              
              const dataLocation = {
                latitude: parseFloat(locationData[0]),
                longitude: parseFloat(locationData[1])
              }
             // cnonsole.log('RECEIVED Data: ', locationData[0], locationData[1], dataLocation)
             setTrackingLocation(dataLocation)
            }
          }
        }
      }
    }
  }

  return (
    <View>
    </View>
  );
};

const mapStateToProps = ({ chat, User }) => {
  return {
    orderId: chat.orderID,
    userId: User._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTrackingLocation: obj => dispatch(setTrackingLocationAction(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackingData);
