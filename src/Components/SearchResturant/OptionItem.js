import React from 'react';
import {
  Dimensions,
  I18nManager,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const OptionItem = ({ selected, categoryPressed, item }) => {
  return (
    <TouchableOpacity onPress={() => categoryPressed(item.id)}>
      <View
        key={item.id}
        style={
          selected ? styles.nearByRestaurentSelected : styles.nearByRestaurent
        }>
        <Icon
          name={item.icon}
          size={12}
          color={selected ? 'white' : 'black'}
          style={styles.iconsNearByCategories}
        />
        <Text style={selected ? styles.foodTypeSelected : styles.foodType}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nearByRestaurentSelected: {
    height: RFValue(29),
    borderRadius: 10,
    backgroundColor: '#55545A',
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  nearByRestaurent: {
    height: RFValue(29),
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  iconsNearByCategories: {
    marginRight: 5,
  },
  foodType: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
  },
  foodTypeSelected: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
  },
});


export default React.memo(OptionItem);
