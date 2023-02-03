import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions, Image,
  SafeAreaView, Text,
  TouchableHighlight, TouchableOpacity, View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Languages from '../../common/Languages';
import styles from './Styles';


const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

var isHidden = false;

function MapLocation(props) {
  const [bounceValue, setbounceValue] = useState(new Animated.Value(0));
  useEffect(() => {
    _toggleSubview();
  });
  const onBackClicked = () => {
    props.navigation.goBack();
  };
  const onNextClicked = () => {
    props.navigation.navigate('PickupLocationMap');
  };

  const SlideDown = () => {
    _toggleSubview();
  };

  function _toggleSubview() {
    var toValue = 0;

    if (isHidden) {
      toValue = Screen.width * 0.705 - 30;
    }

    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();

    isHidden = !isHidden;
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
      </MapView>
      

      <TouchableOpacity onPress={onBackClicked} style={styles.back_btn_view}>
        <Text style={styles.back_btn_text}>{Languages.Back}</Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.bottomView, { transform: [{ translateY: bounceValue }] }]}>
        <TouchableOpacity onPress={SlideDown} style={styles.inner_line} />
        <View style={{ margin: 15 }}>
          <Text style={styles.text_size}>
            {Languages.PleaseSelectyourlocationfromthemap}
          </Text>
          <Text style={styles.inner_text_size}>
            {
              Languages.MovethemappintofindyourlocationandselecttheDeliveryaddress
            }
          </Text>
          <TouchableHighlight onPress={onNextClicked} underlayColor="none">
            <View style={styles.buttonStyle}>
              <Text style={styles.next_btn_text}>{Languages.Next}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

export default MapLocation;
