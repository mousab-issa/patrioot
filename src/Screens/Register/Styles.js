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
  },
  button: {
    width: 200,
    height: 200,
    padding: 50,
  },
  home_view: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  loginWithStyle: {
    backgroundColor: '#06B160',
    height: Screen.height < 500 ? 45 : Screen.height * 0.0647,
    width: Screen.width - 70,
    borderRadius: 8,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  logintext: {
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f16,

    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
  },
  rightArrow: {
    height: Screen.width * 0.055,
    width: Screen.width * 0.055,
  },
  input_underline: {
    width: '100%',
    borderBottomColor: Colors.BlackColor,
    borderBottomWidth: 1,
    marginTop: 2,
  },
  input_underline_black: {
    width: '100%',
    borderBottomColor: Colors.SecondaryText,
    borderBottomWidth: 1,
    marginTop: 0,
  },
  input_underline_red: {
    width: '100%',
    borderBottomColor: Colors.RED_COLOR,
    borderBottomWidth: 1,
    marginTop: 0,
  },
  cross: {
    left: 9,
    bottom: -3,
    zIndex: 3,
  },
  scrollOuter: { marginHorizontal: 15 },
  logo: {
    width: Screen.width * 0.08,
    height: Screen.width * 0.08,
    marginLeft: 5,
    marginRight: 5,
  },
  backArrow: {
  },
  back: {
    alignItems: 'flex-start',
  },
  back_btn_img: {
    width: Screen.width * 0.0584,
    height: Screen.width * 0.0584,
  },
  appName: {
    fontSize: Screen.width * 0.0584,
    paddingLeft: 8,
    fontWeight: '400',
    fontFamily: I18nManager.isRTL
      ? Constants.AppNameFontFamily
      : Constants.AppNameFontFamily,
  },
  registerOuter: { paddingTop: Screen.width * 0.141, paddingVertical: 8 },
  registertext: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  fillText: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
    color: Colors.TextColor
  },
  nameTxt: {
    paddingTop: Screen.width * 0.099,
    top: 8,
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  nameStar: {
    color: 'red',
    fontSize: Constants.ResponsiveSize.f16,
  },
  emailTxt: {
    paddingTop: Screen.width * 0.067,
    top: 8,
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  emailTxtError: {
    paddingTop: Screen.width * 0.02,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.RED_COLOR,
    fontWeight: '400',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
  },
  phoneNo: {
    paddingTop: Screen.width * 0.067,
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  phonenoStar: {
    color: 'red',
    fontSize: 15,
  },
  accountOuter: {
    color: 'white',
    fontSize: 14,
    top: 18,
    marginRight: 20,
    marginLeft: 20,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
  },
  buttonOuter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputfieldOuter: {
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfieldInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: Colors.borderFlag,
    backgroundColor: Colors.placeHolderBackground,
    paddingLeft: 5,
    paddingRight: 5,
    top: 7
  },
  flagStyle: {
    width: Screen.width * 0.04,
    height: 17,
    borderRadius: 6,
    overflow: 'hidden',
  },
  countryCode: {
    marginLeft: 4,
    fontSize: Constants.ResponsiveSize.f11,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    color: Colors.BlackColor,
  },
  phoneContainer: {
    width: Screen.width * 0.72,
    marginLeft: 5,
    paddingRight: 10,
  },
  verticalLine: {
    width: 1,
    height: 24,
    marginLeft: 5,
    marginRight: 5,
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 5 : 0
  },
  input: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    height: Constants.ResponsiveSize.f30,
    width: '90%',
    color: '#000',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    paddingBottom: 0,
  },
  emailinput: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL ? Constants.fontFamily : Constants.fontFamily,
    height: Constants.ResponsiveSize.f32,
    width: '92%',
    color: '#000',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    paddingBottom: 0,
    paddingLeft: Platform.OS === 'android' ? -3 : 0
  },
  input1: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    height: Constants.ResponsiveSize.f32,
    width: '92%',
    color: '#000',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    paddingBottom: 0,
    paddingLeft: Platform.OS === 'android' ? -3 : 0
  },
  next: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingBottom: 10,
  },
  buttonOuter: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreyStyle: {
    width: Screen.width * 0.131,
    height: Screen.width * 0.131,
    borderRadius: 45,
    backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowImage: {
    width: Screen.width * 0.0467,
    height: Screen.width * 0.0467,
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
  modalContent: {
    justifyContent: 'center',
    //        alignItems: 'center',
    margin: 0,
    width: Screen.width,
    height: Screen.height
  },
};
