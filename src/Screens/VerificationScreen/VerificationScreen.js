import React, { useEffect, useState, useRef } from 'react';
import {
  ActivityIndicator, I18nManager,
  Keyboard,
  StatusBar, Text, Platform,
  TouchableHighlight, View
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';

// import OTPInputView from '@twotalltotems/react-native-otp-input';
import OTPInputView from '../OTPINPUT';


import RNOtpVerify from 'react-native-otp-verify';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import {
  ResendVerificationCode, VerifyPhone
} from '../../config/API_EndPoints';
import {
  ResendVerificationUserCode,

  setEndAPIAction, setStartAPIAction, VerifyPhoneNumber
} from '../../redux/user/action';
import Styles from './Styles';

const time = 60
let totalTime = time;

function VerificationScreen(props) {
  const {
    phoneNumber,
    countryCode,
    selectedSocialMedia,
    socialMediaTokenID,
    loading,
    fcmToken,
    otpHash,
    userName,
    selectedLanguage,
    setStartAPI,
    setEndAPI,
    callVerifyPhoneNumber,
    callResendVerificationUserCode,
    apiError,
    auth_token,
    apiSuccess,
  } = props;

  const [otp_entered, setotp_entered] = useState(false);
  const [otp_code, setotp_code] = useState('');
  const [otpCode, setotpCode] = useState('');
  const [countDownTime, setCountDownTime] = useState(time);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const OtpRef = useRef(null);

  useEffect(() => {
    if (!isFirstTime) {
      setIsFirstTime(true)
      totalTime = 60;
    }

    if (apiError != null && apiError.length > 0 && showNotification) {
      Toast.showWithGravity(
        apiError,
        //Toast.SHORT,
        Toast.LONG,
        Toast.TOP,
      );
    }
    if (apiSuccess && showNotification) {
      setEndAPI();
      setShowNotification(false)
      if (selectedSocialMedia.length > 2) {
        props.navigation.navigate('CreatedAlert');
      } else {
        if (userName != null && userName.length > 0) {
          props.navigation.navigate('CreatedAlert');
        }
        else {

          props.navigation.navigate('SignUpScreen');
        }

      }
    }
    let timer = setInterval(() => onTimerTick(), 1000);
    return () => clearInterval(timer);

  }, [loading, apiError, apiSuccess]);


  
  useEffect(() => {
    if (Platform.OS == 'android') {
      RNOtpVerify.getOtp()
        .then(p =>
          RNOtpVerify.addListener(message => {
            try {
              if (message) {

                const messageArray = message.split('\n');

                if (messageArray[1]) {
                  // const otp = messageArray[1].split(' ')[0];
                  const otpArray = messageArray[1].split(' ');
                  var otp = ''
                  if (otpArray.length > 2) {
                    otp = otpArray[0].length == 4 ? otpArray[0] : otpArray[1];
                  }

                  if (otp.length === 4) {
                    setotpCode(otp)
                    OtpRef.current.pullDataFromSms();
                  }
                }
              }
            } catch (error) {
              logErrorWithMessage(
                error.message,
                'RNOtpVerify.getOtp - read message, OtpVerification',
              );
            }
          }),
        )
        .catch(error => {
          logErrorWithMessage(
            error.message,
            'RNOtpVerify.getOtp, OtpVerification',
          );
        });
    }

    // remove listener on unmount
    return () => {
      if (Platform.OS == 'android') {
        RNOtpVerify.removeListener();
      }
    };
  }, []);



  function onTimerTick() {
    totalTime = totalTime - 1
    setCountDownTime(totalTime);
    // if (totalTime == 19) {
    //   resendCode();
    // }
    if (totalTime <= 1) {
      setCountDownTime(1);
      if (totalTime > 0) {
        resendCode();
      }
    }
  }

  function resendCode() {

    const lang = selectedLanguage;
    setShowNotification(true)

    const data = ResendVerificationCode + '?lang=' + selectedLanguage + '&otphash=' + otpHash
    callResendVerificationUserCode(data, auth_token)
  }

  const onNextClicked = () => {
    if (otp_entered) {
      Keyboard.dismiss();

      if (!loading) {
        setStartAPI()
        setShowNotification(true)
        const phone = countryCode.replace("+", "00") + phoneNumber;
        const code = otp_code;
        const lang = selectedLanguage;

        const data = VerifyPhone + otp_code + '&lang=' + selectedLanguage
        callVerifyPhoneNumber(data, auth_token)
      }

    } else {
      Toast.showWithGravity(
        Languages.PleaseEnterVerificationCode,
        Toast.SHORT,
        Toast.TOP,
      );
    }
  };


  const enterCode = () => {
    alert('did you enter correct code');
  };

  const onOTPCOdeFilled = (code) => {
    setotp_entered(true);
    setotp_code(code)
  };

  const onOTPCodeChanged = (code) => {

    setotpCode(code)
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
            color: '#000000',
            ...props.iconStyle,
          }}
        />
      </View>
      <View style={Styles.verify_text}>
        <View>
          <Text style={Styles.textStyle}>{Languages.PhoneVerification}</Text>
          <Text style={Styles.otpHeading}>{Languages.EnterYourOTP}</Text>
          <Text style={Styles.textStyle}>
            {Languages.Enter4DigitCode} {'\n'}
            {countryCode + ' ' + phoneNumber + '.'}{' '}
            <Text onPress={enterCode} style={Styles.enterCode}>
              {Languages.EnterCorrectNo}
            </Text>{' '}
          </Text>
        </View>
      </View>
      <View>
        <OTPInputView
          ref={OtpRef}
          style={[Styles.otpInput]}
          pinCount={4}
          code={otpCode}
          placeholderCharacter="2"
          placeholderTextColor={'#A09A9A'}
          codeInputFieldStyle={Styles.shadow}
          onCodeChanged={(code) => {
            onOTPCodeChanged(code);
          }}
          onCodeFilled={(code) => {
            onOTPCOdeFilled(code);
          }}
        />
      </View>
      <View style={Styles.bottomOuter}>
        <View style={Styles.bottomStyle}>
          <View style={Styles.inner}>
            <Text style={Styles.resendCode}>
              {Languages.ResendCodeIN}
              <Text style={Styles.sec10}>
                {' '}
                {countDownTime ? countDownTime : 10} {Languages.Seconds10}
              </Text>
            </Text>
          </View>
          <View style={Styles.buttonOuter}>
            <TouchableHighlight
              onPress={onNextClicked}
              style={Styles.buttonOuter}
              underlayColor="none">
              <View
                style={
                  otp_entered ? Styles.buttonGreenStyle : Styles.buttonGreyStyle
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
    </View>
  );
}

const mapStateToProps = ({ User }) => {

  return {
    phoneNumber: User.phoneNumber,
    countryCode: User.countryCode,
    userName: User.name,
    selectedSocialMedia: User.selectedSocialMedia,
    socialMediaTokenID: User.socialMediaTokenID,
    auth_token: User.auth_token,
    otpHash: User.otpHash,
    loading: User.loading,
    selectedLanguage: User.selectedLanguage,
    apiError: User.error,
    apiSuccess: User.success
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    setEndAPI: () => {
      dispatch(setEndAPIAction());
    },
    callVerifyPhoneNumber: (obj, auth_token) => dispatch(VerifyPhoneNumber(obj, auth_token)),
    callResendVerificationUserCode: (obj, auth_token) => dispatch(ResendVerificationUserCode(obj, auth_token)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(VerificationScreen);
