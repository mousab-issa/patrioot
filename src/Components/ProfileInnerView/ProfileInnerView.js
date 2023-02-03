import React from 'react';
import {
  I18nManager, Text,
  TouchableHighlight, View
} from 'react-native';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Styles from './Styles';

function MyAccountInnerComponent(props) {
  return (
    <View style={Styles.height_center}>
      <TouchableHighlight onPress={props.Click} style={{alignItems: 'center'}} underlayColor="none">
        <View style={Styles.for_height_flex}>
          <View style={Styles.firstHalf}>
            <CustomIcon
              name={props.name}
              type={props.type}
              iconStyle={{
                fontSize: Constants.ResponsiveSize.f25,
                color: '#000000',
                paddingHorizontal: Constants.ResponsiveSize.f5,
                ...props.iconStyle,
              }}
            />
            <Text style={Styles.optionStyle}>{props.Name}</Text>
          </View>
          <View style={Styles.center_align}>
            <CustomIcon
              name={I18nManager.isRTL ? 'ChevronRightRTL' : 'ChevronRight'}
              type={'SVG'}
              iconStyle={{
                fontSize: Constants.ResponsiveSize.f12,
                color: '#000000',
                ...props.iconStyle,
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
export default MyAccountInnerComponent;
