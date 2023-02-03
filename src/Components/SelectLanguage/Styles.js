import { Dimensions, I18nManager, Platform } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flexDirection: 'row',
  },
  containerInner: {
    flex: 2,
    flexDirection: 'row',
  },
  logo: {
    width: 33,
    height: 34,
    marginLeft: 5,
    marginRight: 5,
  },
  appName: {
    fontSize: 25,
    paddingLeft: 8,
    fontWeight: '400',
    fontFamily: I18nManager.isRTL
      ? Constants.AppNameFontFamily
      : Constants.AppNameFontFamily,
  },
  inner_img: {
    width: 'auto',
    height: Screen.height / 2.4,
    resizeMode: 'contain',
  },
  language_select: {
    marginRight: 5,
    height: 36,
    width: 36,
    backgroundColor: '#0187B4',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageOption: {
    flex: 1,
    alignItems: 'flex-end',
  },
  languageOptionText: {
    color: '#fff',
  },
  mainLogo: {
    marginTop: 70,
  },
  bottomView: {
    position: 'absolute',
    left: 0,
    bottom: -220,
    width: Screen.width,
  },
  language_select_close: {
    marginLeft: Screen.width - 40,
    marginBottom: 10,
    height: Screen.width * 0.0747,
    width: Screen.width * 0.0747,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pop_screen: {
    height: 50,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  crossStyle: {
    height: Screen.width * 0.042,
    width: Screen.width * 0.042,
  },
  languagePopupOuter: {
    backgroundColor: Colors.WhiteColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 5,
  },
  languagePopupInner: {
    padding: 10,
  },
  languageLineOuter: {
    flexDirection: 'row',
    marginTop: 18,
  },
  languageText: {
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f13,
    fontFamily: I18nManager.isRTL
      ? Constants.AppNameFontFamilyBold
      : Constants.AppNameFontFamilyBold,
  },
  languageDescriptionText: {
    flex: 2,
    paddingLeft: 20,
  },
  languageSelection: {
    flex: 3,
    paddingLeft: 20,
    alignItems: 'flex-end',
  },
  languageSelectionImage: {
    height: Screen.width * 0.0537,
    width: Screen.width * 0.0537,
    marginRight: 10,
  },
  close_pop: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginLeft: 40,
  },
  bottomDisatnce: {
    marginBottom: Screen.width * 0.0975,
  },
  pop_text: {
    fontSize: Platform.OS === 'android' ?  Constants.ResponsiveSize.f20 : Constants.ResponsiveSize.f19,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.BlackColor,
  },
  language_text: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.BlackColor,
    textAlign: 'left',
  },
  language_arab_text: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyBold
      : Constants.fontFamilyArabicBold,
    color: Colors.BlackColor,
    textAlign: 'left',
  },
  pop_text_Arabic: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: Constants.fontFamilyArabicBold,
    textAlign: 'left',
  },
  pop_second_text: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    top: 3,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  welcome_text: {
    fontSize: 24,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  social_link: {
    marginTop: 20,
    marginRight: 10,
    width: 65,
    borderRadius: 10,
    height: 46,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social_link2: {
    marginTop: 20,
    marginRight: 10,
    width: 65,
    borderRadius: 10,
    height: 46,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWithStyle: {
    backgroundColor: '#06B160',
    height: 58,
    width: Screen.width - 70,
    borderRadius: 8,
    marginTop: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  rightArrow: {
    height: 22,
    width: 22,
    left: Screen.width - 110,
  },
  language_select_pop: {
    height: Screen.height < 500 ? 28 : Screen.height * 0.0388,
    width: Screen.height < 500 ? 28 : Screen.height * 0.0388,
    backgroundColor: '#0187B4',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  language_select_pop2: {
    height: Screen.height < 500 ? 28 : Screen.height * 0.0388,
    width: Screen.height < 500 ? 28 : Screen.height * 0.0388,
    backgroundColor: '#06B160',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  englishRowOuter: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Screen.width - 20,
  },
  socialMediaImages: {
    width: 26,
    height: 26,
  },
  socialMediaStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    color: '#fff',
    fontSize: 14,
    top: 18,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
  },
  welcomeView: {
    alignItems: 'center',
    top: 30,
  },
};
