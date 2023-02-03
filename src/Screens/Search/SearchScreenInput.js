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
  TextInput,
  Animated,
  Dimensions,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import RNLocation from 'react-native-location';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import Colors from '../../theme/colors';
import CustomIcon from '../../common/CustomIcon';
import { GetAutoCompleteSearchVendor, startLoading } from '../../redux/search_screen/action';

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


const { diffClamp } = Animated;
const headerHeight = 0;

const SearchScreenInput = ({
  navigation,
  searchData,
  nearby_resturent_data,
  authToken,
  selectedLanguage,
  user_current_location,
  categories,
  currentOffset,
  getAutoCompleteData,
  startLoading,
  isLoading,
  currentLatitude,
  currentLongitude,
  route
}) => {
  const [searchText, setsearchText] = useState('');
  const [isLoaded, setisLoaded] = useState(!isLoading);
  const [isLocationSupported, setIsLocationSupported] = useState(true);
  const [scrollYAnimatedValue, setscrollYAnimatedValue] = useState(
    new Animated.Value(0),
  );
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  const [searchTextInputRef, setSearchTextInputRef] = useState(React.createRef());
  const [OrderListData, setOrderListData] = useState(searchData);
  const [nearByData, setNearByData] = useState(nearby_resturent_data);
  const [nearbySearchType, setNearbySearchType] = useState('resturant');
  const [gLatitude, setlatitude] = useState(24.7136);
  const [gLongitude, setlongitude] = useState(46.6753);
  const [lastSearch, setLastSearch] = useState('');
  const [tempFoodCategories, setTempFoodCategories] = useState(
    _.cloneDeep(categories),
  ); 

  useEffect(() => {

    const searchType = route.params.nearbySearchType;
    
    
    setNearbySearchType(searchType);
    searchTextInputRef.current.focus()

    if (user_current_location.includes('Riyadh') || user_current_location.includes('الرياض')) {
      setIsLocationSupported(true)
    }
    else {
      setIsLocationSupported(false)
    }
    setOrderListData(searchData);
    setisLoaded(!isLoading);
    
  }, [user_current_location, isLoading, searchData]);

  const onSearchTextChange = (value) => {
    setsearchText(value);
    clearTimeout(this.timeoutHandle);
    if (value.length > 0)
     {    setisLoaded(false);
        setOrderListData([{},{},{}])
        this.timeoutHandle = setTimeout(() => {
        callSearchApi(value);
        setisLoaded(false);
        setOrderListData([{},{},{}])
        clearTimeout(this.timeoutHandle);
        setLastSearch(value);
      }, 500);}
      else{
        setisLoaded(true);
        setOrderListData([])
      
      }
  };
  const callSearchApi = (textInput) => {
    const name = textInput;
    const lang = selectedLanguage;
    const offset = currentOffset;
    const latitude = gLatitude;
    const longitude = gLongitude;
    const type = nearbySearchType;
    const data = {
      name,
      lang,
      offset,
      latitude,
      longitude,
      type
    };
    if (offset == 0)
      startLoading();
    getAutoCompleteData(data, authToken);
  }
  const onResturantItemClicked = () => {
  };

  const onSearchItemClicked = (item) => {
    if (!item.closed) {
      navigation.navigate('SearchResturant', {
        item
      });
    }
  };

  const onOrderNowClicked = () => {
    navigation.navigate('OrderFormScreen');
  };

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const deviceMultiple = (DeviceInfo.hasNotch() ? 0.90 : 0.91) + (Platform.OS == 'android' ? 0.04 : 0.00001);
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

  function categoryPressed(id) {
    let temp = [...tempFoodCategories];
    temp[id - 1].selected = !temp[id - 1].selected;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    setTempFoodCategories(temp);

  }

  function renderItem(item) {
    return (
      <TouchableOpacity onPress={() => categoryPressed(item.id)}>
        <View
          key={item.id}
          style={
            tempFoodCategories[item.id - 1].selected
              ? Styles.nearByRestaurentSelected
              : Styles.nearByRestaurent
          }>
          <Icon
            name={item.icon}
            size={12}
            color={tempFoodCategories[item.id - 1].selected ? Colors.WhiteColor : Colors.TabSelectedBG}
            style={Styles.iconsNearByCategories}
          />
          <Text
            style={
              tempFoodCategories[item.id - 1].selected
                ? Styles.foodTypeSelected
                : Styles.foodType
            }>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

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
            <BackBlackArrow navigation={navigation} />
          </View>
        </View>
        <View style={Styles.height_with_topView}>
          <View style={Styles.searchStyle}>
            <CustomIcon name={"search"} type="MaterialIcons" iconStyle={{ fontSize: Constants.ResponsiveSize.f22, paddingHorizontal: Constants.ResponsiveSize.f5 }} />

            <TextInput
              style={Styles.input_text}
              multiline={false}
              placeholder={nearbySearchType == 'resturant' ? Languages.Searchforaresturant : (nearbySearchType == 'market' ? Languages.Searchforgroceries : (nearbySearchType == 'pharmacy' ? Languages.Searchforapharmacy : Languages.Searchforcoffee))}
              keyboardType="default"
              placeholderTextColor="#A6A6A6"
              onChangeText={onSearchTextChange}
              value={searchText}
              ref={searchTextInputRef}
            />
          </View>
        </View>
      </View>

      {isLocationSupported && (
        <Animated.FlatList
          scrollEventThrottle={16}
          onEndReachedThreshold={0.5}
          onEndReached={({ distanceFromEnd }) => {
            
            if (currentOffset > 0 && searchText == lastSearch)
              callSearchApi(searchText);
          }}
          contentContainerStyle={{ paddingTop: headerHeight }}
          onScroll={handleScroll}
          ref={ref}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={Styles.listMargin}
          data={OrderListData}
          removeClippedSubviews={false}
          keyExtractor={(notification, index) => index}
          renderItem={({ item, index }) => renderSearchedItem(item, index)}
        />
      )}
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
    searchData: searchScreen.search_resturent_data,
    currentOffset: searchScreen.offset,
    isLoading: searchScreen.isLoading,
    nearby_resturent_data: searchScreen.nearby_resturent_data,
    user_current_location: searchScreen.user_search_current_location,
    categories: searchScreen.categories,
    currentLatitude: searchScreen.currentLatitude,
    currentLongitude: searchScreen.currentLongitude,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAutoCompleteData: (obj, token) => dispatch(GetAutoCompleteSearchVendor(obj, token)),
    startLoading: () => dispatch(startLoading(true)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreenInput);
