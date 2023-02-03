import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Styles from '../../Screens/ChatScreenView/Styles';


function LocationCard(props) {
  return (
    <View
      style={[Styles.chatUsercard]}>
      <View>
        <View style={Styles.LocationCardInner}>
          <Image
            source={require('../../../assets/images/map.png')}
            style={Styles.mapImage}
          />
          <View style={Styles.LocationsBoxDoubleTickTopView}>
            <View
              style={[
                Styles.doubleTickSpace,
                { flex: 2, alignItems: 'flex-start', marginLeft: 10 },
              ]}>
              <Text
                style={[
                  Styles.locationBoxTextStyle,
                  Styles.locationMessageText,
                ]}>
                {props.dbMessages.message}
              </Text>
            </View>
            <View
              style={[
                Styles.doubletickView,
                ,
                { flex: 1, alignItems: 'flex-end' },
              ]}>
              <Text style={[Styles.timeTextStyle, Styles.doubleTickText]}>
                11:00 pm
              </Text>
              <Image
                source={require('../../../assets/images/double_tick.png')}
                resizeMode="contain"
                style={Styles.doubleTickImage}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default LocationCard;
