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
  containerInner: {
    flex: 1,
    paddingLeft: Screen.width * 0.047,
    paddingRight: Screen.width * 0.047,
  },
  input: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyMedium : Constants.fontFamilyMedium,
    height: 35,
    width: '93%',
    color: '#000',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginLeft: -3,
    marginRight: 5,
    paddingBottom: -2,
    marginBottom: 2,
    fontWeight: '600',
  },
  backArrow: {
  },
  back: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  inputStyle_rtl: { flexDirection: 'row-reverse', alignItems: 'center' },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    marginLeft: 3,
  },
  loginStyle: {
    paddingTop: Screen.height * 0.119,
  },
  passwordStyle: {
    paddingTop: Screen.height * 0.0214,
  },
  loginText: {
    fontSize: Constants.ResponsiveSize.f19,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.Primary,
  },
  loginHintText: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: Screen.width * 0.01175,
    marginBottom: Screen.width * 0.022,
    color: Colors.TextColor,
  },
  phoneNo: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    paddingTop: Screen.height * 0.0107,
    textAlign: 'left',
    color: Colors.Primary,
  },

  phoneContainer: {
    width: Screen.width * 0.65,
    marginLeft: 2,
    bottom: 5,
  },
  phonenoStar: {
    color: 'red',
    fontSize: Constants.ResponsiveSize.f16,
  },
  inputfieldOuter: {
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfieldOuter_rtl: {
    marginTop: 11,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  inputfieldInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.placeHolderBackground,
    paddingLeft: 5,
    paddingRight: 5,
    height: 32,
    width: 80,
  },

  flagStyle: {
    width: Constants.ResponsiveSize.f25,
    height: Constants.ResponsiveSize.f18,
    borderRadius: 6,
    overflow: 'hidden',
  },
  countryCode: {
    marginLeft: 1,
    fontSize:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f11
        : Constants.ResponsiveSize.f12,
    color: Colors.Primary,
    fontFamily: I18nManager.isRTL ? Constants.fontFamily : Constants.fontFamily,
    fontWeight: '600',
  },
  next: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Screen.width * 0.0235,
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  arrowImage: {
    width: Screen.width * 0.0467,
    height: Screen.width * 0.0467,
  },
  back_btn_img: {
    width: Screen.width * 0.0584,
    height: Screen.width * 0.0584,
  },
  input_underline: {
    width: '100%',
    borderBottomColor: Colors.BlackColor,
    borderBottomWidth: 1,
    marginTop: 0,
    left: 2,
  },
  input_underline_black: {
    width: '100%',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginTop: 0,
    left: 2,
  },

  cross: {
    zIndex: 3,
  },
  crossIcon: {
    height: 30,
    width: 30,
  },
  verticalLine: {
    width: 1,
    height: 24,
    marginLeft: 5,
    marginRight: 5,
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
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
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonGreyStyle: {
    width: Screen.width * 0.131,
    height: Screen.width * 0.131,
    borderRadius: 45,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mainModal: {
    flex: 1,
    height: Screen.height * 0.8,
    width: Screen.width,
  },
  coutryPopUPOuter: {
    width: '100%',
    height: Screen.height,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  CountryListOuter: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  searchCountry: {
    fontSize: Constants.ResponsiveSize.f20,
    marginLeft: 15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  searchCountryOuter: {
    margin: 5,
  },
  searchContainer: {
    backgroundColor: '#DEDEDE',
    justifyContent: 'space-around',
    width: 'auto',
    borderRadius: 30,
    height: 50,
  },
  searchOuter: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  searchBG: { backgroundColor: '#DEDEDE' },
  flagImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  countryNameRow: {
    margin: 5,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f18,
  },
  countrycodeStyle: {
    margin: 5,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f18,
    position: 'absolute',
    right: 0,
  },
  lastView: {
    width: 'auto',
    borderBottomColor: '#D8D6D6',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  scrollOuter: {
    margin: 20,
    marginBottom: 80,
  },
  logoStyle: {
    width: 30,
    height: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    height: 45,
    marginTop: Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? 25 : 0) : Constants.STATUSBAR_HEIGHT,
  },
  flagOuter: {
    flex: 1,
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    //        alignItems: 'center',
    margin: 0,
    width: Screen.width,
    height: Screen.height
  },
};
