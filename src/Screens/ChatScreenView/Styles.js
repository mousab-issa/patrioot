import { Dimensions, I18nManager, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainView: {
    backgroundColor: '#fff',
    width: Screen.width,
    height: Screen.height,
    flex: 1,
  },
  mainText: {
    fontSize: 80,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#000',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  topView: {
    // height: Screen.width * 0.1645,
    paddingTop: 30,
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D7D3D3',
  },
  progressView: {
    height: Screen.width * 0.17625,
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomColor: '#D7D3D3',
    borderBottomWidth: 1,
  },
  progressViewInner: {
    flexDirection: 'row',
    height: Screen.width * 0.035,
    width: Screen.width,
    marginTop: Screen.width * 0.0094,
  },
  progressViewInnerViews: {
    //flex: 1,
    width: Screen.width * 0.25,
    alignItems: 'center',
  },
  progressViewInnerViews2: {
    width: Screen.width * 0.25,
    alignItems: 'center',
  },
  progressViewInner2: {
    flexDirection: 'row',
    height: Screen.width * 0.12,
    width: Screen.width,
    marginTop: 1,
  },
  progressViewInner2Views: {
    width: Screen.width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressViewInner2Views2: {
    width: Screen.width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressInnerPoint1: {
    width: Screen.width * 0.1034,
    height: Screen.width * 0.1034,
    borderRadius: (Screen.width * 0.1034) / 2,
    backgroundColor: '#b5e6cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress1InnerView1: {
    width: Screen.width * 0.0799,
    height: Screen.width * 0.0799,
    borderRadius: (Screen.width * 0.0799) / 2,
    backgroundColor: '#61ca97',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress1InnerView2: {
    width: Screen.width * 0.0364,
    height: Screen.width * 0.0364,
    borderRadius: 20,
    backgroundColor: '#19a35c',
  },
  progressInnerPoint2: {
    width: Screen.width * 0.0564,
    height: Screen.width * 0.0564,
    borderRadius: 25,
    backgroundColor: '#c4c4c4',
  },
  progressNoConatiner: {
    width: '98%',
    height: Screen.width * 0.08225,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1cad61',
    borderRadius: 4,
    marginRight: 2,
  },
  progressNoText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: Screen.width * 0.047,
    marginBottom: Screen.width * 0.01175,
  },
  greenLine: {
    height: Screen.width * 0.00705,
    width: Screen.width * 0.5,
    backgroundColor: '#19a35c',
    position: 'absolute',
    top: Screen.width * 0.0564,
    left: Screen.width / 8,
  },
  glowingButton: {
    //  marginTop: -(Screen.width * 0.094),
    height: Screen.width * 0.16,
    width: Screen.width * 0.16,
  },
  jumpingPin: {
    //  marginTop: -(Screen.width * 0.094),
    height: Screen.width * 0.15,
    width: Screen.width * 0.15,
  },
  back_btn: {
    width: Screen.width * 0.0618,
    height: Screen.width * 0.0618,
    marginTop: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  topStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  topStyleContainer: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  topStyleImageBackArrow: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 10,
    marginRight: 15,
  },
  topStyleImageBadge: {
    width: Screen.width * 0.03405,
    height: Screen.width * 0.03405,
    marginLeft: Screen.width * 0.01175,
  },
  topStyleDriverImage: {
    width: 38,
    height: 38,
    marginLeft: Screen.width * 0.01175,
  },
  topImagePhone: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 1,
  },
  topImageMultipin: {
    width: Screen.width * 0.08225,
    height: Screen.width * 0.08225,
    marginTop: 1,
    marginLeft: Screen.width * 0.03525,
    marginRight: Screen.width * 0.0235,
    marginBottom: 2,
  },
  topStylesRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bodyView: {
    // height: Screen.height - Screen.width * 0.29375, //125,
    width: Screen.width,
    alignItems: 'center',
  },
  bodyViewScroll: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  bodyViewInner: {
    width: '98%',
    marginTop: 5,
    marginBottom: 5,
  },
  middleView: {
    width: Screen.width,
    // height: Screen.height - Screen.width * 0.1645 - getStatusBarHeight(),
    backgroundColor: '#fff',
    alignItems: 'center',
    //   borderBottomLeftRadius: 65,
    //   borderBottomRightRadius: 65,
  },
  messageFlatList: {
    // backgroundColor: 'red',
    // width: Screen.width,
    height: Screen.height - Screen.width * 0.1645 * 2 - getStatusBarHeight(),
  },
  bodyViewTop: { width: '100%', alignItems: 'center' },
  bottomBar: {
    width: Screen.width,
    height: Screen.width * 0.1645,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#D7D3D3',
    // marginBottom: 1,
  },
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTime: {
    height: Screen.width * 0.0705,
    width: Screen.width * 0.2115,
    borderRadius: Screen.width * 0.0235,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    position: 'absolute',
    backgroundColor: '#FF0C0C',
    top: Screen.width * 0.01175,
    right: Screen.width * 0.0235,
  },
  billTime: {
    height: Screen.width * 0.0705,
    width: Screen.width * 0.2115,
    backgroundColor: 'white',
    borderRadius: Screen.width * 0.0235,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    position: 'absolute',
    top: 5,
    right: 10,
  },
  hrLine: {
    borderBottomWidth: 0.5,
    marginLeft: 10,
    // marginRight: '20%',
    borderBottomColor: Colors.SecondaryText,
    borderStyle: 'dashed',
  },
  billInnerView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,

    // justifyContent: 'space-between',
  },
  billTimeText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#FF3535',
    fontSize: 20,
  },
  bottomTimeText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: Screen.width * 0.047,
  },
  billEntries: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  doubleTickTopView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  doubletickView: {
    width: '25%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginRight: 8,
  },
  payNow: {
    // width: '75%',
    alignItems: 'center',
    padding: 5,
  },
  backView: {
    width: Screen.width,
    height: Screen.height - Screen.width * 0.1645 - getStatusBarHeight(), //125,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backViewX: {
    width: Screen.width,
    // height: Screen.height - Screen.width * 0.1645 - getStatusBarHeight(), //125,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  verticalScroll: {
    width: Screen.width,
    height: Screen.height - Screen.width * 0.3525, //150,
  },
  middleViewX: {
    width: Screen.width,
    // height: Screen.height - Screen.width * 0.1645 - getStatusBarHeight(),
    backgroundColor: '#fff',
    alignItems: 'center',
    //   borderBottomLeftRadius: 65,
    //   borderBottomRightRadius: 65,
  },
  bottomBarX: {
    width: Screen.width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 150,
  },

  bottomViewBG: {
    backgroundColor: '#1db063',
    position: 'absolute',
    height: 190,
    width: Screen.width,
    left: 0,
    bottom: 0,
  },
  imagesView: {
    //  width: 100, //deviceWidth - 10,
    // margin:  5,
    height: 250,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 20,
    color: '#383838',
    //  fontFamily: '',
    textAlign: 'center',
    width: Screen.width - 80,
    letterSpacing: 1,
  },
  titleStyle: {
    fontSize: 16,
    color: '#383838',
    //  fontFamily: '',
    textAlign: 'center',
  },
  doubleTickSpace: {
    //  width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleTickText: {
    marginLeft: 5,
    color: '#000',
    marginTop: 10,
  },
  doubleTickImage: {
    width: Screen.width * 0.0182,
    height: Screen.width * 0.0182,
    marginLeft: 1,
  },
  adminCardInnerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    paddingBottom: 5,
  },
  adminCardInnerViewText: {
    marginLeft: 5,
    // color: '#383838',
    padding: 2,
    marginTop: 5,
  },
  chatUsercard: {
    width: Screen.width * 0.8,
    marginLeft: Screen.width * 0.2 - 20,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  chatAdmincard: {
    width: Screen.width * 0.8,
    // marginLeft: Screen.width * 0.14 - 20,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15
  },
  chatlocationcard: {
    //  width: Screen.width * 0.7,
    // marginLeft: 2,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15
  },
  billCard: {
    width: Screen.width * 0.8,
    // marginLeft: Screen.width * 0.14 - 20,
    // height: Screen.width > 360 ? 200 : 190, //Screen.height * 0.35,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15
  },
  mapImage: {
    width: '100%',
    width: Screen.width - Screen.width * 0.23,
    height: Screen.width * 0.235,
    marginLeft: Screen.width * 0.015,
    marginRight: Screen.width * 0.015,
    marginTop: Screen.width * 0.015,
    // marginBottom: Screen.width * 0.0235,
    borderRadius: 10,
  },
  locationMessageText: {
    marginLeft: 5,
    color: Colors.Primary,
    padding: 2,
  },
  locationCardImage: {
    // width: Screen.width * 0.10575,
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005,
  },
  billCardInner: {
    flex: 1,
    width: '99%',
    backgroundColor: '#EFEFEF',
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  cardInner: {
    flex: 1,
    width: Screen.width - Screen.width * 0.18275,
    backgroundColor: Colors.ChatBackgroundGrey,
    // borderTopRightRadius: 12,
    // borderBottomRightRadius: 12,
    // borderBottomLeftRadius: 12,
    borderRadius: 12,
    // marginLeft: Screen.width * 0.10575,
  },
  confirmationCardInner: {
    flex: 1,
    width: Screen.width - Screen.width * 0.18275,
    backgroundColor: '#5A72FE',
    // borderTopRightRadius: 12,
    // borderBottomRightRadius: 12,
    // borderBottomLeftRadius: 12,
    borderRadius: 12,
    marginLeft: Screen.width * 0.10575,
    alignItems: 'center',
  },
  userCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.ChatGreenColor,
    // borderTopRightRadius: 18,
    // borderTopLeftRadius: 18,
    // borderBottomLeftRadius: 18,
    borderRadius: 18,
  },
  adminCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    // borderTopRightRadius: 18,
    // borderBottomRightRadius: 18,
    // borderBottomLeftRadius: 18,
    borderRadius: 18,
  },
  chatBillTextStyle: {
    // fontSize: Constants.ResponsiveSize.f15,
    // color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
    marginTop: 5,
  },
  chatTextStyle: {
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.Primary,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    // fontWeight: '700',
    // textAlign: 'center',
    marginTop: 5,
  },
  locationBoxTextStyle: {
    fontSize: Constants.ResponsiveSize.f14,
    // color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    // fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },
  userMessageText: {
    // fontSize: Screen.width * 0.0396,
    // color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
  },
  userChatTextStyle: {
    fontSize: 18,
    color: '#383838',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    // textAlign: 'center',
  },
  timeTextStyle: {
    fontSize: Constants.ResponsiveSize.f5,
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'center',
  },
  cancelTextStyle: {
    fontSize: Screen.width * 0.03995,
    color: '#FF0303',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyExtraBold,
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: Screen.width * 0.01645,
    marginRight: Screen.width * 0.01645,
  },
  cancelBG: {
    backgroundColor: '#fff',
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  chatHeadingStyle: {
    fontSize: 10,
    color: '#000',
    textAlign: 'center',
  },
  messageFieldView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //   paddingLeft: 10,
    // paddingRight: 10,

    //  paddingBottom: 5
  },
  yourmessageField: {
    height: 40,
    width: '99%',
    color: '#383838',
    fontSize: Screen.width * 0.0423,
    textAlignVertical: 'top',
    marginTop: Platform.OS === 'ios' ? 5 : 0.1,
    // marginLeft: 15,
    // marginTop: Screen.width * 0.0235,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // backgroundColor: 'blue'
  },
  messageField: {
    width: Screen.width * 0.7,
    // backgroundColor: '#c7c7c7',
    height: Screen.width * 0.141,
    //  alignItems: 'center',
    marginTop: Screen.width * 0.0047,
    // marginLeft: Screen.width * 0.0235,
    //  borderRadius: 30,
    //  borderWidth: 1,
    //  borderColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonContainer: {
    width: Screen.width * 0.1081,
    marginLeft: Screen.width * 0.0235,
    marginRight: Screen.width * 0.0235,
    //     marginRight: 10,
  },
  pictureButtonContainer: {
    width: Screen.width * 0.1081,
    marginLeft: Screen.width * 0.0235,
    marginRight: Screen.width * 0.0235,
  },
  sendButton: {
    width: Screen.width * 0.1081,
    //  backgroundColor: '#2dce7d',
    //  borderRadius: 23,
    height: Screen.width * 0.1081,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtomImage: {
    width: Screen.width * 0.08225,
    height: Screen.width * 0.08225,
    marginRight: 7
  },
  textField: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    shadowColor: '#ababab',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 0,
    borderRadius: 5,
  },
  topHeadingStyle: {
    fontSize: Constants.ResponsiveSize.f20,
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    marginLeft: 5,
    //  textAlign: 'center',
  },
  Driver_avatar_outer: {
    height: 38,
    width: 38,
    borderRadius: 160,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 5,
  },
  Driver_Avatar: {
    width: 38,
    height: 38,
    
  },
  progressHeading: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#1db063',
    fontSize: Screen.width * 0.0188,
    textAlign: 'center',
  },
  progressHeading2: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#1db063',
    fontSize: Screen.width * 0.02585,
    textAlign: 'center',
  },
  confirmButtonStyle: {
    height: Screen.width * 0.0705,
    width: Screen.width * 0.2115,

    backgroundColor: '#1cad61',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
    marginBottom: 5,
  },
  confirmedButtonStyle: {
    height: Screen.width * 0.0705,
    width: Screen.width * 0.2115,

    backgroundColor: '#BDBDBD',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  billTopTime: {
    color: '#FF3535',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.047,
  },
  billBottomFlex: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: Screen.width * 0.01,
  },
  confirmButtonStylebill: {
    height: 30,
    width: 90,
    backgroundColor: '#1cad61',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  rejectButtonStyle: {
    height: Screen.width * 0.0705,
    width: Screen.width * 0.2115,
    backgroundColor: '#fc5863',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  buttonText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f14,
  },
  containerLoading: {
    flex: 1,
    height: Screen.height,
    width: Screen.width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  containerLoadingImage: {
    width: 160,
    height: 160,
    marginTop: 5,
  },
  popupInner: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 300,
    width: Screen.width * 0.9,
    alignItems: 'center',
  },
  popupbuttonsFlex: {
    width: '70%',
    height: 65,
    marginTop: 20,
    flexDirection: 'row',
  },
  popupImage: {
    width: 160,
    height: 160,
    marginTop: 5,
  },
  containerLoadingInnerView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cameraPopupInner: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 100,
    width: Screen.width * 0.9,
    alignItems: 'center',
  },
  cameraPopupInnerView1: {
    width: '90%',
    height: 65,
    marginTop: 20,
    flexDirection: 'row',
  },
  cameraPopInnerView2: {
    width: '50%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImageSize: {
    width: 45,
    height: 45,
  },
  TumbImage: {
    width: 45,
    height: 45,
  },
  TumbupView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TumbdownView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circularTumbdown: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fc5863',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    TumbView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularTumbdownImageContainer: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularTumbdownImage: {
      width: 45,
      height: 45,
    },
    circularTumbdownInnerView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  containerLoadingView: {
    width: '70%',
    height: 65,
    marginTop: 20,
    flexDirection: 'row',
  },
  circularTumbdownTopView: {
    width: '70%',
    height: 65,
    marginTop: 20,
    flexDirection: 'row',
  },
  circularTumbsup: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: '#1cad61',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInnerBottomView: {
    width: '100%',
    paddingVertical: 5,
  },
  feedbackTextStyle: {
    fontSize: 17,
    width: '100%',
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonTopView: {
    width: '100%',
    flexDirection: 'row',
  },
  feedBackImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005,
  },
  feedbackMessageText: {
    fontSize: Constants.ResponsiveSize.f15,
    marginLeft: 5,
    color: Colors.Primary,
    padding: 2,
    alignSelf: 'center',
  },
  feedBackMessageView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
    // PaddingTop: 15,
    // paddingBottom: 1,
  },
  bigMacLabelText: {
    // marginLeft: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.Primary,
    fontWeight: 'bold',
  },
  bigdetailLabelText: {
    // marginLeft: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.Primary,
  },
  bigMacDetailText: {
    // marginLeft: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.Primary,
    marginTop: 10,
    marginBottom: 10,
  },
  billTitle: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'center',
    width: '70%',
    margin: 10,
    alignSelf: 'center',
  },
  bigMacLabelView: {
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  customLabelView: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  billTitleField: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  userMessageTextView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    // paddingBottom: 5,
  },
  orderConfirmMessageView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    paddingBottom: 1,
  },
  comfirmButtonView: {
    width: '47%',
    alignItems: 'flex-end',
  },
  orderConfirmMessageText: {
    marginLeft: 5,
    color: Colors.WhiteColor,
    padding: 2,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  orderTopView: {
    // width: '100%',
    paddingVertical: 6,
    paddingTop: 10,
    alignItems: 'center',
  },
  orderTopInnerView: {
    width: '100%',
    flexDirection: 'row',
  },
  orderNoButton: {
    width: '37%',
    alignItems: 'flex-end',
  },
  orderYesButton: {
    width: '37%',
    alignItems: 'center',
  },
  orderConfirmImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005,
  },
  rejectButtonView: {
    width: '37%',
    alignItems: 'center',
  },
  bold: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.Primary,
  },
  boldBorder: {
    borderBottomColor: Colors.SecondaryText,
    borderBottomWidth: 0.5,
    borderStyle: 'dashed',
    flex: 7,
    textAlign: 'left'
  },
  boldBorder1: {
    // borderBottomColor: Colors.SecondaryText,
    //  borderBottomWidth: 0.5,
    //  borderStyle: 'dashed',
    flex: 6,
    textAlign: 'left'
  },
  normal: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    flex: 3,
  },
  totalText: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    marginLeft: 10,
    color: Colors.GreenColor,
  },
  LocationCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.ChatGreenColor,
    // borderTopRightRadius: 12,
    // borderBottomRightRadius: 12,
    // borderBottomLeftRadius: 12,
    borderRadius: 12,
    // marginLeft: Screen.width * 0.2 - 20,
    // marginTop: 25,
    // margin: 10,
  },
  LocationsBoxDoubleTickTopView: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'flex-end',
  },
  modalContent: {
    justifyContent: 'center',
    //        alignItems: 'center',
    margin: 0,
    width: Screen.width,
    height: Screen.height,
    zIndex: 1
  },
};
