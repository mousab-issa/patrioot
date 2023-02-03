import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  // Modal,
  Dimensions,
  Pressable,
  TouchableHighlight,
  I18nManager,
  Platform,
  ActivityIndicator
} from 'react-native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import RNOtpVerify from 'react-native-otp-verify';
import Modal from 'react-native-modal';

import Languages from '../../common/Languages';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';

import Styles from './Styles';
import SelectLanguage from '../../Components/SelectLanguage/SelectLanguage';
import SocialMediaSelection from '../../Components/SocialMediaSelection/SocialMediaSelection';
import Toast from 'react-native-simple-toast';
import LongButton from '../../Components/LongButton/LongButton';

import {
  setSelectedLanguageAction,
  setUserPhoneNumberAction,
  setUserSocialMediaLoginTypeAction,
  setFCMTokenAction,
  setOTPHashAction,
  setUserLoggedInSocialMediaTokenIDAction,
  LoginWithGoogle,
  LoginWithFacebook,
  setStartAPIAction,
  setEndAPIAction,
} from '../../redux/user/action';


import { fcmService } from '../../services/FCMService';
import { localNotificationService } from '../../services/LocalNotificationService';

function WelcomePage(props) {
  const {
    setSelectedLanguage,
    setUserPhoneNumber,
    setSocialMediaLoginType,
    setFCMTokenDataAction,
    callLoginWithGoogle,
    callLoginWithFacebook,
    setStartAPI,
    setEndAPI,
    loading,
    name,
    authToken,
    otpHash,
    setOTPHash,
    selectedLanguage,
    selectedSocialMedia,
    apiError,
    apiSuccess,
  } = props;

  const [modelVisible, setModelVisible] = useState(false);
  const [socialMediaModelVisible, setSocialMediaModelVisible] = useState(false);
  const [isEnglishSelected, setisEnglishSelected] = useState(true);
  const [appLocale, setAppLocale] = useState('');
  const [fcmTokenData, setFcmTokenData] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const [applicationLanguage, setApplicationLanguage] = useState('');

  let welcomeLanguage = ''

  const getLanguageData = async () => {
    try {
      const value = await AsyncStorage.getItem('@APP_LANGUAGE');
      
      if (value !== null) {
        if (value === 'en') {
          setisEnglishSelected(true);
          setSelectedLanguage('en');
          setApplicationLanguage('en');
          welcomeLanguage = 'en';
        } else {
          setisEnglishSelected(false);
          setSelectedLanguage('ar');
          setApplicationLanguage('ar');
          welcomeLanguage = 'ar';
        }
      }
    } catch (e) {
      // error reading value
      
    }
  };

  const setAppLanguage = (appLanguage) => {
    Languages.setLanguage(appLanguage);
    I18nManager.forceRTL(appLanguage === 'ar');
  };

  useEffect(() => {
    getLanguageData();
    configureFCM();
    // StatusBar.setHidden(true);

    if (Platform.OS == 'android') {
      RNOtpVerify.getHash()
        .then(hashCode => {
          
          if (hashCode.length > 0) {
            
            setOTPHash(hashCode[0])
          }
        }
        )
        .catch(()=>{

        });
    }

    if (apiError != null && apiError.length > 0 && showNotification) {
      Toast.showWithGravity(
        apiError,
        Toast.SHORT,
        Toast.TOP,
      );
    }
    if (apiSuccess && selectedSocialMedia.length > 0 && showNotification) {
      setEndAPI()
      setShowNotification(false)
      if (name && name.length > 0) {
        props.navigation.navigate('VerificationScreen');
      }
      else {
        props.navigation.navigate('SignUpScreen');
        
      }
    }
    
  });

  configureFCM = () => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    function onRegister(token) {

      setFcmTokenData(token)
      setFCMTokenDataAction(token)
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

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      if (key === '@APP_LANGUAGE') {
        RNRestart.Restart();
      }
    } catch (e) {
      // saving error
    }
  };


  const onLoginWithPhoneClicked = () => {

    setSocialMediaLoginType('');
    setShowNotification(false)
    props.navigation.navigate('LoginScreen');
  };

  const onModalClose = () => {
    setModelVisible(false);
  };

  const onSocialMediaModalClose = () => {
    setSocialMediaModelVisible(false);
  };

  const onSocialMediaOptionClick = () => {
    setSocialMediaModelVisible(true);
  };

  const onSocialMediaSelected = (socialMedia, idToken) => {
    setSocialMediaModelVisible(false);
    setSocialMediaLoginType(socialMedia);

    if (!loading) {
      setUserPhoneNumber('');
      setShowNotification(true)
      setStartAPI()
      const uid = idToken;
      const lang = selectedLanguage;
      const device_token = fcmTokenData;
      const otphash = otpHash;

      const data = {
        uid,
        device_token,
        otphash,
        lang
      }
      
      if (socialMedia == 'FACEBOOK') {
        callLoginWithFacebook(data)
      }
      else {
        callLoginWithGoogle(data)
      }
    }
  };

  const onPrivacyPolicyCLicked = () => {
    Toast.showWithGravity(
      'Privacy policy',
      Toast.LONG,
      Toast.TOP,
    );
  };

  const onTermsAndServiceClicked = () => {
    Toast.showWithGravity(
      'Terms and service',
      Toast.LONG,
      Toast.TOP,
    );
  };

  return (
    <View style={Styles.outerview}>
      {/* <StatusBar hidden={modelVisible || socialMediaModelVisible} translucent backgroundColor="transparent" barStyle='dark-content' /> */}
      <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
      <View style={Styles.topBar}>
        <CustomIcon
          name={'GreenLogo'}
          type={'SVG'}
          iconStyle={{
            fontSize: Constants.ResponsiveSize.f12,
            ...props.iconStyle,
          }}
        />

        <View style={Styles.languageOption}>
          <Pressable
            onPress={() => {
              setModelVisible(true);
            }}>
            <View style={Styles.language_select}>
              <Text style={Styles.languageOptionText}>
                {Languages.SelectLanguage}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={Styles.mainLogo}>
        <LottieView
          source={require('../../../assets/animations/welcome.json')}
          style={Styles.ico_size}
          autoPlay
        />
      </View>
      {/* <Modal
        animationType="none"
        statusBarTranslucent
        transparent={true}
        visible={modelVisible}
      >
        <SelectLanguage onModalClose={onModalClose} />
      </Modal> */}
      {/* <Modal
        animationType="none"
        statusBarTranslucent
        transparent={true}
        visible={socialMediaModelVisible}

      >
        <SocialMediaSelection
          onSocialMediaModalClose={onSocialMediaModalClose}
          onSocialMediaSelected={onSocialMediaSelected}
        />
      </Modal> */}
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
        <SelectLanguage onModalClose={onModalClose} />
      </Modal>
      <Modal
        isVisible={socialMediaModelVisible}
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
        <SocialMediaSelection
          onSocialMediaModalClose={onSocialMediaModalClose}
          onSocialMediaSelected={onSocialMediaSelected}
        />
      </Modal>
      <View style={[Styles.welcomeView]}>
        <Text style={Styles.welcome_text}>{Languages.WelcomeMessage}</Text>
      </View>
      <View style={Styles.welcomeViewSub}>
        <Text style={Styles.joinus_text}>{Languages.JoinUs}</Text>
      </View>

      <View style={Styles.butonView}>
        <View style={Styles.buttonOuter}>
          <LongButton onButtonClick={onLoginWithPhoneClicked} buttonText={Languages.LoginOption} loading={true} />
        </View>
        <View style={Styles.socialMediaView}>
          <TouchableHighlight
            hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
            onPress={onSocialMediaOptionClick}
            underlayColor="none">
            <Text style={Styles.loginsocialmedia_text}>
              {Languages.LoginSocialMedia}
            </Text>
          </TouchableHighlight>
        </View>
      </View>


      <View style={Styles.TermsPPView}>
        <View style={Styles.bottomView}>
          <Text style={Styles.termsAndServiceBlack_text}>
            {Languages.LoggintermsANdPP}
          </Text>
          <TouchableHighlight
            onPress={onTermsAndServiceClicked}
            underlayColor="none">
            <Text style={Styles.termsAndServicegreen_text}>
              {Languages.TermsAndService}
            </Text>
          </TouchableHighlight>

          <Text style={Styles.termsAndServiceBlack_text}>
            {Languages.And}
          </Text>

          <TouchableHighlight
            onPress={onPrivacyPolicyCLicked}
            underlayColor="none">
            <Text style={Styles.termsAndServicegreen_text}>
              {Languages.PrivacePolicy}
            </Text>
          </TouchableHighlight>

        </View>
      </View>
      {(loading) && (
        <View style={Styles.containerLoading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
}

const mapStateToProps = ({ User }) => {
  return {
    loading: User.loading,
    name: User.name,
    selectedLanguage: User.selectedLanguage,
    selectedSocialMedia: User.selectedSocialMedia,
    apiError: User.error,
    apiSuccess: User.success,
    authToken: User.auth_token,
    otpHash: User.otpHash,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedLanguage: (selectedLanguage) => {
      
      dispatch(setSelectedLanguageAction(selectedLanguage));
    },
    setUserPhoneNumber: (phoneNumber) => {
      dispatch(setUserPhoneNumberAction(phoneNumber));
    },
    setSocialMediaLoginType: (socialMediaType) => {
      dispatch(setUserSocialMediaLoginTypeAction(socialMediaType));
    },
    setFCMTokenDataAction: (fcmTokenData) => {
      dispatch(setFCMTokenAction(fcmTokenData));
    },
    setOTPHash: (otpHash) => {
      dispatch(setOTPHashAction(otpHash));
    },
    setUserLoggedInSocialMediaTokenID: (tokenID) => {
      dispatch(setUserLoggedInSocialMediaTokenIDAction(tokenID));
    },
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    setEndAPI: () => {
      dispatch(setEndAPIAction());
    },
    callLoginWithGoogle: obj => dispatch(LoginWithGoogle(obj)),
    callLoginWithFacebook: obj => dispatch(LoginWithFacebook(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
