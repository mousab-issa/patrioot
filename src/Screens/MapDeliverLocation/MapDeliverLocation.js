import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Languages from '../../common/Languages';
import Styles from './Styles';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

var isHidden = false;

function MapDeliverdLocation(props) {
  const [bounceValue, setbounceValue] = useState(new Animated.Value(0));

  useEffect(() => {
    _toggleSubview();
  });

  const onBackClicked = () => {
    props.navigation.goBack();
  };
  const onNextClicked = () => {
    alert('confirm clicked');
  };

  const SlideDown = () => {
    _toggleSubview();
  };

  function _toggleSubview() {
    var toValue = 0;

    if (isHidden) {
      toValue = Screen.width * 0.8225 - 30;
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
    <SafeAreaView style={Styles.container}>
      <MapView
        style={Styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
      </MapView>
      <TouchableOpacity onPress={onBackClicked} style={Styles.top_back_btn}>
        <Text style={Styles.back_text}>{Languages.Back}</Text>
      </TouchableOpacity>

      <Animated.View
        style={[Styles.viewStyle, { transform: [{ translateY: bounceValue }] }]}>
        <TouchableOpacity onPress={SlideDown} style={Styles.SlideDown_view} />
        <View style={{ margin: 5 }}>
          <View style={Styles.topRow}>
            <View style={Styles.for_location}>
              <Text style={Styles.fontsize_family}>
                {Languages.Pickuplocaiton}
              </Text>
              <Text style={Styles.inner_size}>Riydah, Saudi Arabia </Text>
            </View>
            <View style={Styles.view_location}>
              <Text style={Styles.fontsize_family}>
                {Languages.Deliverylocation}
              </Text>
              <Text style={Styles.inner_size}>Riydah, Saudi Arabia </Text>
            </View>
          </View>
          <View style={Styles.homeOuter}>
            <View style={Styles.flexdirecyion}>
              <View style={Styles.left_home_logo}>
                <Image
                  style={Styles.logo_size}
                  source={require('../../../assets/images/Home.png')}
                />
              </View>
              <View>
                <Text style={Styles.text_location}>{Languages.PickUp}</Text>
              </View>
            </View>
            <View style={Styles.center}>
              <View style={Styles.middleLine} />
              <Text style={Styles.distance}>32 KM</Text>
            </View>
            <View style={Styles.flexdirecyion}>
              <View style={Styles.right_home_logo}>
                <Image
                  style={Styles.logo_size}
                  source={require('../../../assets/images/Home.png')}
                />
              </View>
              <View>
                <Text style={Styles.text_location}>{Languages.Delivery}</Text>
              </View>
            </View>
          </View>
          <View style={Styles.row}>
            <Text style={Styles.price_text}>{Languages.Price}</Text>
            <View style={Styles.price_inner}>
              <Text style={Styles.text_sar}>12 SAR</Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={onNextClicked}
            style={Styles.next_view}
            underlayColor="none">
            <View style={Styles.buttonStyle}>
              <Text style={Styles.order_confirm}>{Languages.ConfirmOrder}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

export default MapDeliverdLocation;
