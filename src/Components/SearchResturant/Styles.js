import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  notificationCard: {
    marginLeft: 1,
    marginRight: -2,
    marginBottom: 2,
    shadowRadius: 2,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.WhiteColor
  },
  innerview: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderBottomColor: '#AFAFAF',
    borderRadius: 1,
    borderStyle: 'solid',
    paddingBottom: Constants.ResponsiveSize.f10,
    marginBottom: Constants.ResponsiveSize.f10,
    marginRight: Constants.ResponsiveSize.f10,
    marginLeft: Constants.ResponsiveSize.f5,

  },
  restaurantNameStyle: {
    width: Screen.width - Screen.width * 0.32 - Screen.width * 0.19,
    justifyContent: 'center',
  },
  KFC_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    marginRight: Screen.width * 0.0188,
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f16,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  orderNowOuterStyle: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  detailStyle: {
    color: Colors.TextColor,
    fontSize: Constants.ResponsiveSize.f13,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  fastDeliveryStyle: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f10,
  },
  detailsStyle: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: I18nManager.isRTL ? Constants.ResponsiveSize.f11 : Constants.ResponsiveSize.f10,
  },
  detailsStyleBold: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: I18nManager.isRTL ? Constants.ResponsiveSize.f11 : Constants.ResponsiveSize.f10,
    fontWeight: 'bold',
  },
  orderNowtextStyle: {
    color: '#1db063',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 15,
  },
  order_text: {
    width: Screen.width * 0.235,
    height: Screen.width * 0.094,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#1db063',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_width_height: {
    width: '100%',
    flexDirection: 'row',
  },
  inner_img_logo: {
    width: Screen.width * 0.03525,
    height: Screen.width * 0.03525,
    marginRight: Screen.width * 0.003525,
  },
  vehicle_green: {
    width: '40%',
    flexDirection: 'row',
  },
  watch_green: {
    flexDirection: 'row',
  },
  pin_green: {
    flexDirection: 'row',
  },
  open_close_view: {
    width: Screen.width * 0.85 * 0.36,
    alignItems: 'center',
  },
  open_close_text: {
    width: Constants.ResponsiveSize.f58,
    height: Screen.width * 0.050,
    flexDirection: 'row',
    borderRadius: Screen.width * 0.0115,
    backgroundColor: 'rgba(6, 177, 96, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colose_text_background: {
    width: Constants.ResponsiveSize.f58,
    height: Screen.width * 0.050,
    flexDirection: 'row',
    borderRadius: Screen.width * 0.0115,
    backgroundColor: 'rgba(237,39,54,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderNowtextStyle: {
    color: '#fff',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.028,
  },
  opentextStyle: {
    color: '#06B160',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f10,
    marginVertical: 2,
  },
  closedtextStyle: {
    color: '#FF002E',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f10,
    marginVertical: 2,
  },
  busytextStyle: {
    color: '#fff',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.028,
  },
  restaurantImage: {
    width: Constants.ResponsiveSize.f77, //'100%',
    height: Constants.ResponsiveSize.f77,
    borderRadius: 4
  },
  vendrorImageOuter:{
    borderRadius: 4,
    overflow: 'hidden', 
    alignItems: 'center',
  },
  vendorImageInner:{
    borderRadius: 4,
    overflow: 'hidden', 
    height: Constants.ResponsiveSize.f77, 
    width: Constants.ResponsiveSize.f77,
  },
  contentMargin: {
    paddingLeft: 5,
  },
  restaurantImageOuter: {
    flex: 3
  },
};
