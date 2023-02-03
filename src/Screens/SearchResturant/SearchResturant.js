import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableHighlight,
  StatusBar,
  I18nManager,
  Dimensions,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Languages from '../../common/Languages';
import styles from './Styles';

import { addFood, GetRestaurantFood } from '../../redux/search_resturent/serarchResturentAction';
import MenuList from '../../Components/MenuList/MenuList';
import MenuHeader from '../../Components/MenuHeader/MenuHeader';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import _ from 'lodash';

import MenuItemsCategory from './MenuItemsCategory';

import {
  setSectionIndexAction
} from '../../redux/search_resturent/serarchResturentAction';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const EditOrder = (props) => {
  const { orderCount, totalPrice, currentVendorName, currentItem } = props;
  return (
    <TouchableHighlight style={styles.orderContainer} onPress={props.click} underlayColor="none">
      <View style={{ flexDirection: 'row', flex: 1, }}>
        <View style={styles.leftSide}>
          <Text style={styles.cartItemText}>{orderCount} {Languages.Item} </Text>
          <Text style={styles.cartItemText1}>{Languages.DeliveryFrom} {currentVendorName}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={[styles.boldText, { color: '#fff', fontSize: Constants.ResponsiveSize.f14 }]}>
            {totalPrice} {Languages.SR}
          </Text>
          <CustomIcon name={"bag"} type="FontAwesome5" iconStyle={{ color: '#FFFFFF', fontSize: Constants.ResponsiveSize.f20, marginRight: Constants.ResponsiveSize.f20 }} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const Item = (props) => (
  <View
    onLayout={e => props.onItemLayout(e, props.index)}>
    <Text style={styles.foodCategoryHeading}>{`${props.category.name}`}</Text>
    <MenuList data={props.data} branch={props.currentItem.branch_id} name={props.currentItem.name}
      loaded={props.loaded}
      distance={props.currentItem.distance} key={props.category.id} tabLabel={props.category.name} navigation={props.navigation} />
  </View>
);

const { diffClamp } = Animated;
const headerHeight = wp('45') + wp('16') + (Screen.height > 800 ? wp('0.1') : (Screen.height > 600 ? wp('09') : wp('12')));
React.memo(
  SearchResturant = (props) => {
    const {
      navigation,
      resturentDummyData,
      foodCategories,
      foodCategories_ar,
      //  selectFood,
      totalPrice,
      selectedVendorId,
      orderCount,
      authToken,
      selectedLanguage,
      getRestaurantFood,
      route,
      setSectionIndex,
    //  currentSelectedIndex,
      currentVendorName
    } = props;
    const [data, setRestaurantData] = useState([{ "products": [{}, {}, {}, {}, {}, {}, {}, {}, {}] }]);
    const [foodCategoriesData, setFoodCategory] = useState([{ "name": "" }]);
    const [isfirst, setFirstState] = useState(true);
    const [scrollList, setScrollPositionsList] = useState([]);
    const [isLoaded, setLoading] = useState(false);
    const [currentItem, setItem] = useState({});
    const [state, setState] = useState({
      sections: I18nManager.isRTL ? foodCategories_ar : foodCategories,
      currentSection: 0
    });
    const scrollView = useRef();
    const tabScrollView = useRef(null);
    useEffect(() => {
      
      const fetcheditem = _.cloneDeep(route.params.item);
     // const fetcheditem = route.params.item;
      if (selectedVendorId != fetcheditem.vendorId && isfirst) {
        setFirstState(false);
        callRestaurantDataApiCall(fetcheditem.vendor_id);
      }
      else {
        setLoading(true);
        setRestaurantData(resturentDummyData);
        var lfoodCategories = foodCategories;

        setFoodCategory(lfoodCategories)
        updatePositionList(resturentDummyData);
      }
      setItem(fetcheditem);
      
    }, [data, foodCategories, resturentDummyData])

    const updatePositionList = (dataList) => {
      let dataPositionList = [];
      for (var section = 0; section < dataList.length; section++) {
        if (section > 0) {
          var totalLenth = 0;
          for (var i = 0; i < section; i++)
            totalLenth += dataList[i].products.length;
          const moveToPOsition = Constants.ResponsiveSize.f84 * totalLenth
          dataPositionList.push(moveToPOsition);

        }
        else
          dataPositionList.push(0);

      }
      setScrollPositionsList(dataPositionList);
      

    }
    const callRestaurantDataApiCall = (vendorId) => {
      const vendor_id = vendorId;
      const lang = selectedLanguage;
      const data = {
        vendor_id,
        lang
      }
      
      getRestaurantFood(data, authToken);
    }

    const onBackClicked = () => {
      navigation.goBack();
    };

    const onCartClicked = () => {
      
      navigation.navigate('CartScreen', { currentItem });
    };


    // ********** Animated tabs events START **********
    // ******************************************

    const moveToSection = section => {
      // scroll view to section
      const moveToPOsition = wp('24') * 6 * section
      scrollView.current?.scrollTo({ x: 0, y: moveToPOsition, animated: true });
      // set state to current section
      setState((currentState) => ({ ...currentState, currentSection: section }))
    };

    const onItemLayout = ({ nativeEvent: { layout: { y } } }, section) => {
      setState(currentState => ({
        ...currentState,
        [section]: y
      }))
    };

    const ref = useRef(null);

    const scrollY = useRef(new Animated.Value(0));
    const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

    const translateY = scrollYClamped.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [0, -(headerHeight / 2.4)],
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
        listener: event => {
          onScroll(event);
        },
      },
    );


    let selectedSection = 0;
    const onScroll = ({ nativeEvent: { contentOffset: { y, x }, layoutMeasurement: { height, width }, contentSize } }) => {
      if (y < 0) return;
      let _currentSection = 0;
      // loop sections to calculate which section scrollview is on
      scrollList.forEach((value, index) => {
        // adding 15 to calculate Text's height  Constants.ResponsiveSize.f9
        const moveToPosition = value;
        if ((y + 15) > moveToPosition) _currentSection = index
      })

      if (selectedSection != _currentSection) {
        tabScrollView.current.scrollToIndex({ index: _currentSection, animated: true });
         setSectionIndex(_currentSection);
         selectedSection = _currentSection;
         
        //  setLoadingState(_currentSection)
      } 
    }

    const MenuTabClick = (section) => {
      if (section > 0) {
        var totalLenth = 0;
        for (var i = 0; i < section; i++)
          totalLenth += data[i].products.length;
        const moveToPOsition = (Constants.ResponsiveSize.f98 * totalLenth) - (section * Constants.ResponsiveSize.f8)
        

        scrollView.current?.scrollTo({ x: 0, y: moveToPOsition, animated: true });
      }
      else
        scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
    }
    const getTagList = (tags) => {
      
      if (tags == undefined)
        return "";
      var tagsList;
      if (tags.length > 1) {
        tagsList = tags[0].name + ", " + tags[1].name;
      }
      else if (tags.length == 1)
        tagsList = tags[0].name;
      else
        tagsList = "";
      return tagsList;
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
          <MenuHeader restaurent={{ name: currentItem.name, description: getTagList(currentItem.tags), coverimage: currentItem.cover_pic, thumbnail: currentItem.thumbnail }} navigation={navigation} />
          {foodCategoriesData != null && foodCategoriesData.length > 0 && foodCategoriesData[0].name.length > 0 &&
            <MenuItemsCategory menuItemCategories={foodCategoriesData} MenuTabClick={(index) => MenuTabClick(index)} tabScrollView={tabScrollView} />
          }

        </Animated.View >
        <Animated.ScrollView
          style={styles.scrollView}
          ref={scrollView}
          contentContainerStyle={{ paddingTop: headerHeight }}
          scrollEventThrottle={100}
          bounces={false}
         onScroll={handleScroll}
        >
          {foodCategoriesData.map((section, index) => (
            <Item
              key={section.id}
              category={section}
              index={index}
              currentItem={currentItem}
              onItemLayout={onItemLayout} data={data[index]?.products} navigation={navigation}
              loaded={isLoaded}
            />
          ))}
          {foodCategoriesData.length == 0 && (
            <View style={styles.noLocation}>
              <Image
                source={require('../../../assets/images/ico_notification.png')}
                resizeMode="contain"
                style={styles.locationNotIn}
              />
              <Text style={styles.locationNotFoundText}>
                {Languages.NoMenuItemAvailable}
              </Text>
            </View>
          )}
        </Animated.ScrollView>

        {totalPrice >= 1 && (
          <EditOrder
            orderCount={orderCount}
            totalPrice={totalPrice}
            click={() => onCartClicked()}
            currentVendorName={currentVendorName}
            currentItem={currentItem}
          />
        )}
      </SafeAreaView>
    );
  });

const mapStateToProps = ({ search_resturent, cart, User }) => {
  return {
    authToken: User.auth_token,
    selectedVendorId: search_resturent.selectedVendorId,
    resturentDummyData: search_resturent.resturent_data,
    foodCategories: search_resturent.foodCategories,
    foodCategories_ar: search_resturent.foodCategories_ar,
    orderCount: cart.orderCount,
    totalPrice: cart.totalPrice,
    selectedLanguage: User.selectedLanguage,
  //  currentSelectedIndex: search_resturent.selectedIndex,
    currentVendorName: cart.currentVendorName,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectFood: (obj) => dispatch(addFood(obj)),
    getRestaurantFood: (obj, token) => dispatch(GetRestaurantFood(obj, token)),
    setSectionIndex: (sectionId) => {
      dispatch(setSectionIndexAction(sectionId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResturant);