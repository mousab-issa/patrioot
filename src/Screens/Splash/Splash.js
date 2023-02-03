import React, { Component } from 'react';
import {
  View,
  NativeModules,
  I18nManager,
  StatusBar,
  Platform
} from 'react-native';

import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import Languages from '../../common/Languages';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Toast from 'react-native-simple-toast';

import {
  setUserDataAction,
  setSelectedLanguageAction
} from '../../redux/user/action';

import Styles from './Styles';
import { fcmService } from '../../services/FCMService';
import { localNotificationService } from '../../services/LocalNotificationService';
import { GetNotificatonData } from '../../redux/notification/action';
import { setOrderStatusAction } from '../../redux/chat/action';


class Splash extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      userId: '',
      fcm: '',
      email: '',
      notificationOpen: -1,
    };
  }
  componentDidMount() {
    this.getLanguageData();
    this.getUserData();
  }

  setAppLanguage = (appLanguage) => {
    Languages.setLanguage(appLanguage);
    I18nManager.forceRTL(appLanguage == 'ar');
  };

  gotoHomeScreen = (screen) => {
    this.timeoutHandle = setTimeout(() => {
      clearTimeout(this.timeoutHandle);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          {
            name: screen,
          },
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  };

  getDeviceLocale = () => {
    if (Platform.OS === 'ios') {
      let locale = NativeModules.SettingsManager.settings.AppleLocale // "fr_FR"
      if (locale === undefined) {
        // iOS 13 workaround, take first of AppleLanguages array  ["en", "en-NZ"]
        locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
        if (locale) {
          return locale;
        }
      }
    }

    if (Platform.OS === 'android') {
      return NativeModules.I18nManager.localeIdentifier;
    }

    return 'en_US';
  };

  configureFCM = (authToken, updateNotification, selectedLanguage, setOrderStatus) => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    function onRegister(token) {

      //  setFcmTokenData(token)
    //  setFCMTokenDataAction(token)
    }
    function onOpenNotification(notify) {
      if (authToken != null)
        // if (notify.body != null) {
        //   Toast.showWithGravity(
        //     notify.body,
        //     Toast.LONG,
        //     Toast.TOP,
        //   );
        // }
        updateNotification(authToken, selectedLanguage);
      if (notify != null && notify.notification_type != null && notify.notification_type == 'ORDER_CANCELLED') {
        const orderData = {
          orderID: notify.order_id,
          status: 'CENCELLED'
        }
        setOrderStatus(orderData)
      }
    };
    function onNotification(notify, data) {
      if (notify.body != null && data.notification_type != null) {
        Toast.showWithGravity(
          notify.body,
          Toast.LONG,
          Toast.TOP,
        );
        if(data.notification_type != null && data.notification_type == 'ORDER_CANCELLED'){
          const orderData = {
            orderID: data.order_id,
            status: 'CENCELLED'
          }
          setOrderStatus(orderData)
        }

      }
      if (authToken != null)
        updateNotification(authToken, selectedLanguage);
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
  getLanguageData = async () => {
    const auth_tokenValue = await AsyncStorage.getItem('@auth_token');
    this.configureFCM(auth_tokenValue, this.props.updateNotificationData, this.props.selectedLanguage, this.props.setOrderStatus);
    try {
      const value = await AsyncStorage.getItem('@APP_LANGUAGE');

      if (value != null) {
        this.setAppLanguage(value);
      } else {
        let appLocale = this.getDeviceLocale();

        if (appLocale.includes('ar')) {

          this.props.setUserSelectedLanguage('ar');
          this.setAppLanguage('ar');
          this.storeData('@APP_LANGUAGE', 'ar');
        } else {
          this.props.setUserSelectedLanguage('en');
          this.setAppLanguage('en');
          this.storeData('@APP_LANGUAGE', 'en');
        }
      }
    } catch (e) {
    }
  };

  getUserData = async () => {
    try {
      const userLoggedInValue = await AsyncStorage.getItem('@userLoggedIn');
      if (userLoggedInValue !== null && userLoggedInValue == 'TRUE') {
        const userId = await AsyncStorage.getItem('@_id');
        const nameValue = await AsyncStorage.getItem('@name');
        const emailAddressValue = await AsyncStorage.getItem('@emailAddress');
        const auth_tokenValue = await AsyncStorage.getItem('@auth_token');
        const fcmTokenValue = await AsyncStorage.getItem('@fcmToken');
        const userPhoneNumberValue = await AsyncStorage.getItem('@userPhoneNumber');
        const userCountryCodeValue = await AsyncStorage.getItem('@userCountryCode');
        const appLanguageData = await AsyncStorage.getItem('@APP_LANGUAGE');
        const userLoggedInData = true;
        const appLanguage = appLanguageData == null ? 'en' : appLanguageData;


        const userData = {
          userId,
          nameValue,
          emailAddressValue,
          auth_tokenValue,
          fcmTokenValue,
          userPhoneNumberValue,
          userCountryCodeValue,
          userLoggedInData,
          appLanguage
        }
        this.props.setUserDataUpdateAction(userData);

        this.gotoHomeScreen('HomeScreen');
      } else {
        this.gotoHomeScreen('WelcomePage');
      }
    } catch (e) {
      // error reading value
    }

  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      if (key === '@APP_LANGUAGE' && value != 'en') {
        RNRestart.Restart();
      }
    } catch (e) {

    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar translucent hidden={false} backgroundColor="transparent" barStyle='dark-content' />
        <CustomIcon name={'PatriootLogoGreen'}
          type={'SVG'}
          iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000' }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ User }) => {
  // 
  return {
    userPhoneNumber: User.phoneNumber,
    selectedLanguage: User.selectedLanguage,
    userCountryCode: User.countryCode,
    selectedSocialMedia: User.selectedSocialMedia,
    socialMediaTokenID: User.socialMediaTokenID,
    userLoggedInData: User.userLoggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUserDataUpdateAction: (userData) => {
      dispatch(setUserDataAction(userData));
    },
    setUserSelectedLanguage: (appLanguage) => {
      dispatch(setSelectedLanguageAction(appLanguage));
    },
    updateNotificationData: (token, selectedLanguage) => {
      dispatch(GetNotificatonData(token, selectedLanguage));
    },
    setOrderStatus: (orderStatus) => {
      dispatch(setOrderStatusAction(orderStatus));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);