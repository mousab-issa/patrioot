import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Styles from './Styles';


function SupportMessage(props) {
  return (
    <View
      style={[Styles.chatAdmincard]}>
      <Image
        source={require('../../../assets/images/Logo_green.png')}
        resizeMode="contain"
        style={Styles.feedBackImage}
      />
      <View style={Styles.adminCardInner}>
        <View style={Styles.adminCardInnerView}>
          <Text style={[Styles.chatTextStyle, Styles.adminCardInnerViewText]}>
            {props.dbMessages.message}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default SupportMessage;
