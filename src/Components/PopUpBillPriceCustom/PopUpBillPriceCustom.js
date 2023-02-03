import React, { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import Styles from './Styles';


function PopUpBillPriceCustom(props) {
  const [billVisible, setBillVisible] = useState(true);

  const onEnterClicked = () => {
    props.onModalClose();
  };


  return (
    <View>
      <View style={Styles.containerLoading}>
        <View style={Styles.popupInner}>
          <Image
            source={require('../../../assets/images/ico_chat.png')}
            resizeMode="contain"
            style={Styles.popupImage}
          />
          <Text style={Styles.billFontBold}>{Languages.billIssuance}</Text>
          <View style={Styles.billPopupInnerView}>
            <View style={Styles.billPopupInnerViewLeft}>
              {billVisible && (
                <View style={Styles.textOuter}>
                  <TextInput
                    placeholder={Languages.EnterPriceHere}
                    style={Styles.textInput}
                  />
                </View>
              )}
            </View>
            <View style={Styles.billPopupInnerViewRight}>
              <Text style={Styles.font}>{Languages.DeliveryCost}</Text>
              <View style={Styles.progressViewInner2Views}>
                <View style={Styles.progressNoConatiner}>
                  <Text style={Styles.progressNoText}>12 SAR</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={Styles.enterButtonView}>
            <TouchableHighlight onPress={onEnterClicked} underlayColor="none">
              <View style={Styles.enterButtonStyle}>
                <Text style={Styles.buttonText}>{Languages.Enter}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View />
    </View>
  );
}
export default PopUpBillPriceCustom;
