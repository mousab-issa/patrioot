import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import Styles from './Styles';

function PopUpScreen(props) {
  const setModelVisible = () => {
    props.onModalClose();
  };
  const setChangeLogo = () => {
    props.onChangeLogo();
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
                {Languages.Youhavebeen}{' '}
                <Text style={{ color: 'red' }}>{Languages.blocked}</Text>{' '}
                {Languages.for} <Text style={{ color: 'red' }}> 8h </Text>
                {Languages.becuaseyourejectedorders}{' '}
                <Text style={{ color: 'red' }}>3 </Text>
                {Languages.times}
              </Text>
            </View>
            <View style={Styles.textTop}>
              <View style={Styles.center_text}>
                <TouchableHighlight
                  onPress={() => {
                    setModelVisible();
                    //  setChangeLogo()
                  }}
                  underlayColor="none">
                  <View style={Styles.exist_btn}>
                    <Text style={Styles.exist_text}>{Languages.Exit}</Text>
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
export default PopUpScreen;
