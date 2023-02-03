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
  bottomView: {
    position: 'absolute',
    left: 0,
    bottom: -220,
    width: Screen.width,
  },
  crossStyle: {
    height: Screen.width * 0.042,
    width: Screen.width * 0.042,
  },
  languagePopupOuter: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  languagePopupInner: {
    padding: 10,
  },
  languageLineOuter: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    color: '#fff',
    fontSize: Screen.width * 0.0374,
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
    fontSize: Platform.OS === 'android' ? Constants.ResponsiveSize.f20 : Constants.ResponsiveSize.f19,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    marginLeft: 5,
    color: Colors.BlackColor,
  },
  pop_text2: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5
  },
  pop_second_text: {
    fontSize: Screen.width * 0.0467,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    top: 10,
    textAlign: 'left',
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
    width: Screen.width - 20,
    marginTop: Screen.width * 0.001,
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
  smStyle: {
    backgroundColor: Colors.faceBookButton,
    height: Constants.ResponsiveSize.f46,
    width: Screen.width - 40,
    borderRadius: 50,
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
  smGoogleStyle: {
    backgroundColor: '#DF4930',
    height: Constants.ResponsiveSize.f46,
    width: Screen.width - 40,
    borderRadius: 50,
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
  rightArrow: {
    height: Screen.width * 0.055,
    width: Screen.width * 0.055,
  },
  smtext: {
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f15,
    paddingLeft: 10,
    paddingRight: 20,
    fontWeight: '500',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'center',
  },
  smFirst: {
    flex: 2,
    alignItems: 'flex-end',
    left: 5
  },
  smSecond: {
    flex: 5,
    alignItems: 'flex-start',
  },
};
