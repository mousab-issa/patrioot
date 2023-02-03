import React, { useRef, useState } from 'react';
import {
  I18nManager,
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
//Theming
import Theme from '../../../common/Theme';
import Colors from '../../../theme/colors';
import Constants from '../../../common/Constants';
import Languages from '../../../common/Languages';
// Test Reanimated
import Animated, { useAnimatedStyle } from 'react-native-reanimated';



const HomeToolbar = ({ ToolBarShown, offset, navigation, ...props }) => {
  const [measures, setMeasures] = useState([]);
  const ToolBarRef = useRef(null);


  onSearchClicked = (pSearchType) => {
    // navigation.navigate('SearchScreen', { searchType: pSearchType });
    navigation.navigate('PickupLocationMap');
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset ? offset.value : 0 }],
    };
  });

  return (
    <Animated.View
      ref={ToolBarRef}
      style={[styles.toolbarContainer, animatedStyles]}
      onLayout={(e) => setMeasures(e.nativeEvent.layout)}>


      <View style={styles.toolbarWrapper}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.toolbarbanner} />
        </View>

        <View
          style={{
            flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-evenly',
            marginTop: 8,
          }}>
          <View style={styles.toolbarContent}>
            <TouchableHighlight
              style={[
                styles.toolbarIconBackground,
                { backgroundColor: '#00AED6' },
              ]}
              onPress={() => this.onSearchClicked('pharmacy')}
              underlayColor="none">
              <Image source={Theme.med} style={styles.toolbarIcon} />
            </TouchableHighlight>
            <Text style={styles.toolbarText}>{Languages.Med}</Text>
          </View>
          <View style={styles.toolbarContent}>
            <TouchableHighlight
              style={[
                styles.toolbarIconBackground,
                { backgroundColor: '#00AA13' },
              ]}
              onPress={() => this.onSearchClicked('coffee')}
              underlayColor="none">
              <Image source={Theme.coffee} style={styles.toolbarIcon} />
            </TouchableHighlight>
            <Text style={styles.toolbarText}>{Languages.Coffee}</Text>
          </View>
          <View style={styles.toolbarContent}>
            <TouchableHighlight
              style={[
                styles.toolbarIconBackground,
                { backgroundColor: '#F06400' },
              ]}
              onPress={() => this.onSearchClicked('resturant')}
              underlayColor="none">
              <Image source={Theme.food} style={styles.toolbarIcon} />
            </TouchableHighlight>
            <Text style={styles.toolbarText}>{Languages.Food}</Text>
          </View>
          <View style={styles.toolbarContent}>
            <TouchableHighlight
              style={[
                styles.toolbarIconBackground,
                { backgroundColor: '#ED2736' },
              ]}
              onPress={() => this.onSearchClicked('market')}
              underlayColor="none">
              <Image source={Theme.market} style={styles.toolbarIcon} />
            </TouchableHighlight>
            <Text style={styles.toolbarText}>{Languages.Market}</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default HomeToolbar;

const styles = StyleSheet.create({
  toolbarContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '88%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  toolbarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowColor: '#ababab',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2.22,
    elevation: 5,
  },
  toolbarbanner: {
    marginTop: 8,
    height: 3,
    width: Constants.ResponsiveSize.f26,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  toolbarIconBackground: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  toolbarText: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f11,
    paddingVertical: 5,
  },
  toolbarContent: {
    alignItems: 'center',
  },
});
