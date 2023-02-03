import React from 'react';
import { Dimensions, I18nManager, TouchableHighlight } from 'react-native';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';



const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

function BackBlackArrow(props) {
  const onBackClicked = () => {
    props.navigation.goBack();
  };

  return (
    <TouchableHighlight onPress={onBackClicked} underlayColor="none">
      <CustomIcon
        name={I18nManager.isRTL ? 'BlackArrowRTL' : 'BlackArrow'}
        type={'SVG'}
        iconStyle={{
          fontSize: Constants.ResponsiveSize.f12,
          color: '#000000',
          ...props.iconStyle,
        }}
      />
    </TouchableHighlight>
  );
}
export default BackBlackArrow;
