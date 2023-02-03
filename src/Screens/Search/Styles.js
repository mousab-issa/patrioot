import { Dimensions, I18nManager, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    //     justifyContent: 'center'
  },
  topArea: {
    backgroundColor: '#fff',
    width: Screen.width,
    height: 50,
    marginTop: -50,
    zIndex: 2,
  },
  topViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    width: Screen.width,
    // marginTop:10,
    zIndex: 5,
  },
  height_and_center: {
    // height: Screen.width * 0.1175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    zIndex: 5,
    //   paddingBottom: 5,
    paddingHorizontal: Constants.ResponsiveSize.f20,
    // paddingBottom: Platform.OS ==='ios' ? Constants.ResponsiveSize.f16 :Constants.ResponsiveSize.f20,
    paddingBottom: Constants.ResponsiveSize.f6,
  },
  topView: {
    // height: Screen.width * 0.643, //380,
    width: Screen.width,
    backgroundColor: '#fff',

    position: 'absolute',
    // top:
    //   Platform.OS == 'ios'
    //     ? Screen.width * (DeviceInfo.hasNotch ? 0.36 : 0.32)
    //     : Screen.width * 0.282,
    top:
      getStatusBarHeight() +
      Screen.width * 0.12 +
      Screen.width * 0.094 +
      Screen.width * 0.0141,
    left: 0,
    // right: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
    zIndex: 1,
    // elevation: 4,
    //     flexDirection: 'row'
  },
  bodyView: {
    flex: 1,
    width: Screen.width,
    //  height: Screen.height - 370,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  locationText: {
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.BlackColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    //  textAlign: 'center'
  },
  currentLocationText: {
    fontSize: Screen.width * 0.0423,
    marginLeft: Screen.width * 0.0235,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    //  fontWeight: '700',
    color: '#000',
    textAlign: 'left',
  },
  searchStyle: {
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#F9F9F9',
    borderRadius: 100,
    flexDirection: 'row',
    marginLeft: Screen.width * 0.047,
    alignItems: 'center',
    justifyContent: 'center',
    height: Screen.width * 0.094,
    marginTop: Screen.width * 0.010,
    marginRight: Screen.width * 0.047,
    paddingLeft: 5
  },
  textHeadingStyle: {
    color: '#000',
    // fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.05405,

    // textAlign: 'center',
    marginTop: Screen.width * 0.0047,
    marginLeft: Screen.width * 0.047,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
    textAlign: 'left',
  },
  resturantCard: {
    marginTop: 4,
    marginLeft: 5,
    marginRight: 1,
    marginBottom: 1,

    shadowColor: '#ababab',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1,
    //  borderRadius: 5,
    flexDirection: 'row',
  },
  notificationCard: {
    width: Screen.width - 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 2,

    backgroundColor: '#f6f6f6',
    shadowColor: '#ababab',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  detailStyle: {
    color: '#000',
    fontSize: Constants.ResponsiveSize.f18,
  },
  detailsStyle: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 13,
  },
  titleStyle: {
    color: '#000',
    // fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 22,
  },
  foodType: {
    color: Colors.TabSelectedBG,
    //  fontWeight: '700',
    height: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f12,
    lineHeight: Constants.ResponsiveSize.f14,
  },
  foodTypeSelected: {
    color: '#fff',
    // fontWeight: '700',
    height: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f12,
    lineHeight: Constants.ResponsiveSize.f14,
  },
  iconsNearByCategories: {
    marginRight: 5,
  },
  orderNowtextStyle: {
    color: '#fff',
    // fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f12,
  },
  restaurantNameStyle: {
    width: Screen.width * 0.85 * 0.37,
    height: 50,
    justifyContent: 'center',
  },
  orderNowOuterStyle: {
    width: Screen.width * 0.85 * 0.36,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  back_black: {
    width: Screen.width * 0.08325,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginLeft: 8,
    marginRight: 6

  },
  backClick: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,

  },
  back_img: {
    width: Screen.width * 0.08225,
    height: Screen.width * 0.08225,
    marginTop: 1,
    marginLeft: 1,
  },
  height_with_topView: {
    width: '85%',
    height: 40, //Screen.width * 0.1245,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inner_view: {
    flexDirection: 'row',
    alignItems: 'center',
    //  height: 45,
    width: Screen.width * 0.60,
  },
  mark: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    //  height: 40,
    //  backgroundColor: '#fff'
  },
  pin_black: {
    width: Screen.width * 0.05875,
    height: Screen.width * 0.05875,
    marginTop: 1,
    marginLeft: 1,

  },
  edit_black: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Platform.OS === 'ios' ? 2 : 0,
    padding: 4,
  },
  edit_black_img: {
    width: Screen.width * 0.05875,
    height: Screen.width * 0.05875,
    marginTop: 1,
    marginLeft: 1,
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
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    //  fontWeight: '700',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  smily_img_view: {
    height: Screen.width * 0.117,
    alignItems: 'center',
    flexDirection: 'row',
  },
  smily_img: {
    width: Screen.width * 0.05875,
    height: Screen.width * 0.05875,
    marginTop: 1,
    marginLeft: Screen.width * 0.005875,
  },
  FlatList_view: {
    //  height: Screen.width * (Platform.OS == 'android' ? 0.549 : 0.52),
    height: Screen.width * (Platform.OS == 'android' ? (Screen.height < 800 ? 0.46 : 0.549) : (Screen.height < 800 ? 0.457 : 0.52)),
    // height: Screen.width * (Platform.OS == 'android' ? 0.50 : 0.52), //Azhar
    alignItems: 'center',
    width: Screen.width - 15,
    paddingLeft: 10,
  },
  food_flatlist: {
    height: RFValue(48),
    alignItems: 'center',

    width: Screen.width - 10,
    paddingLeft: 5,
    backgroundColor: 'transparent'
  },
  mcdonald_img: {
    width: Screen.width * 0.282,
    height: Screen.width * 0.282,
  },

  mcdonald_imgg: {
    width: 80,
    height: 20,
  },
  KFC_view: {
    width: '85%',
    flexDirection: 'row',
    marginTop: 5,
    height: 50,
    alignItems: 'center',
  },
  order_text: {
    width: 100,
    height: 40,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#1db063',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_width_height: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 6,
  },
  watch_green: {
    width: '50%',
    flexDirection: 'row',
  },
  inner_img_logo: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  vehicle_green: {
    width: '30%',
    flexDirection: 'row',
    marginLeft: 10,
  },
  pin_green: {
    width: '60%',
    flexDirection: 'row',
  },

  restaurantHeight: {
    height: Screen.width * 0.094,
  },
  nearByRestaurentSelected: {
    height: RFValue(32),
    minWidth: Screen.width * 0.215,
    borderRadius: Constants.ResponsiveSize.f12,
    backgroundColor: Colors.TabSelectedBG,
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Constants.ResponsiveSize.f7,
    paddingVertical: Constants.ResponsiveSize.f4,
    marginTop: Constants.ResponsiveSize.f7
  },
  nearByRestaurent: {
    height: RFValue(32),
    minWidth: Screen.width * 0.215,

    // width: Screen.width * 0.235,
    borderRadius: Constants.ResponsiveSize.f12,
    backgroundColor: Colors.SearchTagsBG,
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Constants.ResponsiveSize.f7,
    paddingVertical: Constants.ResponsiveSize.f4,
    marginTop: Constants.ResponsiveSize.f7
  },
  locationNotIn: {
    width: Screen.width * 0.517,
    height: Screen.width * 0.658,
  },
  locationNotFoundText: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f22,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  noLocation: {
    flex: 1,
    marginTop: 30,
    width: Screen.width - 10,
    alignItems: 'center',
  },




  bgImhTiny: {
    width: Constants.ResponsiveSize.screenWidth * 0.50,
    height: Constants.ResponsiveSize.screenWidth * 0.22,
    borderTopLeftRadius: Constants.ResponsiveSize.f25,
    borderTopRightRadius: Constants.ResponsiveSize.f25,
    // height: "auto"
  },
  bgImh: {
    width: Constants.ResponsiveSize.screenWidth * 0.72,
    height: Constants.ResponsiveSize.screenWidth * 0.30,
    borderTopLeftRadius: Constants.ResponsiveSize.f25,
    borderTopRightRadius: Constants.ResponsiveSize.f25,
    // height: "auto"
  },
  cardBottom: {
    marginVertical: 5,
    marginLeft: 5,
    marginRight: 1,
    backgroundColor: '#fff',
    marginRight: 0
    // width: Screen.width - Screen.width * 0.141,
  },
  bold: {
    fontSize: Constants.ResponsiveSize.f9,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  sizeFont: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    // fontWeight: '700',
    width: (Constants.ResponsiveSize.screenWidth * 0.50) * 0.93,
    // width: '100%',
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginLeft: Constants.ResponsiveSize.f7,
    marginTop: 1
  },
  sizeFontLarge: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    // fontWeight: '700',
    width: (Constants.ResponsiveSize.screenWidth * 0.72) * 0.93,
    // width: '100%',
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginLeft: Constants.ResponsiveSize.f7,
    marginTop: 4
  },
  textScroll:{
     width: '95%',
     backgroundColor: 'yellow'
  },
  sizeDetails: {
    fontSize: Constants.ResponsiveSize.f10,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    width: '95%',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: 18,
    marginLeft: Constants.ResponsiveSize.f7,
    marginTop: -2,
    color: Colors.TextColor,
    //textAlign: I18nManager.isRTL ? 'right' : 'left',
    // fontWeight: "700"
  },
  sizeDetails2: {
    fontSize: Constants.ResponsiveSize.f10,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    width: '95%',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: 15,
    marginLeft: Constants.ResponsiveSize.f6,
    color: Colors.TextColor,
  },
  nearByStyle: {
    borderRadius: Constants.ResponsiveSize.f25,
    marginLeft: 4,
    marginRight: 7,
    overflow: 'hidden',
    borderColor: '#ababab',
    marginBottom: 7,
  },

  listMargin: {
    marginTop: Constants.ResponsiveSize.f35
  }



};
