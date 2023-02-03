import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import Styles from './Styles';


function PopupConfirm(props) {
  function onEnterClicked() {
    props.onModalClose();
  }

  return (
    <View style={Styles.containerLoading}>
      <View style={Styles.popupInner}>
        <View style={Styles.popInnerView}>
          <View style={Styles.contentStyle}>
            <Text style={Styles.font}>{Languages.GoodPrice}</Text>
            <Text style={Styles.font}>0 SAR</Text>
          </View>
          <View style={Styles.contentStyleInner}>
            <Text style={Styles.font}>{Languages.DeliveryPrice}</Text>
            <Text style={Styles.font}>12 SAR</Text>
          </View>
          <View style={Styles.contentStyleInner2}>
            <Text style={Styles.font}>{Languages.AreYouSure}</Text>
          </View>
        </View>

        <View style={Styles.buttonOuter}>
          <View style={Styles.orderNoButton}>
            <TouchableHighlight onPress={onEnterClicked} underlayColor="none">
              <View style={Styles.sendButtonStyle}>
                <Text style={Styles.buttonText}>{Languages.Send}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.orderNoButton}>
            <TouchableHighlight underlayColor="none">
              <View style={Styles.editButtonStyle}>
                <Text style={Styles.buttonText}>{Languages.Edit}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
export default PopupConfirm;
