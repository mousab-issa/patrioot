import React from 'react';
import {
  Text,
  View
} from 'react-native';
import BottomSheetButton from '../../common/BottomSheetButton';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Styles from './Styles';



function HomeViewBottomButtons(props) {

  return (
    <View style={Styles.center_view}>
      <BottomSheetButton onPress={props.click} style={Styles.center_in_home}>
        <View style={props.View_style}>
          <CustomIcon name={props.name} type={props.type} iconStyle={{ fontSize: Constants.ResponsiveSize.f22, color: '#FFFFFF', ...props.iconStyle, }} />
        </View>
        <Text style={Styles.textStyle}>{props.Img_name}</Text>
      </BottomSheetButton>
    </View>
  );
}

export default HomeViewBottomButtons;
