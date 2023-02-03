import { Dimensions, I18nManager, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    backgroundColor: Colors.WhiteColor,
    paddingBottom: Platform.OS === 'ios' ? 25 : 15
  },
  back_btn: {
    alignItems: 'flex-start',
  },
  back_btn_img: {
    width: Screen.width * 0.0584,
    height: Screen.width * 0.0584,
  },
  verify_text: {
    marginTop: Screen.width * 0.225,
    paddingLeft: '9%',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    color: Colors.BlackColor,
    padding: -10,
    height: Screen.width * 0.13925,
    width: Screen.width / 5,
    borderRadius: Screen.width * 0.0235,
    fontSize: Constants.ResponsiveSize.f27,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Constants.fontFamilyBold,
  },
  textStyle: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f15,
    textAlign: 'left',
    lineHeight: 25,
    color: Colors.TextColor,
  },
  otpHeading: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: 'left',
  },
  enterCode: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f15,
    color: Colors.GreenColor,
  },
  otpInput: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f16,
    height: Screen.width * 0.12925,
    width: 'auto',
    paddingHorizontal: 15,
    marginTop: 20,
    color: Colors.TextColor,
  },
  bottomOuter: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  bottomStyle: {
    flexDirection: 'row',
    height: Screen.width * 0.131,
  },
  inner: {
    flex: 2,
  },
  resendCode: {
    flexDirection: 'column',
    paddingTop: 20,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  sec10: {
    color: Colors.GreenColor,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  buttonOuter: {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  buttonInner: { marginRight: 5 },
  buttonGreenStyle: {
    width: Screen.width * 0.131,
    height: Screen.width * 0.131,
    borderRadius: 45,
    backgroundColor: Colors.ButtonColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreyStyle: {
    width: Screen.width * 0.131,
    height: Screen.width * 0.131,
    borderRadius: 45,
    backgroundColor: Colors.AppGrayColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextImage: {
    width: Screen.width * 0.0467,
    height: Screen.width * 0.0467,
  },
  input_text_outer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Screen.width * 0.12925,
    width: Screen.width / 5.2,
    borderRadius: Screen.width * 0.0235,
    marginRight: Screen.width * 0.03525,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: '#fff',
  },
  input_text: {
    height: Screen.width * 0.12925,
    width: Screen.width / 5.3 - 5,
    color: Colors.TextColor,
    fontSize: Screen.width * 0.05655,
    marginLeft: 1,
    marginBottom: 1,
    textAlignVertical: 'top',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    height: 45,
    marginTop: Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? 25 : 0) : Constants.STATUSBAR_HEIGHT,
  },
  logoStyle: {
    width: 30,
    height: 30,
  },
};
