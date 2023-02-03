import { StyleSheet } from 'react-native';
import { Dimensions, I18nManager } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
},
  bottomView: {
    //  height: Constants.ResponsiveSize.screenHeight * 0.35,
    borderTopLeftRadius: Screen.width * 0.03875,
    borderTopRightRadius: Screen.width * 0.03875,
    // height: Screen.width * 0.67,
    width: Screen.width,
    //   alignItems: 'center',
    //    textAlign: 'center',
    bottom: 0,
    left: 0,
 //   backgroundColor: 'red',
    position: "absolute"
  },
  buttonStyle: {
    backgroundColor: Colors.ButtonColor,
    height: Screen.width * 0.11,
    marginTop: Screen.width * 0.024,
    width: Screen.width - 30,
    borderRadius: (Screen.width * 0.11) / 2,
    marginBottom: Constants.ResponsiveSize.f25,
    marginTop: Constants.ResponsiveSize.f10,
    marginHorizontal: 40,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    // elevation: 1,
    justifyContent: 'center',
  },
  innerBottom: {
    flex: 1,
    borderTopLeftRadius: Constants.ResponsiveSize.f10,
    borderTopRightRadius: Constants.ResponsiveSize.f10,
    backgroundColor: Colors.WhiteColor,
    alignItems: 'center',
    //  paddingTop: 10
  },
  topBottom:{
    width: '100%', 
    backgroundColor: 'transparent', 
    flexDirection: 'row', 
  },
  equalspace:{
    flex: 1
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
    fontSize: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  back_roundView: {
    width: Screen.width * 0.0945,
    height: Screen.width * 0.0945,
    borderRadius: (Screen.width * 0.0945) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: Constants.ResponsiveSize.f10,
  //  bottom: (Screen.width * 0.62) + (DeviceInfo.hasNotch() ? 15 : 15),
 //   position: "absolute",

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
    //  bottom: (Screen.width * 0.62) + (DeviceInfo.hasNotch() ? 15 : 15),
    //  right: 0,
    //  position: "absolute",

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1
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
  sendButtomImage: {
    width: Screen.width * 0.18,
    height: Screen.width * 0.18,
    marginTop: Screen.width * 0.03,
  },
  text_size: {
    fontSize: Screen.width * 0.045,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: Screen.width * 0.0188,
    textAlign: 'center',
    color: Colors.TextColor,
  },
  text_size_2: {
    fontSize: Screen.width * 0.038,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
    marginHorizontal: 20,
    marginTop: Screen.width * 0.002,
    marginBottom: Screen.width * 0.0188,
    color: Colors.TextColor,
    textAlign: 'left',
  },
  inner_text_size: {
    fontSize: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    paddingTop: 3,
    paddingBottom: 2,
    textAlign: 'center',
  },
  addressSize: {
    fontSize: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    paddingTop: 3,
    paddingBottom: 2,
    textAlign: 'center',
    marginBottom: 10,
  },
  next_btn_text: {
    color: 'white',
    fontSize: Screen.width * 0.042,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
    //  top: 15
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
    justifyContent: 'center',
    height: Screen.width * 0.094,
    // marginTop: Screen.width * 0.0041,
    marginRight: Screen.width * 0.047,
  },
  search_black_img: {
    width: Screen.width * 0.0705,
    height: Screen.width * 0.0705,
    marginTop: 1,
    marginLeft: Screen.width * 0.0455,
  },
  input_text: {
    height: Screen.width > 400 ? 40 : 37,
    width: '90%',
    color: '#383838',
    fontSize: Screen.width * 0.03525,
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
    alignItems: 'center',
  },
  addressOuter: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: Screen.width * 0.047,
    backgroundColor: '#D6FBE9',
  },
  adressPart1: { alignItems: 'center', width: '15%' },
  adressPart2: { alignItems: 'flex-start', width: '85%' },
  addressIconOuter: {
    backgroundColor: '#06B160',
    width: Screen.width * 0.0752,
    height: Screen.width * 0.0752,
    borderRadius: (Screen.width * 0.0752) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Screen.width * 0.00705,
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
  buttonOuter: {
    width: Screen.width,
    paddingVertical: Constants.ResponsiveSize.f3,
    marginBottom: Constants.ResponsiveSize.f14,
    marginTop: Constants.ResponsiveSize.f8,
    paddingHorizontal: Constants.ResponsiveSize.f3,
  },
};
