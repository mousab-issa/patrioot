import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Styles from './Styles';

function UserMessage(props) {
  return (
    <View
      style={[Styles.chatUsercard]}>
      <View style={Styles.UserCardInner}>
        <View style={Styles.userCardInnerView}>
          <Text style={[Styles.chatTextStyle, Styles.adminCardInnerViewText]}>
            {props.dbMessages.message}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default UserMessage;
