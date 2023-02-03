import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  TextInput,
  Text,
  Platform,
  Image,
  NativeModules,
  Dimensions,
  StatusBar,
  I18nManager,
  Keyboard,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import {
  setUserPhoneNumberAction,
  setUserCountryCodeAction,
  setStartAPIAction,
  setEndAPIAction,
  Login_User
} from '../../redux/user/action';
import Icon from 'react-native-vector-icons/Entypo';
import KeyboardManager from 'react-native-keyboard-manager';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

import Languages from '../../common/Languages';
import Constants from '../../common/Constants';

import Styles from './Styles';
import SearchForCountry from '../../Components/SearchForCountry/SearchForCountry';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';

import { fcmService } from '../../services/FCMService';
import { localNotificationService } from '../../services/LocalNotificationService';

import CustomIcon from '../../common/CustomIcon';
import Modal from 'react-native-modal';

const { StatusBarManager } = NativeModules;

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};


function LoginScreen(props) {
  const {
    setUserPhoneNumber,
    setUserCountryCode,
    selectedLanguage,
    fcmToken,
    otpHash,
    callLoginUser,
    setStartAPI,
    setEndAPI,
    apiError,
    apiSuccess,
    loading
  } = props;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [behavior, setbehavior] = useState('padding');
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(100);
  const [phoneSelected, setPhoneSelected] = useState(false);
  const [countryCode, setCountryCode] = useState('+966');
  const [fcmTokenData, setFcmTokenData] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const [countryFlag, setCountryFlag] = useState(
    require('../../../assets/images/flags/Saudi_Arabia.png'),
  );
  const [modelVisible, setmodelVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
  const [keyboardHeight, setKeyboardHeight] = useState(10);
  const [search, setsearch] = useState('');

  useEffect(() => {
    const deviceHeight = (Screen.height * 1.05 - 480) / 10;
    const deviceHeightIOS = (926 - Screen.height) / 10;
    setKeyboardVerticalOffset(
      Platform.OS === 'ios'
        ? 90 + StatusBarManager.HEIGHT - deviceHeightIOS
        : 20 + deviceHeight + StatusBarManager.HEIGHT,
    );
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
        setKeyboardHeight(Platform.OS === 'ios' ? Screen.width * 0.68 : 10);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(10);
        setKeyboardVisible(false); // or some other action

      },
    );
    // configureFCM();

    if (apiError != null && apiError.length > 0 && showNotification) {
      Toast.showWithGravity(
        apiError,
        Toast.SHORT,
        Toast.TOP,
      );
    }
    if (apiSuccess && showNotification) {
      setShowNotification(false)
      setEndAPI()
      props.navigation.navigate('VerificationScreen');
    }

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };

    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(10);
      KeyboardManager.setPreventShowingBottomBlankSpace(true);
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarDoneBarButtonItemText(Languages.Done);
      KeyboardManager.setToolbarManageBehaviour(0);
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
      KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
      KeyboardManager.setToolbarTintColor('#0000FF');
      KeyboardManager.setToolbarBarTintColor('#FFFFFF');
      KeyboardManager.setShouldShowTextFieldPlaceholder(true); // deprecated, use setShouldShowToolbarPlaceholder
      KeyboardManager.setShouldShowToolbarPlaceholder(true);
      KeyboardManager.setOverrideKeyboardAppearance(false);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.resignFirstResponder();
      KeyboardManager.isKeyboardShowing().then((isShowing) => {
        // ...
      });
    }
    
  }, [loading, apiError, apiSuccess]);

  configureFCM = () => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    function onRegister(token) {
      setFcmTokenData(token)
    }
    function onOpenNotification(notify) {
      if (
        notify != null &&
        notify.title != null &&
        (notify.title === 'REJECTED!' || notify.title === 'Congragulations!')
      ) {
        return;
      }
    }
    function onNotification(notify, data) {
      const options = {
        soundName: 'default',
        playSound: true,
        smallIcon: 'ic_launcher',
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }
  }

  const onChangeText = (text, e, value, type) => {
    var newText = '';
    var numbers = '0123456789';
    if (text.length < 1) {
      setPhoneNumber('');
    }
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      let nonZeroPhoneNumber = newText
      if (newText.startsWith('0')) {
        nonZeroPhoneNumber = newText.substring(1)
      }
      setPhoneNumber(nonZeroPhoneNumber);
      if (nonZeroPhoneNumber.length > 8) {
        setPhoneSelected(true);
      } else {
        setPhoneSelected(false);
      }
    }
  };

  const onBackClicked = () => {
    props.navigation.goBack();
  };

  const onFlagClicked = () => {
    setmodelVisible(true);
  };

  const onNextClicked = () => {
    
    if (phoneNumber.length < 9) {
      Toast.showWithGravity(
        Languages.EnterAValidPhoneNumber,
        Toast.SHORT,
        Toast.TOP,
      );
    } else {
      setUserPhoneNumber(phoneNumber);
      setUserCountryCode(countryCode);
      if (!loading) {
        setShowNotification(true)
        setStartAPI()
        const phone = countryCode.replace("+", "00") + phoneNumber;
        const lang = selectedLanguage;
        const device_token = fcmToken;
        const otphash = otpHash;
        
        const data = {
          phone,
          device_token,
          otphash,
          lang
        }
        

        callLoginUser(data)
      }
    }
  };

  const onModalClose = () => {
    setmodelVisible(false);
  };
  const onCrossClicked = () => {
    setPhoneNumber('');
    setPhoneSelected(false);
  };


  const onCountrySelected = (countryCode) => {
    setCountryCode(countryCode.code);
    const countries = Languages.CountryData;

    for (country in countries) {
      if (countries[country].code == countryCode.code) {
        setCountryFlag(countries[country].url)
      }
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={Styles.topBar}>
        <View style={[Styles.backArrow]}>
          <BackBlackArrow navigation={props.navigation} />
        </View>
        <CustomIcon
          name={'GreenLogo'}
          type={'SVG'}
          iconStyle={{
            fontSize: Constants.ResponsiveSize.f12,
            ...props.iconStyle,
          }}
        />
      </View>
      {/* <Modal animationType="none" statusBarTranslucent transparent={true} visible={modelVisible}> */}
      <Modal
        isVisible={modelVisible}
        backdropOpacity={0.9}
        backdropColor="rgba(0,0,0,0.5)"
        // animationIn="fadeIn"
        // animationOut="fadeOut"
        animationInTiming={1}
        animationOutTiming={1}
        coverScreen={false}
        deviceWidth={Dimensions.get('screen').width}
        deviceHeight={Dimensions.get('screen').height}
        style={Styles.modalContent}
      >
        <SearchForCountry 
          onModalClose={onModalClose}
          onCountrySelected={onCountrySelected}
          keyboardVisible={isKeyboardVisible}
        />
      </Modal>
      <View style={Styles.containerInner}>
        <View style={[Styles.loginStyle]}>
          <Text style={Styles.loginText}>{Languages.Login}</Text>
          <Text style={Styles.loginHintText}>{Languages.LoginHint}</Text>
          <Text style={[Styles.phoneNo]}>
            {Languages.PhoneNumber}
            <Text style={Styles.phonenoStar}> * </Text>
          </Text>
        </View>

        <View
          style={[
            I18nManager.isRTL
              ? Styles.inputfieldOuter_rtl
              : Styles.inputfieldOuter,
          ]}>
          <TouchableHighlight onPress={onFlagClicked} underlayColor="none">
            <View style={Styles.inputfieldInner}>
              <View style={Styles.flagOuter}>
                <Image
                  style={Styles.flagStyle}
                  resizeMode="contain"
                  source={countryFlag}
                />
              </View>
              <View style={Styles.flagOuter}>
                <Text style={Styles.countryCode}>{countryCode}</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={Styles.phoneContainer}>
            <View
              style={
                I18nManager.isRTL ? Styles.inputStyle_rtl : Styles.inputStyle
              }>
              <TextInput
                style={Styles.input}
                placeholder={Languages.EnterPhoneNumber}
                autoCapitalize="none"
                keyboardType="number-pad"
                value={phoneNumber}
                placeholderTextColor="#A8A8A8"
                maxLength={9}
                onChangeText={(phoneNumber) =>
                  onChangeText(phoneNumber, 'phone')
                }
              />
              {phoneNumber.length > 0 && (
                <TouchableHighlight
                  onPress={onCrossClicked}
                  underlayColor="none">
                  <View style={Styles.cross}>
                    <Icon name="circle-with-cross" size={16} />
                  </View>
                </TouchableHighlight>
              )}
            </View>

            <View
              style={
                phoneNumber.length > 0
                  ? Styles.input_underline
                  : Styles.input_underline_black
              }
            />
          </View>
        </View>

        <View style={[Styles.next, { marginBottom: keyboardHeight }]}>
          <TouchableHighlight
            onPress={onNextClicked}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            style={Styles.buttonOuter}
            underlayColor="none">
            <View
              style={
                phoneSelected ? Styles.buttonGreenStyle : Styles.buttonGreyStyle
              }>
              {!loading &&
                <CustomIcon
                  name={
                    I18nManager.isRTL
                      ? 'WhiteForwardArrowRTL'
                      : 'white_forward_arrow'
                  }
                  type={'SVG'}
                  iconStyle={{
                    fontSize: Constants.ResponsiveSize.f12,
                    color: '#000000',
                    ...props.iconStyle,
                  }}
                />
              }
              {loading &&
                <ActivityIndicator size="small" color="#fff" />
              }
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = ({ User }) => {
  return {
    loading: User.loading,
    selectedLanguage: User.selectedLanguage,
    fcmToken: User.fcmToken,
    otpHash: User.otpHash,
    apiError: User.error,
    apiSuccess: User.success
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserPhoneNumber: (phoneNumber) => {
      dispatch(setUserPhoneNumberAction(phoneNumber));
    },
    setUserCountryCode: (countryCode) => {
      dispatch(setUserCountryCodeAction(countryCode));
    },
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    setEndAPI: () => {
      dispatch(setEndAPIAction());
    },
    callLoginUser: obj => dispatch(Login_User(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
