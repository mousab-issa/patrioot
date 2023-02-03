import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import Styles from './Styles';

function CancelPopUpScreen(props) {

  const setModelVisible = () => {
    props.onModalClose();
  };
  return (
    <View>
      <View style={Styles.pop_up_opacity} />
      <View style={Styles.main_view}>
        <View style={Styles.pop_up}>
          <View style={Styles.margin_popup}>
            <View style={Styles.center_text}>
              <View style={Styles.pop_up_img}>
                <Image
                  style={Styles.block_img_size}
                  resizeMode="contain"
                  source={require('../../../assets/images/block.png')}
                />
              </View>
            </View>
            <View style={Styles.marginFrompopup}>
              <Text style={Styles.inner_text_size}>
                {Languages.CANCELING_ORDER_POPUP}
                <Text style={{ color: '#FF0000' }}>
                  {Languages.CANCELING_ORDER_POPUP_4SAR}
                </Text>
                {Languages.PROFILE_CHECKED}
              </Text>
            </View>
            <View style={Styles.textTop}>
              <View style={Styles.center_textBottom}>
                <TouchableHighlight
                  onPress={() => {
                    setModelVisible();
                  }}
                  style={Styles.buttonsMargin}
                  underlayColor="none">
                  <View style={Styles.cancel_btn}>
                    <Text style={Styles.exist_text}>{Languages.Cancel}</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => {
                    setModelVisible();
                  }}
                  style={Styles.buttonsMargin}
                  underlayColor="none">
                  <View style={Styles.continue_btn}>
                    <Text style={Styles.exist_text}>{Languages.Continue}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CancelPopUpScreen;
