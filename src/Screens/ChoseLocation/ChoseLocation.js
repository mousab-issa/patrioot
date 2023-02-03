import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  NativeModules,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
import Styles from './Styles';
import Languages from '../../common/Languages';
import Constants from '../../common/Constants';
import NetInfo from "@react-native-community/netinfo";

import Toast from 'react-native-simple-toast';

import {
  setPickupLocationAction,
} from '../../redux/orderLocation/action';

import {
  setDestinationLocationAction,
} from '../../redux/orderLocation/action';
import CustomIcon from '../../common/CustomIcon';
import CustomLottieIcon from '../../common/CustomLottieIcon';

import { FlatList } from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import * as geolib from 'geolib';
//Theme
import Theme from '../../common/Theme';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { StatusBarManager } = NativeModules;

var isHidden = false;
function SelectedMapLocation(props) {
  const {
    selectedLanguage,
    setOrderPickupLocation,
    setOrderDestinationLocation
  } = props;

  const [searchLocation, setSearchLocation] = useState('');
  const [yourCurrentLocation, setYourCurrentLocation] = useState('');
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(150);
  const [searchedLocation, setSearchedLocation] = useState('');
  const [searchDataItems, setSearchDataItems] = useState([]);
  const [bottomViewHeigh, setBottomViewHeigh] = useState(Screen.width * 0.62);

  const [pickupLocationSelected, setPickupLocationSelected] = useState(false);
  const [destinationLocationSelected, setDestinationLocationSelected] = useState(false);
  const [searchDestination, setSearchDestination] = useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  //Contorl Animation
  const [StartAnimationPickup, SetStartAnimationPickup] = useState(false);
  const [StartAnimationDestentaion, SetStartAnimationDestenation] = useState(false);

  useEffect(() => {

    const { locationType, addressLocation, addressPickupLocation } = props.route.params;





    if (locationType == 'PICKUP') {
      setYourCurrentLocation("")
      setSearchedLocation(addressLocation.pickupAddress)
      setPickupLocationSelected(true)
    }

    if (locationType == 'DROP-OFF') {
      setYourCurrentLocation(addressPickupLocation)
      setSearchLocation("")
      setSearchedLocation(addressLocation)
      setSearchDestination(true)
      setDestinationLocationSelected(true)
    }


    const deviceHeight = (Screen.height * 1.05 - 480) / 10;
    const deviceHeightIOS = (926 - Screen.height) / 10;

    setKeyboardVerticalOffset(
      Platform.OS === 'ios'
        ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
        : 110 + deviceHeight + StatusBarManager.HEIGHT,
    );

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBottomViewHeigh(Screen.width * 0.625);
        setKeyboardVisible(true); // or some other action
        setKeyboardVerticalOffset(
          Platform.OS === 'ios'
            ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
            : 90 + StatusBarManager.HEIGHT,
        );
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setBottomViewHeigh(Screen.width * 0.625);
        setKeyboardVisible(false); // or some other action
        setKeyboardVerticalOffset(
          Platform.OS === 'ios'
            ? 140 + StatusBarManager.HEIGHT - deviceHeightIOS
            : 110 + deviceHeight + StatusBarManager.HEIGHT,
        );
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };

  }, []);

  const onBackClicked = () => {
    props.navigation.goBack();
  };

  const onLocationSelected = (item, index) => {

    if (searchDestination) {
      let obj = {
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        destinationAddress: item.formatted_address,
        destinationHeading: item.name,
      }
      setOrderDestinationLocation(obj)
      setSearchLocation(item.formatted_address)
      setSearchedLocation(item.name)
      setSearchDestination(true)
      props.navigation.navigate('DeliveryDistance');
    }
    else {
      let obj = {
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        pickupAddress: item.formatted_address,
        pickupHeading: item.name,
      }
      setOrderPickupLocation(obj)
      setYourCurrentLocation(item.formatted_address)
      setSearchedLocation(item.name)
      setPickupLocationSelected(true)
      props.navigation.navigate('DeliveryLocationMap');
    }
  };

  const fetchLatLng = async (search) => {
    const hasWord = (str, word) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/).includes(word);
    try {
      let res = []
      // let NearbySearch=await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.route.params.currentLocation.latitude},${props.route.params.currentLocation.longitude}&rankby=distance&keyword=${search}&key=${Constants.GoogleAPIKey}&language=${selectedLanguage}`)

      let response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&location=24.774265,-46.738586&radius=50000&key=${Constants.GoogleAPIKey}&language=${selectedLanguage}&region=.sa`);

      let json = await response.json();
      if (json.status == 'OK') {

        json.results.forEach(async (item, index) => {
          if (hasWord(item.formatted_address.toLowerCase(), "riyadh")
            || hasWord(item.formatted_address.toLowerCase(), 'الرياض')
            || hasWord(item.formatted_address.toLowerCase(), 'رياض')
            || hasWord(item.formatted_address.toLowerCase(), 'Riyadh')) {
            let distance = geolib.getDistance(
              { latitude: item.geometry.location.lat, longitude: item.geometry.location.lng },
              { latitude: props.route.params.currentLocation.latitude, longitude: props.route.params.currentLocation.longitude }
            ) * 0.001;
            item.distance = distance;
            res.push(item)
            setSearchDataItems([...res])
          }

        })
      }

    } catch (error) {

    }
  };

  const onYourCurrentLocationTextChange = (key, val) => {
    setYourCurrentLocation(val)
    setSearchedLocation(val)
    if (!val) {
      setSearchDataItems([])
    }
    else {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetchLatLng(val);
        }
        else {
          setSearchDataItems([])
          Toast.showWithGravity(
            Languages.NetworkNotAvailable,
            Toast.SHORT,
            Toast.CENTER,
          );
        }
      });

    }
  };

  const onSearchLocationTextChange = (key, val) => {
    setSearchLocation(val)
    setSearchedLocation(val)
    if (!val) {
      setSearchDataItems([])
    }
    else {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetchLatLng(val);
        }
        else {
          setSearchDataItems([])
          Toast.showWithGravity(
            Languages.NetworkNotAvailable,
            Toast.SHORT,
            Toast.CENTER,
          );
        }
      });

    }
  };


  return (
    <SafeAreaView style={Styles.container}>

      <View style={Styles.forBack}>
        <View style={Styles.adressPart1}>
          <TouchableOpacity
            onPress={onBackClicked}
            style={Styles.back_roundView}>
            <CustomIcon name={Languages.BackBlackArrow} type="MaterialIcons" iconStyle={{ color: '#000000', fontSize: Constants.ResponsiveSize.f22 }} />
          </TouchableOpacity>
        </View>
        <View style={Styles.adressPart2}>
          <Text style={Styles.size}>{Languages.ChooseLocation}</Text>
        </View>
      </View>

      <View style={Styles.choseLocationbg}>
        <View style={Styles.addressOuter}>
          <View style={Styles.adressPart1}>
            <CustomLottieIcon start={StartAnimationPickup} name={'LoadingPickup'} />
          </View>
          <View style={Styles.adressPartCurrent}>
            <TextInput
              style={Styles.input_text}
              multiline={false}
              maxLength={30}
              placeholder={Languages.YourCurrentLocation}
              keyboardType="default"
              placeholderTextColor="#aaa"
              onChangeText={(val) => onYourCurrentLocationTextChange('currentLocation', val)}
              value={yourCurrentLocation}
              returnKeyType="search"
              blurOnSubmit={true}
              editable={pickupLocationSelected}
              onFocus={() => {
                SetStartAnimationPickup(true)
              }}
              onBlur={() => {
                SetStartAnimationPickup(false)
              }}
            />
          </View>
        </View>
        <View style={Styles.hrRowinner} />
        <View style={Styles.addressOuter}>
          <View style={Styles.adressPart1}>
            <CustomLottieIcon start={StartAnimationDestentaion} name={'LoadingDelivery'} />
          </View>
          <View style={Styles.adressPartSearch}>
            <TextInput
              style={Styles.input_text}
              multiline={false}
              maxLength={30}
              placeholder={Languages.SearchForLocation}
              keyboardType="default"
              placeholderTextColor="#aaa"
              onChangeText={(val) => onSearchLocationTextChange('searchLocation', val)}
              value={searchLocation}
              returnKeyType="search"
              blurOnSubmit={true}
              editable={destinationLocationSelected}
              onFocus={() => {
                SetStartAnimationDestenation(true)
              }}
              onBlur={() => {
                SetStartAnimationDestenation(false)
              }}
            />
          </View>
        </View>
      </View>

      {/* Powered by google */}
      <View style={Styles.PoweredByGoogleContainer}>
        <Image source={Theme.PoweredByGoogle} style={Styles.PoweredByGoogleImage} />
      </View>
      
      <View style={Styles.hrRow} />
      {
        searchDataItems.length <= 0 ?
          <View style={Styles.waitingView}>
            <View style={Styles.waitingViewImageContainer}>
              <Image source={Theme.thumb} style={Styles.waitingViewImage} />
            </View>
            <View style={Styles.waitingViewDescription}>
              <Text style={Styles.waitingViewDescriptionTitle}>{Languages.OrderNowFromPatrioot}</Text>
              <Text style={Styles.waitingViewDescriptionText}>{Languages.EasyOrder}</Text>
            </View>
          </View>
          : null
      }

      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchDataItems.sort((a, b) => { return a.distance - b.distance })}
        extraData={searchDataItems}
        keyExtractor={(item, index) => index.toString()}

        renderItem={(({ item, index }) => {
          return (
            <Ripple
              key={index.toString()}
              onLongPress={() => { }}
              onPress={() => onLocationSelected(item, index)}
              underlayColor="none"
              style={Styles.pinOuter}>
              <View style={Styles.pin}
                key={index.toString()}
              >
                <View style={Styles.leftView}>
                  <View>
                    {
                      item.icon ?
                        <Image
                          style={{ height: Constants.ResponsiveSize.f22, width: Constants.ResponsiveSize.f22, alignSelf: "center" }}
                          source={{
                            uri: `${item.icon}`,
                          }}
                        />
                        : <CustomIcon name={"location-pin"} type="Entypo"
                          iconStyle={{
                            fontSize: Constants.ResponsiveSize.f20,
                            alignSelf: 'center', color: '#BDBDBD'
                          }} />
                    }
                  </View>
                  <View>
                    <Text numberOfLines={1} style={Styles.distance}>{
                      (Math.round(item.distance * 100) / 100).toFixed(1)
                    } {Languages.KM}</Text>
                  </View>
                </View>
                <View style={Styles.rightView}>
                  <View>
                    <Text style={Styles.sizeText}>{item.formatted_address}</Text>
                  </View>
                  <View>
                    <Text style={Styles.location}>{item.name} </Text>
                  </View>
                </View>
              </View>
            </Ripple>
          )
        })}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = ({ orderLocation, User }) => {
  return {
    loading: orderLocation.loading,
    error: orderLocation.error,
    pickupAddress: orderLocation.pickupAddress,
    destinationAddress: orderLocation.destinationAddress,
    orderFare: orderLocation.orderFare,
    orderDistance: orderLocation.orderDistance,
    selectedLanguage: User.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderPickupLocation: (locationData) => {
      dispatch(setPickupLocationAction(locationData));
    },
    setOrderDestinationLocation: (locationData) => {
      dispatch(setDestinationLocationAction(locationData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMapLocation);
