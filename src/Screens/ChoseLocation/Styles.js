import { Dimensions, I18nManager, Platform } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  back_roundView: {
    width: Screen.width * 0.0945,
    height: Screen.width * 0.0945,
    borderRadius: (Screen.width * 0.0945) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  backArrow: {
    width: Screen.width * 0.057,
    height: Screen.width * 0.057,
  },
  forBack: {
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.047,
    marginVertical: Screen.width * 0.027,
    marginTop: Screen.width * 0.027 + (Platform.OS == 'android' ? 20 : 0),
  },
  addressOuter: {
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0399,
    margin: Constants.ResponsiveSize.f5,
    paddingTop: 5,
  },

  input_text: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  size: {
    fontSize: Constants.ResponsiveSize.f17,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.BlackColor,
    marginLeft: 10,
    textAlign: 'left',
    top: 2
  },
  adressPart1: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  adressPart2: {
    width: '88%',
    justifyContent: 'center',
    marginBottom: 5,
  },
  adressPartCurrent: {
    flex: 1,
  },
  adressPartSearch: {
    flex: 1,
  },
  PoweredByGoogleContainer: {
    marginHorizontal: Constants.ResponsiveSize.f30,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  PoweredByGoogleImage: {
    resizeMode: 'contain',
    width: '30%',
  },
  choseLocationbg: {

    backgroundColor: '#F9F9F9',
    marginHorizontal: Constants.ResponsiveSize.f30,
    marginVertical: Screen.width * 0.023,
    borderRadius: (Screen.width * 0.09) / 3.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  hrRowinner: {
    marginLeft: 55,
    marginRight: 10,
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1,
  },
  hrRow: {
    marginTop: Screen.width * 0.03,
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1,
  },
  pin: {
    flexDirection: 'row',
    margin: Screen.width * 0.03525,
  },
  pinOuter: {
    margin: 1,
  },
  leftView: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  rightView: {
    width: '80%',
  },
  pinsize: {
    width: Screen.width * 0.1075,
  },
  input: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    height: 39, 
    width: '90%',
    color: '#000',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  distance: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
    color: 'gray',
    alignSelf: 'center',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  location: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f12,
    top: 3,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    color: '#1D9440',
    fontWeight: '400',
  },
  inner_text_size: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  sizeText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.BlackColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  innerImg: {
    width: Screen.width * 0.8,
    height: Screen.height * 0.45,
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  addressIconOuter: {
    backgroundColor: '#FF5530',
    width: Screen.width * 0.0552,
    height: Screen.width * 0.0552,
    borderRadius: (Screen.width * 0.0752) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Screen.width * 0.00755,
  },
  addressIconOuter2: {
    backgroundColor: '#06B160',
    width: Screen.width * 0.0552,
    height: Screen.width * 0.0552,
    borderRadius: (Screen.width * 0.0752) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Screen.width * 0.00505,
  },
  addressIconInner: {
    backgroundColor: '#fff',
    width: Screen.width * 0.0229,
    height: Screen.width * 0.0229,
    borderRadius: (Screen.width * 0.0329) / 2,
  },

  waitingView: {
    height: Screen.height / 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center'

  },
  waitingViewImageContainer: {
    width: '20%',
    height: '100%',
    marginRight: '2%',
    marginTop: '3%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  waitingViewImage: {
    resizeMode: 'contain',
    height: '65%',
    width: '65%',
    borderRadius: 80
  },
  waitingViewDescription: {
    width: '70%',
    height: '100%',
    flexDirection: 'column',
    marginTop: '8%'
  },
  waitingViewDescriptionTitle: {
    fontSize: Constants.ResponsiveSize.f16,
    marginBottom: '2%',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  waitingViewDescriptionText: {
    fontSize: Constants.ResponsiveSize.f12,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamilyMedium,
  }
};
