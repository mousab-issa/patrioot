import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Styles from './Styles';



function TouchableSearchBar(props) {
  return (
    <TouchableHighlight
      style={Styles.searchStyle}
      onPress={props.onSearchAddress}
      underlayColor="none">
      <View style={Styles.searchInner}>
        <CustomIcon
          name={'search'}
          type="MaterialIcons"
          iconStyle={{
            fontSize: Constants.ResponsiveSize.f22,
            paddingHorizontal: Constants.ResponsiveSize.f5,
          }}
        />
        <Text style={Styles.text_for_find}>{props.searchText}</Text>
      </View>
    </TouchableHighlight>
  );
}
export default TouchableSearchBar;
