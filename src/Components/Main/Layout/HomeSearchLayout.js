import React from 'react';
import {
  I18nManager,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
//Theming
import Theme from '../../../common/Theme';
import Languages from '../../../common/Languages';
import Colors from '../../../theme/colors';
import Constants from '../../../common/Constants';


const HomeSearchLayout = ({navigation}) => {
  onProfileClicked = () => {
   navigation.navigate('MyAccountScreen');
  };
  onSearchClicked = (pSearchType) => {
    // navigation.navigate('SearchScreen', {searchType: pSearchType});
      navigation.navigate('PickupLocationMap');
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity
        style={styles.inputWrapper}
        onPress={() => this.onSearchClicked('resturant')}>
        <Image
          source={Theme.search}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            numberOfLines={1}
            style={
              I18nManager.isRTL ? styles.searchInput_rtl : styles.searchInput
            }>
            {Languages.Hungry}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight
        style={[
          styles.searchMan,
          {
            marginLeft: 10,
            marginRight: 0,
          },
        ]}
        onPress={() => this.onProfileClicked()}
        underlayColor="none">
        <Image
          source={Theme.man}
          style={{width: 22, height: 22, resizeMode: 'contain'}}
        />
      </TouchableHighlight>
    </View>
  );
};

export default HomeSearchLayout;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.placeHolderBackground,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: Colors.borderSearchBar,
    borderWidth: 1,
    height: 40,
  },
  searchInput: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    width: '100%',
    paddingLeft: 10,
    fontSize: Constants.ResponsiveSize.f15,
    paddingHorizontal: 4,
    textAlign: 'left',
    color: '#7D7D7D',
  },
  searchInput_rtl: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    width: '100%',
    paddingRight: 10,
    fontSize: Constants.ResponsiveSize.f15,
    paddingHorizontal: 4,
    textAlign: 'left',
    color: '#7D7D7D',
  },
  searchMan: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 0,
    marginTop: Constants.ResponsiveSize.f6,
    marginBottom: Constants.ResponsiveSize.f5,
    flexDirection: 'row',
  },
});
