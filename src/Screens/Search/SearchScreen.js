import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Animated,
  Dimensions,
  I18nManager,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import RNLocation from 'react-native-location';
import _ from 'lodash';

import Styles from './Styles';

import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import SearchedItem from '../../Components/SearchResturant/SearchedItem';
import NearByItem from '../../Components/SearchResturant/NearByItem';
import Languages from '../../common/Languages';
import Constants from '../../common/Constants';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import TouchableSearchBar from '../../Components/TouchableSearchBar/TouchableSearchBar';
import Colors from '../../theme/colors';
import CustomIcon from '../../common/CustomIcon';
import { Card } from 'native-base';
import Ripple from 'react-native-material-ripple';
import { GetNearByResturants, startNearByLoading, startFirstLoading } from '../../redux/search_screen/action';
import { SvgUri } from 'react-native-svg';
import NetInfo from "@react-native-community/netinfo";
//import { ScrollView } from 'react-native-gesture-handler';
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');


const { diffClamp } = Animated;
const headerHeight = Screen.width * (Screen.height < 800 ? 0.54 : 0.60);

const SearchScreen = ({
  navigation,
  nearByRestaurants,
  featured,
  user_current_location,
  categories,
  nearByLoading,
  nearByOffset,
  authToken,
  getNearByData,
  startNearByLoading,
  startFirstLoading,
  selectedLanguage,
  currentLatitude,
  currentLongitude,
  route
}) => {
  const [searchText, setsearchText] = useState('');
  const [isLoaded, setisLoaded] = useState(false);
  const [isfirst, setfirstState] = useState(0);
  const [isLocationSupported, setIsLocationSupported] = useState(true);
  const [scrollYAnimatedValue, setscrollYAnimatedValue] = useState(
    new Animated.Value(0),
  );
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  // const [gLatitude, setlatitude] = useState(currentLatitude);
  // const [gLongitude, setlongitude] = useState(currentLongitude);
  const [gLatitude, setlatitude] = useState();
  const [gLongitude, setlongitude] = useState();
  const [nearbySearchType, setNearbySearchType] = useState('resturant');
  const [OrderListData, setOrderListData] = useState(nearByRestaurants);
  const [getFilterList, setFilterList] = useState([]);
  const [getfilterIds, setfilterIds] = useState([]);
  const [nearByData, setNearByData] = useState(featured);
  const [foodCategories, setFoodCategories] = useState(_.cloneDeep(categories));
  const [tempFoodCategories, setTempFoodCategories] = useState(
    _.cloneDeep(categories),
  ); //temp for styling

  const onLocationClicked = () => {

    LocationRequestPermission();
  };

  const onEditLocationClicked = () => {
    navigation.navigate('SelectLocationScreen');
  };

  const onSearchClicked = () => {

    navigation.navigate('SearchScreenInput', { nearbySearchType });
  };

  useEffect(() => {



    RNLocation.configure({
      distanceFilter: 5.0,
    });

    
    if (gLatitude != undefined && gLongitude != undefined) {
      if (gLatitude != currentLatitude || gLongitude != currentLongitude) {
        if (!nearByLoading) {
          setlatitude(currentLatitude);
          setlongitude(currentLongitude);
        }
        
      }
    }
  }, [currentLatitude, currentLongitude]);

  useEffect(() => {
    if (!nearByLoading && isfirst > 0) {
      
      setisLoaded(false);
      startNearByLoading(true);
      callNearByApi(nearbySearchType, 0, gLatitude, gLongitude);
    }
  }, [gLatitude])
  useEffect(() => {
    setisLoaded(!nearByLoading);
  }, [nearByLoading]);

  useEffect(() => {
    setOrderListData(nearByRestaurants);
    setFoodCategories(_.cloneDeep(categories));
    setTempFoodCategories(_.cloneDeep(categories));
  }, [nearByRestaurants, categories]);

  useEffect(() => {
    setlatitude(currentLatitude);
    setlongitude(currentLongitude);
    const searchType = route.params.searchType;
    
    setNearbySearchType(searchType);
    setisLoaded(false);
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        if (isfirst === 0 && currentLatitude != undefined && currentLongitude != undefined) {
          setfirstState(isfirst + 1);
          
          if (nearByOffset == 0 && !nearByLoading) {
            startNearByLoading(true);
            startFirstLoading(true);
            callNearByApi(searchType, nearByOffset, currentLatitude, currentLongitude);
          }
          else {
            setisLoaded(true);
            startNearByLoading(false);
          }
        }
        else {
          setisLoaded(true);
          startNearByLoading(false);
        }
      }
      else {
        setfirstState(0);
      }
    });
    return (() => {
      unsubscribe();
    })
  }, []);

  const LocationRequestPermission = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          (locations) => {
            
            if (locations.length > 0) {
              let latitude = locations[0].latitude;
              let longitude = locations[0].longitude;
              // setlatitude(latitude);
              // setlongitude(longitude);
            }
          },
        );
      }
    });
  };
  const callNearByApi = (pSearchType, currentoffset, lat, lng) => {
    const lang = selectedLanguage;
    const offset = currentoffset;
    const latitude = lat;
    const longitude = lng;
    const type = pSearchType;
    const data = {
      lang,
      offset,
      latitude,
      longitude,
      type
    };
    getNearByData(data, authToken);
  }
  const onSearchTextChange = (value) => {
    setsearchText(value);
  };
  const onResturantItemClicked = () => {

  };

  const onSearchItemClicked = (item) => {
    //  
    if (isLoaded) {
      if (!item.closed) {
        navigation.navigate('SearchResturant', {
          item
        });
      }
    }
  };

  const onFeaturedSearchItemClicked = (item) => {
    // 
    if (isLoaded) {
      if (!item.closed) {
        navigation.navigate('SearchResturant', {
          item
        });
      }
    }
  };

  const onBackClicked = () => {
    startFirstLoading(true);
    navigation.goBack();
  };

  const onOrderNowClicked = () => {
    navigation.navigate('OrderFormScreen');
  };

  // New search header
  // *********************************

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const deviceMultiple =
    (Screen.height < 800 ? (DeviceInfo.hasNotch() ? 0.80 : 0.82) : (DeviceInfo.hasNotch() ? 0.9 : 0.91)) +
    (Platform.OS == 'android' ? 0.04 : 0.00001);
  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight * deviceMultiple)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function categoryPressed(id, index) {
    if (isLoaded) {
      let temp = [...tempFoodCategories];
      let tempResturantList = [...OrderListData];
      temp[index].selected = !temp[index].selected;
      /////
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      ////
      setTempFoodCategories(temp);
      let concatAndFilter = [];
      let filterIds = [];
      if (temp[index].selected) {
        filterIds = getfilterIds.concat(id);
      }
      else {
        filterIds = getfilterIds.filter((item) => item != id);
      }
      setfilterIds(filterIds);
      
      filterIds.forEach((currentId) => {
        if (currentId != null){
          
          const tempFilteredList = tempResturantList.filter((item) => item.tagIds.includes(currentId.toString()));
          
          concatAndFilter = concatAndFilter.concat(tempFilteredList.filter((item) => concatAndFilter.indexOf(item) < 0));
          
        }
      }
      );
      setFilterList(concatAndFilter);
      
      
      
    }
  }

  function renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => categoryPressed(item.id, index)}>
        <View
          key={item.id}
          style={
            tempFoodCategories[index]?.selected
              ? Styles.nearByRestaurentSelected
              : Styles.nearByRestaurent
          }>
          <SvgUri
            width="12"
            height="12"
            uri={item.cover_pic}
            fill={
              tempFoodCategories[index]?.selected
                ? Colors.WhiteColor
                : Colors.TabSelectedBG
            }
            style={Styles.iconsNearByCategories}
          />
          <Text
            style={
              tempFoodCategories[index]?.selected
                ? Styles.foodTypeSelected
                : Styles.foodType
            }>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  const get12hourTime = (time24) => {
    if (time24 == null)
      return null;
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10) ? ("0" + h) : h;
    ts = h + ts.substr(2, 3);
    return ts;
  };
  const getAmPm = (time24) => {
    if (time24 == null)
      return null;
    var ts = time24;
    var H = +ts.substr(0, 2);
    var ampm = H < 12 ? Languages.AM : Languages.PM;
    return ampm;
  };
  const SearchItems = (item, index) => {
    return (
      <TouchableHighlight >
        <View key={index}>
          <Card style={Styles.nearByStyle}>
            <ShimmerPlaceholder
              visible={isLoaded}
              height={windowWidth * 0.5}
              isInteraction={false}
              width={windowWidth * 0.7}>
              <Ripple onPress={() => onFeaturedSearchItemClicked(item)}>
                <Image
                  resizeMode="cover"
                  style={Styles.bgImh}
                  source={{ uri: item.cover_pic }}
                />
                <View style={Styles.cardBottom}>
                  <Text numberOfLines={1} style={Styles.sizeFontLarge}>{item.name}</Text>
                  <Text style={Styles.sizeDetails}>{item.type}</Text>
                  {(item.from_hours != null && item.to_hours != null) && <Text style={[Styles.sizeDetails2, { marginBottom: 5 }]}>
                    <Text style={Styles.bold}>
                      {item.distance} {Languages.KM}
                    </Text>{' '}
                    {' | '}
                    <Text style={Styles.bold}>{get12hourTime(item.from_hours)}</Text> {getAmPm(item.from_hours)}{' '}
                    {Languages.TO} <Text style={Styles.bold}>{get12hourTime(item.to_hours)}</Text>{' '}
                    {getAmPm(item.to_hours)}
                    {' | '}
                    {Languages.Delivery}{' '}
                    <Text style={Styles.bold}>
                      {' '}
                      {item.delivery_charges} {Languages.SR}
                    </Text>
                  </Text>}
                  {(item.from_hours == null || item.to_hours == null) &&
                    <Text style={[Styles.sizeDetails2, { marginBottom: 5 }]}>
                      <Text style={Styles.bold}>
                        {item.distance} {Languages.KM}
                      </Text>{' '}
                      {' | '}
                      {Languages.Delivery}{' '}
                      <Text style={Styles.bold}>
                        {' '}
                        {item.delivery_charges} {Languages.SR}
                      </Text>
                    </Text>}
                </View>
              </Ripple>
            </ShimmerPlaceholder>
          </Card>
        </View>
      </TouchableHighlight>
    );
  };

  const SearchItemsTiny = (item, index) => {
    return (
      <TouchableOpacity>
        <View key={index}>
          <Card style={Styles.nearByStyle}>
            <ShimmerPlaceholder
              visible={isLoaded}
              height={windowWidth * 0.4}
              isInteraction={false}
              width={windowWidth * 0.5}>
              <Ripple onPress={() => onFeaturedSearchItemClicked(item)}>
                <Image
                  resizeMode="cover"
                  style={Styles.bgImhTiny}
                  source={{ uri: item.cover_pic }}
                />
                <View style={Styles.cardBottom}>
                  <Text numberOfLines={1} style={Styles.sizeFont}>{item.name}</Text>
                  <Text style={Styles.sizeDetails}>{item.type}</Text>
                  {<Text style={[Styles.sizeDetails2, { marginBottom: 3 }]}>
                    <Text style={Styles.bold}>
                      {item.distance} {Languages.KM}
                    </Text>{' '}
                    {' | '}
                    {Languages.Delivery}{' '}
                    <Text style={Styles.bold}>
                      {' '}
                      {item.delivery_charges} {Languages.SR}
                    </Text>
                  </Text>}
                </View>
              </Ripple>
            </ShimmerPlaceholder>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  const onResturantItemClickedCallback = React.useCallback(
    onResturantItemClicked,
    [],
  );
  function renderNearByItem(item) {
    return (
      <NearByItem
        onResturantItemClicked={onResturantItemClickedCallback}
        isLoaded={isLoaded}
        item={item}
      />
    );
  }

  const onSearchItemClickedCallback = React.useCallback(
    onSearchItemClicked,
    [],
  );
  const onOrderNowClickedCallback = React.useCallback(onOrderNowClicked, []);
  function renderSearchedItem(item, index) {
    return (
      <SearchedItem
        onSearchItemClicked={(item) => onSearchItemClicked(item)}
        onOrderNowClicked={onOrderNowClickedCallback}
        item={item}
        index={index}
        isLoaded={isLoaded}
      />
    );
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.topArea} />
      <View style={Styles.topViewStyle}>
        <View style={Styles.back_black}>
          <View style={Styles.backClick}>
            <TouchableHighlight onPress={onBackClicked} underlayColor="none">
              <CustomIcon
                name={I18nManager.isRTL ? 'BlackArrowRTL' : 'BlackArrow'}
                type={'SVG'}
                iconStyle={{
                  fontSize: Constants.ResponsiveSize.f12,
                  color: '#000000',
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={Styles.height_with_topView}>
          <View style={Styles.inner_view}>
            <TouchableHighlight
              onPress={onLocationClicked}
              style={Styles.mark}
              underlayColor="none">
              <CustomIcon
                name={'Location'}
                type={'SVG'}
                iconStyle={{
                  fontSize: Constants.ResponsiveSize.f12,
                  color: '#000000',
                }}
              />
            </TouchableHighlight>
            <Text numberOfLines={1} style={Styles.locationText}>
              {user_current_location}
            </Text>
            <TouchableHighlight
              onPress={onEditLocationClicked}
              style={Styles.edit_black}
              underlayColor="none">
              <CustomIcon
                name={'EditLocation'}
                type={'SVG'}
                iconStyle={{
                  fontSize: Constants.ResponsiveSize.f10,
                  color: '#000000',
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={Styles.height_and_center}>
        <TouchableSearchBar
          searchText={nearbySearchType == 'resturant' ? Languages.Searchforaresturant : (nearbySearchType == 'market' ? Languages.Searchforgroceries : (nearbySearchType == 'pharmacy' ? Languages.Searchforapharmacy : Languages.Searchforcoffee))}
          onSearchAddress={onSearchClicked}
        />
      </View>

      {isLocationSupported && OrderListData.length > 0 && (
        <Animated.View style={[Styles.topView, { transform: [{ translateY }] }]}>
          {Screen.height > 800 &&
            <View style={Styles.FlatList_view}>
              <FlatList
                data={featured}
                horizontal={true}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 2 }}
                keyExtractor={(resturant, index) => index}
                renderItem={({ item, index }) => SearchItems(item, index)}
              />
            </View>
          }

          {Screen.height <= 800 &&
            <View style={Styles.FlatList_view}>
              <FlatList
                data={featured}
                horizontal={true}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 2 }}
                keyExtractor={(resturant, index) => index}
                renderItem={({ item, index }) => SearchItemsTiny(item, index)}
              />
            </View>
          }

          <View style={Styles.food_flatlist}>
            <FlatList
              data={foodCategories}
              horizontal={true}
              removeClippedSubviews={false}
              keyExtractor={(resturant) => resturant.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => renderItem(item, index)}
            />
          </View>
        </Animated.View>
      )}
      {isLocationSupported && OrderListData.length > 0 && (
        <Animated.FlatList
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: headerHeight }}
          onScroll={handleScroll}
          ref={ref}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            
            if (nearByOffset > 1 && !nearByLoading && getFilterList.length == 0)
              callNearByApi(nearbySearchType, nearByOffset, gLatitude, gLongitude);
          }}
          alwaysBounceVertical={false}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={Styles.listMargin}
          data={getFilterList.length > 0 ? getFilterList : OrderListData}
          removeClippedSubviews={false}
          keyExtractor={(notification, index) => index}
          renderItem={({ item, index }) => renderSearchedItem(item, index)}
        />
      )}
      {
        OrderListData.length == 0 &&
        <View style={Styles.noLocation}>
          <Image
            source={require('../../../assets/images/ico_location.png')}
            resizeMode="contain"
            style={Styles.locationNotIn}
          />
          <Text style={Styles.locationNotFoundText}>
            {nearbySearchType == 'resturant' ? Languages.NoNearByRestaurant : (nearbySearchType == 'market' ? Languages.NoNearByGroceries : (nearbySearchType == 'pharmacy' ? Languages.NoNearByMed : Languages.NoNearByCoffee))}
          </Text>
        </View>
      }
      {!isLocationSupported && (
        <View style={Styles.noLocation}>
          <Image
            source={require('../../../assets/images/ico_location.png')}
            resizeMode="contain"
            style={Styles.locationNotIn}
          />
          <Text style={Styles.locationNotFoundText}>
            {Languages.LocationNotSupported}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
const mapStateToProps = ({ searchScreen, User }) => {
  return {
    authToken: User.auth_token,
    selectedLanguage: User.selectedLanguage,
    nearByRestaurants: searchScreen.nearby_resturent_data,
    featured: searchScreen.nearby_featured_resturent_data,
    nearByOffset: searchScreen.nearByOffset,
    nearByLoading: searchScreen.nearByLoading,
    user_current_location: searchScreen.user_search_current_location,
    categories: searchScreen.categories,
    currentLatitude: searchScreen.currentLatitude,
    currentLongitude: searchScreen.currentLongitude,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getNearByData: (obj, token) => dispatch(GetNearByResturants(obj, token)),
    startNearByLoading: (status) => dispatch(startNearByLoading(status)),
    startFirstLoading: (status) => dispatch(startFirstLoading(status)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
