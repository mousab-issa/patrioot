import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Animated, Dimensions,
  I18nManager, Image, Linking,
  ScrollView, StyleSheet,
  Text, TouchableHighlight, TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import Theme from '../../common/Theme';
import ListingCard from '../../Components/Main/ListingCard';
import ListingCardImage from '../../Components/Main/ListingCardImage';
import Constants from './../../common/Constants';
import Languages from './../../common/Languages';
import Colors from './../../theme/colors';

const defaultFadeColors = [
  'rgba(255, 255, 255, 0.0)',
  'rgba(255, 255, 255, 0.7)',
  'rgba(255, 255, 255, 1)',
];
const { width, height } = Dimensions.get('screen');

class HomeScreen extends React.Component {
  state = {
    isFade: false,
    keyword: '',
  };

  offsetY = 0;
  scrollY = new Animated.Value(0);

  getStartFade() {
    const shadowPosY = this.scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [-40, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: shadowPosY,
          width: '100%',
          height: 40,
        }}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ width: '100%', height: 40 }}
          colors={defaultFadeColors}
          pointerEvents={'none'}
        />
      </Animated.View>
    );
  }

  onProfileClicked = () => {
    this.props.navigation.navigate('MyAccountScreen');
  };
  onSearchClicked = (pSearchType) => {
    this.props.navigation.navigate('SearchScreen', { searchType: pSearchType });
  // this.props.navigation.navigate('PickupLocationMap', { searchType: pSearchType });
  };

  onViewClicked = (item) => {
   
    if (item.inapp) {
      if (item.next_screen != null) {
        if (item.next_screen == 'SEARCH') {
          this.onSearchClicked('resturant')
        }
        else if (item.next_screen == 'CUSTOM_ORDER') {
          this.props.navigation.navigate('PickupLocationMap');
        }
        else if (item.next_screen == 'SETTINGS') {
          this.props.navigation.navigate('MyAccountScreen');
        }
      }
      else {
        this.props.navigation.navigate('PickupLocationMap');
      }
    }
    else {
      if (item.next_screen != null && item.next_screen.length > 5) {
        Linking.openURL(item.next_screen);
      }
      else {
        this.props.navigation.navigate('PickupLocationMap');
      }
    }
  };

  onChangeKeyword(text) {
    this.setState({ keyword: text });
  }

  searchLayout() {
    const { config } = this.props;

    return (
      <View
        style={
          styles.searchContainer
        }>
        <TouchableOpacity
          style={
            styles.inputWrapper
          }
          onPress={() => this.onSearchClicked('resturant')}>

          <Image
            source={Theme.search}
            style={{ height: 20, width: 20, resizeMode: 'contain' }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            style={{ width: 22, height: 22, resizeMode: 'contain' }}
          />
        </TouchableHighlight>
      </View>
    );
  }

  toolbarLayout() {
    const { config } = this.props;

    return (
      <View style={styles.toolbarContainer}>
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
      </View>
    );
  }

  render() {
    const { config, OrderListData, isLoading } = this.props;

    return (
      <Animated.View style={[styles.container]}>
        <View style={{ flex: 1, paddingBottom: 20, paddingTop: 5 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
              {
                useNativeDriver: false,
                listener: (e) => {
                  this.offsetY = e.nativeEvent.contentOffset.y;
                  if (this.offsetY <= 2) this.setState({ isFade: false });
                  else this.setState({ isFade: true });
                },
              },
            )}>
            {this.searchLayout()}

            {OrderListData.map((item, i) => {
              return (
                <View key={i}>
                  {!item.imageOnly && (
                    <ListingCard
                      onPress={() => this.onViewClicked(item)}
                      img={item.image}
                      title={item.title}
                      content={item.description}
                      hasText={!item.imageOnly}
                      isLoading={isLoading}
                    />
                  )}
                  {item.imageOnly && (
                    <ListingCardImage
                      onPress={() => this.onViewClicked(item)}
                      img={item.image}
                      title={item.title}
                      content={item.description}
                      hasText={!item.imageOnly}
                      isLoading={isLoading}
                    />
                  )}

                </View>
              );
            })}
          </ScrollView>

          {this.state.isFade && this.getStartFade()}

          {this.toolbarLayout()}
        </View>
      </Animated.View>
    );
  }
}

export default function (props) {
  const { colors } = useTheme();
  const config = useSelector((state) => state.config);
  const OrderListData = useSelector((state) => state.home_view.home_view_data);
  const isLoading = useSelector((state) => state.home_view.loading);

  return (
    <HomeScreen
      {...props}
      colors={colors}
      config={config}
      OrderListData={OrderListData}
      isLoading={isLoading}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
  inputWrapper_rtl: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: Theme.white,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#E8E8E8',
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
  searchMan_rtl: {
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
  searchContainer_rtl: {
    paddingHorizontal: 0,
    marginTop: Constants.ResponsiveSize.f6,
    marginBottom: Constants.ResponsiveSize.f5,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarContainer: {
    position: 'absolute',
    bottom: 30,
    width: width - 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingLeft: 5,
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
