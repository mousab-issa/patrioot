import { Dimensions, I18nManager, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomView: {
    borderTopLeftRadius: Screen.width * 0.03875,
    borderTopRightRadius: Screen.width * 0.03875,
    width: Screen.width,
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  innerBottom: {
    flex: 1,
    borderTopLeftRadius: Constants.ResponsiveSize.f10,
    borderTopRightRadius: Constants.ResponsiveSize.f10,
    backgroundColor: Colors.WhiteColor,
    alignItems: 'center',
  },
  topBottom: {
    width: '100%',
    flexDirection: 'row',
  },
  equalspace: {
    flex: 1
  },
  back_roundView: {
    width: Screen.width * 0.0945,
    height: Screen.width * 0.0945,
    borderRadius: (Screen.width * 0.0945) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: Constants.ResponsiveSize.f10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1
  },
  location_roundView: {
    width: Screen.width * 0.0945,
    height: Screen.width * 0.0945,
    borderRadius: (Screen.width * 0.0945) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: Constants.ResponsiveSize.f10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1
  },
  buttonStyle: {
    backgroundColor: Colors.ButtonColor,
    height: Screen.width * 0.11,
    marginTop: Screen.width * 0.024,
    width: 'auto',
    borderRadius: (Screen.width * 0.11) / 2,
    marginBottom: Constants.ResponsiveSize.f25,
    marginTop: Constants.ResponsiveSize.f10,
    marginHorizontal: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
    justifyContent: 'center',
  },
  mark_img: {
    width: 40,
    height: 40,
  },
  back_btn_view: {
    width: Screen.width * 0.1645,
    height: Screen.width * 0.0705,
    borderRadius: Screen.width * 0.0235,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: Screen.width * 0.047,
    top: DeviceInfo.hasNotch() ? 30 : 5,
    position: 'absolute',
  },
  back_btn_text: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },

  backArrow: {
    width: Screen.width * 0.057,
    height: Screen.width * 0.057,
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
  },
  text_size: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    marginLeft: Constants.ResponsiveSize.f22,
    marginVertical: Constants.ResponsiveSize.f10,
    color: Colors.TextColor,
  },
  inner_text_size: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    paddingTop: 3,
    paddingBottom: 2,
    textAlign: 'center',
    color: Colors.TextColor,
    lineHeight: 22,
  },
  addressSize: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    paddingTop: 3,
    paddingBottom: 2,
    textAlign: 'center',
    marginBottom: 10,
    color: Colors.TextColor,
  },
  next_btn_text: {
    color: 'white',
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
  },

  height_and_center: {
    height: Screen.width * 0.1175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  searchStyle: {
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#F9F9F9',
    borderRadius: (Screen.width * 0.094) / 2,
    flexDirection: 'row',
    marginLeft: Screen.width * 0.047,
    alignItems: 'center',
    height: Screen.width * 0.094,
    marginRight: Screen.width * 0.047,
    marginTop: Constants.ResponsiveSize.f10,
  },
  searchInner: {
    width: '100%', flexDirection: 'row'
  },
  search_black_img: {
    width: Screen.width * 0.0705,
    height: Screen.width * 0.0705,
    marginTop: 1,
    marginLeft: Constants.ResponsiveSize.f15,
  },
  input_text: {
    height: Screen.width > 400 ? 40 : 37,
    width: '90%',
    color: '#383838',
    fontSize: Constants.ResponsiveSize.f14,
    marginLeft: 5,
    marginBottom: 1,
    textAlignVertical: 'top',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  viewOuter: {
    marginVertical: 1,
    marginHorizontal: 15,
  },
  addressOuter: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: Constants.ResponsiveSize.f20,
    backgroundColor: Colors.ValidMapAddressBG,
    borderRadius: 10,
  },
  addressOuter1: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: Constants.ResponsiveSize.f20,
    backgroundColor: Colors.InValidMapAddressBG,
    borderRadius: 10,
  },
  adressPart1: { alignItems: 'center', width: '15%', justifyContent: 'center' },
  adressPart2: {
    alignItems: 'flex-start',
    width: '85%',
    paddingVertical: 10
  },
  adressPart2_2: {
    alignItems: 'flex-start',
    width: '85%',
    paddingVertical: 20
  },
  addressIconOuter: {
    backgroundColor: '#06B160',
    width: Screen.width * 0.0752,
    height: Screen.width * 0.0752,
    borderRadius: (Screen.width * 0.0752) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressIconInner: {
    backgroundColor: '#fff',
    width: Screen.width * 0.0329,
    height: Screen.width * 0.0329,
    borderRadius: (Screen.width * 0.0329) / 2,
  },
  middlePIN: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinStyle: {
    width: Screen.width * 0.1075,
    height: Screen.width * 0.1309,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text_for_find: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontWeight: '400',
    color: '#696060',
  },
  buttonOuter: {
    marginBottom: Constants.ResponsiveSize.f14,
    marginTop: Constants.ResponsiveSize.f8,
  },
});
