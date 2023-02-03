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
    flex: 1,
  },
  mainView: {
    backgroundColor: '#fff',
    width: Screen.width,
    height: Screen.height,
    flex: 1,
    backgroundColor: '#abcabc'
  },
  mainText: {
    fontSize: 80,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#000',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  topView: {
    height: Constants.ResponsiveSize.f60,
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D7D3D3'
  },
  progressView: {
    height: Screen.width * 0.17625,
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomColor: '#D7D3D3',
    borderBottomWidth: 1
  },
  progressViewInner: {
    flexDirection: 'row',
    height: Screen.width * 0.047,
    width: Screen.width,
    marginTop: Screen.width * 0.0094,
  },
  progressViewInnerViews: {
    width: Screen.width * 0.25,
    alignItems: 'center',
  },
  progressViewInnerViews2: {
    width: Screen.width * 0.25,
    alignItems: 'center',
  },
  progressViewInner2: {
    flexDirection: 'row',
    height: Screen.width * 0.1175,
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
    width: Screen.width * 0.0564,
    height: Screen.width * 0.0564,
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
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: Screen.width * 0.047,
    marginBottom: Screen.width * 0.01175,
  },
  greenLine: {
    height: Screen.width * 0.00705,
    width: Screen.width * 0.50,
    backgroundColor: '#19a35c',
    position: 'absolute',
    top: Screen.width * 0.0564,
    left: Screen.width / 8,
  },

  back_btn: {
    width: Screen.width * 0.0818,
    height: Screen.width * 0.0818,
    marginTop: 1,
    marginLeft: 10,
  },
  topStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  topStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginLeft: 15,
  },
  topStyleImageBackArrow: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 10,
    marginRight: 15,
  },
  topStyleImageBadge: {
    width: Screen.width * 0.13,
    height: Screen.width * 0.13,
    marginLeft: (Screen.width / 2) - (Screen.width * 0.15),
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
    width: Screen.width,
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1
  },
  bodyViewScroll: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  bodyViewInner: {
 //   width: '98%',
    marginTop: 5,
    marginBottom: 5
  },

  bodyViewTop: { width: '100%', alignItems: 'center' },
  bottomBar: {
    width: Screen.width,
    height: Constants.ResponsiveSize.f60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#D7D3D3',
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
    borderBottomWidth: 2,
    marginLeft: 10,
    marginRight: '20%',
    borderBottomColor: 'black',

  },
  billInnerView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  billTimeText: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#FF3535',
    fontSize: 20
  },
  bottomTimeText: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: Screen.width * 0.047
  },
  billEntries: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',

  },
  doubleTickTopView: {
    width: '100%',
    flexDirection: 'row'
  },
  doubletickView: {
    width: '25%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,

  },
  payNow: {
    width: '75%',
    alignItems: 'center',
    padding: 5
  },
  backView: {
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
  verticalScroll: {
    width: Screen.width,
    height: Screen.height - (Screen.width * 0.3525), //150,
  },
  middleView: {
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1

  },
  middleViewX: {
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
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
    height: 250,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 20,
    color: '#383838',
    textAlign: 'center',
    width: Screen.width - 80,
    letterSpacing: 1,
  },
  titleStyle: {
    fontSize: 16,
    color: '#383838',
    textAlign: 'center',
  },
  doubleTickSpace: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleTickText: {
    marginLeft: 5, color: '#383838', marginTop: 10
  },
  doubleTickImage: {
    width: Screen.width * 0.0282,
    height: Screen.width * 0.0282,
    marginLeft: 1
  },
  adminCardInnerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    paddingBottom: 5
  },
  adminCardInnerViewText: {
    marginLeft: 5,
    color: '#383838',
    padding: 2,
    marginTop: 5
  },
  chatUsercard: {
    width: Screen.width * 0.8,
    marginLeft: Screen.width * 0.2 - 20,
    flexDirection: 'row',
  },
  chatAdmincard: {
    width: Screen.width * 0.8,
    marginLeft: Screen.width * 0.2 - 20,
    flexDirection: 'row',
  },
  chatlocationcard: {
    width: Screen.width * 0.9,
    marginLeft: 2,
    flexDirection: 'row',
  },
  billCard: {
    width: Screen.width * 0.8,
    marginLeft: Screen.width * 0.2 - 20,
    height: Screen.width > 400 ? 210 : 180,
    flexDirection: 'row',
    marginTop: 20
  },
  mapImage: {
    width: Screen.width - (Screen.width * 0.19975),
    height: Screen.width * 0.235,
    marginLeft: Screen.width * 0.1905,
    marginBottom: Screen.width * 0.0235,
  },
  locationMessageText: {
    marginLeft: 5,
    color: '#fff',
    padding: 2
  },
  locationCardImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005
  },
  billCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#05AE5E',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 25,
  },
  cardInner: {
    flex: 1,
    width: Screen.width - (Screen.width * 0.18275),
    backgroundColor: '#5A72FE',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    marginLeft: Screen.width * 0.10575,
  },
  confirmationCardInner: {
    flex: 1,
    width: Screen.width - (Screen.width * 0.18275),
    backgroundColor: '#5A72FE',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    marginLeft: Screen.width * 0.10575,
  },
  userCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1cad61',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    marginTop: 25,
  },
  adminCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    marginTop: 25,
  },
  chatTextStyle: {
    fontSize: Screen.width * 0.0396,
    color: '#fff',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    textAlign: 'center',
    marginTop: 5
  },
  userMessageText: {
    fontSize: Screen.width * 0.0396,
    color: '#fff',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    textAlign: 'center',
  },
  userChatTextStyle: {
    fontSize: 18,
    color: '#383838',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
  },
  timeTextStyle: {
    fontSize: Screen.width * 0.0188,
    color: '#ababab',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    textAlign: 'center',

  },
  cancelTextStyle: {
    fontSize: Screen.width * 0.03995,
    color: '#FF0303',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyExtraBold,
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

    elevation: 1,
  },
  chatHeadingStyle: {
    fontSize: 10,
    color: '#000',
    textAlign: 'center',
  },
  messageFieldView: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  yourmessageField: {
    height: 40,
    width: '99%',
    color: Colors.TextColor,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlignVertical: 'top',
    marginTop: Platform.OS === 'ios' ? 5 : 0.1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginLeft: Constants.ResponsiveSize.f35,
  },
  messageField: {
    width: Screen.width * 0.83,
    height: Screen.width * 0.141,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonContainer: {
    width: Screen.width * 0.1081,
    marginLeft: Screen.width * 0.0235,
    marginRight: Screen.width * 0.0235,
  },
  pictureButtonContainer: {
    width: Screen.width * 0.1081,
    marginLeft: Screen.width * 0.0235,
    marginRight: Screen.width * 0.0235,
  },
  sendButton: {
    width: Screen.width * 0.1081,
    height: Screen.width * 0.1081,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtomImage: {
    width: Screen.width * 0.08225,
    height: Screen.width * 0.08225
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
    elevation: 1,
    borderRadius: 5,
  },
  topHeadingStyle: {
    fontSize: Screen.width * 0.047,
    color: '#000',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    marginLeft: 5
  },
  progressHeading: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#1db063',
    fontSize: Screen.width * 0.0188,
    textAlign: 'center'
  },
  progressHeading2: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#1db063',
    fontSize: Screen.width * 0.02585,
    textAlign: 'center'
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

    elevation: 1,
  },
  billTopTime: { color: '#FF3535', fontSize: Screen.width * 0.047 },
  billBottomFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

    elevation: 1,
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

    elevation: 1,
  },
  buttonText: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: Screen.width * 0.0329,

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
    marginTop: 5
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
    flexDirection: 'row'
  },
  popupImage: {
    width: 160,
    height: 160,
    marginTop: 5
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
    height: 45
  },
  TumbImage: {
    width: 45,
    height: 45,
  },
  TumbupView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TumbdownView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
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
      justifyContent: 'center'
    },
    circularTumbdownImageContainer: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularTumbdownImage: {
      width: 45,
      height: 45
    },
    circularTumbdownInnerView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
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
    paddingVertical: 10
  },
  feedbackTextStyle: {
    fontSize: 17,
    width: '100%',
    color: '#000',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonTopView: {
    width: '100%',
    flexDirection: 'row'
  },
  feedBackImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005
  },
  feedbackMessageText: {
    marginLeft: 5,
    color: '#fff',
    padding: 2
  },
  feedBackMessageView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  bigMacLabelText: {
    marginLeft: Screen.width * 0.03525,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    fontSize: Screen.width * 0.03525,
    color: '#fff'
  },
  billTitle: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    textAlign: 'center',
    margin: 10,
  },
  bigMacLabelView: {
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20
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
    paddingBottom: 5
  },
  orderConfirmMessageView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    paddingBottom: 1
  },
  comfirmButtonView: {
    width: '37%',
    alignItems: 'flex-end'
  },
  orderConfirmMessageText: {
    marginLeft: 5,
    color: '#fff',
    padding: 2
  },
  orderTopView: {
    width: '100%',
    paddingVertical: 6,
    paddingTop: 10
  },
  orderTopInnerView: {
    width: '100%',
    flexDirection: 'row'
  },
  orderNoButton: {
    width: '37%',
    alignItems: 'flex-end'
  },
  orderYesButton: {
    width: '37%',
    alignItems: 'center'
  },
  orderConfirmImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005
  },
  rejectButtonView: {
    width: '37%',
    alignItems: 'center'
  },
  bold: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.034,
  },
  normal: {
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    fontSize: Screen.width * 0.032,
  },
  totalText: {
    fontSize: Screen.width * 0.047,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    marginLeft: 10
  }
}
