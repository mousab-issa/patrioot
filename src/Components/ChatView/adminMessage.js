import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Styles from '../../Screens/ChatScreenView/Styles';

function AdminMessage(props) {
  return (
    <View
      style={[Styles.chatAdmincard]}>
      <View style={Styles.adminCardInner}>
        <View style={Styles.adminCardInnerView}>
          <Text style={[Styles.chatTextStyle, Styles.adminCardInnerViewText]}>
            {props.dbMessages.message}
          </Text>
        </View>
        <View style={Styles.doubleTickTopView}>
          <View style={Styles.doubleTickSpace} />
          <View style={Styles.doubletickView}>
            <Text style={[Styles.timeTextStyle, Styles.doubleTickText]}>
              {props.dbMessages.messageTime}
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
  );
}
export default AdminMessage;
