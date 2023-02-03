import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator, I18nManager, Image,
  Keyboard, Platform,
  StatusBar, Text, TextInput, Dimensions,
  TouchableHighlight, View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardManager from 'react-native-keyboard-manager';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';

import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import SearchForCountry from '../../Components/SearchForCountry/SearchForCountry';
import {
  Register_User, setEndAPIAction, setIsUserLoggedInAction,
  setStartAPIAction, setUserCountryCodeAction,
  setUserEmailAddressAction, setUserNameAction, setUserPhoneNumberAction
} from '../../redux/user/action';
import Styles from './Styles';


function SignUpScreen(props) {
  let scrollRef = useRef();
  const {
    setUserPhoneNumber,
    setUserCountryCode,
    setUserName,
    setUserEmailAddress,
    selectedSocialMedia,
    socialMediaTokenID,
    setIsUserLoggedIn,
    userPhoneNumber,
    userCountryCode,
    selectedLanguage,
    fcmToken,
    otpHash,
    auth_token,
    callRegisterUser,
    setStartAPI,
    setEndAPI,
    apiError,
    apiSuccess,
    loading
  } = props;

  const [Name, setName] = useState('');
  const [userSelected, setUserSelected] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(userPhoneNumber);
  const [countryCode, setCountryCode] = useState('+966');
  const [showNotification, setShowNotification] = useState(true);
  const [countryFlag, setCountryFlag] = useState(
    require('../../../assets/images/flags/Saudi_Arabia.png'),
  );
  const [emailAddress, setEmailAddress] = useState('');
  const [modelVisible, setmodelVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
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
      KeyboardManager.setShouldShowTextFieldPlaceholder(true);
      KeyboardManager.setShouldShowToolbarPlaceholder(true);
      KeyboardManager.setOverrideKeyboardAppearance(false);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.resignFirstResponder();
      KeyboardManager.isKeyboardShowing().then((isShowing) => {
      });
    }

    if (apiError != null && apiError.length > 0 && showNotification) {
      Toast.showWithGravity(
        apiError,
        Toast.SHORT,
        Toast.TOP,
      );
    }
    if (apiSuccess && showNotification) {
      setEndAPI()
      setShowNotification(false)
      if (selectedSocialMedia.length > 2) {
        props.navigation.navigate('VerificationScreen');
      } else {
        props.navigation.navigate('CreatedAlert');
      }
    }


  }, [loading, apiError, apiSuccess]);
  const onChangePhoneNumberText = (text, e, value, type) => {
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
        setUserSelected(true);
      } else {
        setUserSelected(false);
      }
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );


    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onChangeEmailText = (key, val) => {
    setEmailAddress(val);
  };

  const onBlurEmailText = (key, val) => {
    if (emailAddress.length > 0 && !validateEmail(emailAddress)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const onChangeNameText = (key, val) => {
    setName(val);
    setUserSelected(true);
  };


  const onModalClose = () => {
    setmodelVisible(false);
  };

  const onFlagClicked = () => {
    setmodelVisible(true);
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

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const onCreateAccountClicked = async () => {
    try {
      if (Name.length < 1) {
        Toast.showWithGravity(Languages.EnterName, Toast.LONG, Toast.TOP);
      } else if (phoneNumber.length < 9) {
        Toast.showWithGravity(
          Languages.EnterAValidPhoneNumber,
          Toast.SHORT,
          Toast.TOP,
        );
      } else if (emailAddress.length > 0 && !validateEmail(emailAddress)) {
        Toast.showWithGravity(
          Languages.EnterEmailAddress,
          Toast.SHORT,
          Toast.TOP,
        );
        setEmailError(true);
      } else {
        Keyboard.dismiss();
        setUserPhoneNumber(phoneNumber);
        setUserCountryCode(countryCode);
        setUserName(Name);
        setUserEmailAddress(emailAddress);
        setIsUserLoggedIn(true);


        if (!loading) {
          setStartAPI()
          setShowNotification(true)
          const phone = countryCode.replace("+", "00") + phoneNumber;
          const lang = selectedLanguage;
          const username = Name;
          const email = emailAddress;
          const otphash = otpHash;
          
          if (selectedSocialMedia.length > 2) {
            const data = {
              phone,
              username,
              email,
              otphash,
              lang
            }

            callRegisterUser(data, auth_token)
          }
          else {
            const data = {
              username,
              email,
              otphash,
              lang
            }
            callRegisterUser(data, auth_token)
          }
        }
      }
    } catch (err) {
      
    }
  };

  const onEmailCrossClicked = () => {
    setEmailAddress('');
    setEmailError(false);
    setUserSelected(true);
  };

  const onNameCrossClicked = () => {
    setName('');
    setUserSelected(false);
  };

  const onCrossClicked = () => {
    setPhoneNumber('');
    setUserSelected(false);
  };

  return (
    <View style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={[Styles.topBar]}>
        <View style={[Styles.backArrow]}>
          <BackBlackArrow navigation={props.navigation} />
        </View>
        <CustomIcon
          name={'GreenLogo'}
          type={'SVG'}
          iconStyle={{
            fontSize: Constants.ResponsiveSize.f12,
            color: '#000000',
            ...props.iconStyle,
          }}
        />
      </View>
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

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.scrollOuter}>
        <View style={{ paddingBottom: 10, minHeight: 380 }}>
          <View style={Styles.registerOuter}>
            <Text style={Styles.registertext}>{Languages.Regesiter}</Text>
            <Text style={Styles.fillText}>{Languages.PLeaseFillDetails}</Text>
          </View>
          <View>
            <View style={{ width: '92%' }}>
              <Text style={Styles.nameTxt}>
                {Languages.RagisterName}
                <Text style={Styles.nameStar}> * </Text>
              </Text>
              <View style={Styles.inputStyle}>
                <TextInput
                  style={Styles.input1}
                  placeholder={Languages.EgMansoor}
                  autoCapitalize="none"
                  keyboardType="default"
                  maxLength={30}
                  value={Name}
                  placeholderTextColor="#A8A8A8"
                  onChangeText={(val) => onChangeNameText('Name', val)}
                />
                {Name.length > 0 && (
                  <TouchableHighlight
                    onPress={onNameCrossClicked}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    underlayColor="none">
                    <View style={Styles.cross}>
                      <Icon name="circle-with-cross" size={17} />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
              <View
                style={
                  Name.length > 0
                    ? Styles.input_underline
                    : Styles.input_underline_black
                }
              />
            </View>

            {selectedSocialMedia.length > 2 && (
              <View>
                <View style={Styles.loginStyle}>
                  <Text style={Styles.phoneNo}>
                    {Languages.PhoneNumber}
                    <Text style={Styles.phonenoStar}> * </Text>
                  </Text>
                </View>
                <View style={Styles.inputfieldOuter}>
                  <TouchableHighlight
                    onPress={onFlagClicked}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    underlayColor="none">
                    <View style={Styles.inputfieldInner}>
                      <Image
                        style={Styles.flagStyle}
                        resizeMode="contain"
                        source={countryFlag}
                      />
                      <Text style={Styles.countryCode}>{countryCode}</Text>
                    </View>
                  </TouchableHighlight>
                  <View style={Styles.phoneContainer}>
                    <View style={Styles.inputStyle}>
                      <TextInput
                        style={Styles.input}
                        placeholder={Languages.EnterPhoneNumber}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        value={phoneNumber}
                        placeholderTextColor="#A8A8A8"
                        maxLength={9}
                        onChangeText={(phoneNumber) =>
                          onChangePhoneNumberText(phoneNumber, 'phone')
                        }
                      />
                      {phoneNumber.length > 0 && (
                        <TouchableHighlight
                          onPress={onCrossClicked}
                          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                          underlayColor="none">
                          <View style={Styles.cross}>
                            <Icon name="circle-with-cross" size={17} />
                          </View>
                        </TouchableHighlight>
                      )}
                    </View>
                    <View
                      style={
                        phoneNumber.length > 8
                          ? Styles.input_underline
                          : Styles.input_underline_black
                      }
                    />
                  </View>
                </View>
              </View>
            )}

            <Text style={Styles.emailTxt}>{Languages.EnterEmail}</Text>
            <View style={{ width: '92%' }}>
              <View style={Styles.inputStyle}>
                <TextInput
                  style={Styles.emailinput}
                  placeholder={Languages.EgEmail}
                  autoCapitalize="none"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="email-address"
                  value={emailAddress}
                  returnKeyType="done"
                  onFocus={() => {
                    
                    scrollRef.current?.scrollTo({ y: 500, animated: true });
                  }}
                  onChangeText={(val) => onChangeEmailText('email', val)}
                  onBlur={(val) => onBlurEmailText('email', val)}
                />
                {emailAddress.length > 0 && (
                  <TouchableHighlight
                    onPress={onEmailCrossClicked}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    onFocus={() => {
                      
                      scrollRef.current?.scrollTo({ y: 500, animated: true });
                    }}
                    underlayColor="none">
                    <View style={Styles.cross}>
                      <Icon name="circle-with-cross" size={17} />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
              <View
                style={
                  emailError
                    ? Styles.input_underline_red
                    : emailAddress.length > 0
                      ? Styles.input_underline
                      : Styles.input_underline_black
                }
              />

              {emailError && (
                <Text style={Styles.emailTxtError}>
                  {Languages.EnterEmailAddress}
                </Text>
              )}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={Styles.next}>
        <TouchableHighlight
          onPress={onCreateAccountClicked}
          style={Styles.buttonOuter}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          underlayColor="none">
          <View
            style={
              userSelected ? Styles.buttonGreenStyle : Styles.buttonGreyStyle
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
  );
}

const mapStateToProps = ({ User }) => {
  return {
    userPhoneNumber: User.phoneNumber,
    userCountryCode: User.countryCode,
    selectedSocialMedia: User.selectedSocialMedia,
    socialMediaTokenID: User.socialMediaTokenID,
    auth_token: User.auth_token,
    otpHash: User.otpHash,
    loading: User.loading,
    selectedLanguage: User.selectedLanguage,
    fcmToken: User.fcmToken,
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
    setUserName: (userName) => {
      dispatch(setUserNameAction(userName));
    },
    setUserEmailAddress: (emailAddress) => {
      dispatch(setUserEmailAddressAction(emailAddress));
    },
    setIsUserLoggedIn: (isLoggedIn) => {
      dispatch(setIsUserLoggedInAction(isLoggedIn));
    },
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    setEndAPI: () => {
      dispatch(setEndAPIAction());
    },
    callRegisterUser: (obj, auth_token) => dispatch(Register_User(obj, auth_token)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
