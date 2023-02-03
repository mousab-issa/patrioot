import { Dimensions, I18nManager, Platform } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    backgroundColor: '#fff',
  },
  containerInner: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    fontSize: 14,
    fontFamily: 'OpenSans',
    height: 35,
    width: 200,
    color: '#000',
  },
  bottomView: {
    position: 'absolute',
    left: 0,
    bottom: -210,
    width: Screen.width,
  },
  back: { marginTop: 20 },
  loginStyle: { paddingTop: 150 },
  loginText: {
    fontSize: 24,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  phoneNo: {
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontWeight: '400',
    paddingTop: 10,
  },
  phonenoStar: {
    color: 'red',
    fontSize: 15,
  },
  inputfieldOuter: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfieldInner: { flexDirection: 'row' },
  flagStyle: {
    width: 28,
    height: 20,
    borderRadius: 5,
  },
  countryCode: {
    marginLeft: 3,
    marginTop: 2,
  },
  next: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  arrowImage: {
    width: 20,
    height: 20,
    top: 18,
    marginLeft: 18,
  },
  back_btn_img: {
    width: 25,
    height: 25,
  },
  input_underline: {
    width: Screen.width - 40,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    marginTop: 4,
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
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'green',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  buttonGreyStyle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'grey',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  mainModal: {
    flex: 1,
    height: Screen.height * 0.8,
    width: Screen.width,
  },
  coutryPopUPOuter: {
    flex: 1,
    width: Screen.width,
    height: Screen.height,
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  CountryListOuter: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    left: 0,
    width: Screen.width,
    bottom: Screen.height < 790 ? -260 : (Platform.OS == 'ios') ? -230 : -300,
  },
  searchCountry: {
    fontSize: Constants.ResponsiveSize.f18,
    marginLeft: 15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 5,
  },
  searchCountryOuter: {
    margin: 5,
  },
  inner_line: {
    width: 50,
    marginTop: 8,
    marginBottom: 5,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 4,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: (Screen.width / 2) - 25
  },
  searchContainer: {
    justifyContent: 'space-around',
    width: 'auto',
    borderRadius: 30,
    height: 37.64,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.placeHolderBackground
  },
  searchOuter: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  innerSearch: {
    //  height: '100%',
    width: '100%',
    backgroundColor: 'red'
  },
  searchBarContainer: {
    backgroundColor: Platform.OS === 'ios' ? Colors.placeHolderBackground : '',
  },
  searchBG: {
    backgroundColor: Platform.OS === 'ios' ? Colors.placeHolderBackground : '',
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    right: Platform.OS === 'android' ? 20 : 1
  },
  flagImage: {
    width: Screen.width * 0.0658,
    height: 28,
    marginRight: 8,
    borderRadius: 5,
  },
  countryNameRow: {
    margin: 5,
    marginLeft: Platform.OS === 'ios' ? 3 : 2,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f14,
  },
  countrycodeStyle: {
    margin: 5,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    fontSize: Constants.ResponsiveSize.f14,
    position: 'absolute',
    right: 0,
  },
  lastView: {
    width: 'auto',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  scrollOuter: {
    marginHorizontal: 20,
    marginBottom: 80,
    height: 210
  },
  mainView: {
    height: 35
  }
};
