import { Dimensions, I18nManager, Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    //   flex: 1,
  },
  imageContainer: {
    height: wp('45'),
    width: wp('100'),
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
    textAlign: 'center',
  },
  noLocation: {
    flex: 1,
    marginTop: 30,
    width: Screen.width - 10,
    alignItems: 'center',
  },
  cardImage: {
    height: wp('45'),
    width: wp('100'),
  },
  backIconBackground: {
    height: wp('9'),
    width: wp('9'),
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(10),
    marginLeft: wp(3),
  },
  backIcon: {
    height: wp('4'),
    width: wp('4'),
  },
  secondryHeader: {
    width: wp('100'),
    height: wp('15'),
    flexDirection: 'row',
    backgroundColor: Colors.WhiteColor,
  },
  leftContent: {
    width: wp('50'),
    flexDirection: 'column',
    paddingLeft: wp(6),
    paddingTop: wp(1),
  },
  restaurentText: {
    fontSize: Screen.width * 0.061,
    //  fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.Primary,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  secondryText: {
    fontSize: Screen.width * 0.0329,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.SecondaryText,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  rightContent: {
    width: wp('50'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: wp(4),
  },
  profileImage: {
    height: wp(22),
    width: wp(22),
    borderWidth: 7,
    borderColor: '#fff',
    borderRadius: 8,
  },
  badgeContainer: {
    height: wp(8),
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: Colors.SecondaryText,
    borderTopWidth: 0.2,
    borderBottomColor: Colors.SecondaryText,
    borderBottomWidth: 0.2,
    alignItems: 'center',
    paddingHorizontal: wp('2'),
  },
  badgeText: {
    color: Colors.GreenColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Screen.width * 0.0329,
  },
  badgeActive: {
    borderBottomColor: Colors.GreenColor,
    borderBottomWidth: 2,
    paddingVertical: wp('1.3'),
  },
  foodCardContainer: {
    height: wp('24'),
    width: wp('100'),
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  foodCardImage: {
    height: wp('22'),
    width: wp('22'),
    borderRadius: 8,
  },
  foodCardLeftContainer: {
    width: wp('30'),
    height: wp('24'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodCardRightContainer: {
    height: wp('24'),
    width: wp('70'),
    flexDirection: 'column',
    paddingTop: 5,
    //padding: wp('3'),
  },
  boldText: {
    fontSize: Constants.ResponsiveSize.f14,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.GreenColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  regularText: {
    fontSize: Screen.width * 0.0329,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.GreenColor,
    marginBottom: 3,
    marginTop: 3,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },

  // edit order container styles

  orderContainer: {
    //  height: wp('15'),
    width: wp('90'),
    backgroundColor: Colors.ButtonColor,
    borderRadius: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // position: 'relative',
    // marginBottom: 10,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 1,

    position: 'absolute',
    // //left: 0,
    bottom: 25,
  },
  leftSide: {
    flex: 3,
    // flexDirection: 'column',
    paddingLeft: wp('8'),
    paddingVertical: 3,
    //  paddingTop: 5
  },
  rightSide: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    alignItems: 'center',
    //    width: wp('26'),
  },
  badgeIcon: {
    height: wp('7'),
    width: wp('7'),
    marginRight: 15,
  },
  //  food card container style
  imageCardContainer2: {
    height: wp('65'),
    width: wp('100'),
  },
  cardImage2: {
    height: wp('65'),
    width: wp('100'),
  },
  cartItemText: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    color: Colors.WhiteColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: 20,
    marginTop: 5,
  },
  cartItemText1: {
    fontSize: Constants.ResponsiveSize.f11,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    color: Colors.WhiteColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginBottom: 5,
    lineHeight: 18,
    marginTop: Platform.OS === 'ios' ? -2 : -3
  },
  scene: {
    flex: 1,
  },

  tabStyle: {},
  scrollStyle: {
    backgroundColor: 'transparent',
    paddingLeft: 1,
    paddingRight: 1,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
  },
  underlineStyle: {
    height: 3,
    backgroundColor: '#06B160',
    borderRadius: 3,
    //  width: '30%',
  },
  foodCategoryHeading: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginLeft: 5,
  },
  categoryName: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.ButtonColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    //  marginHorizontal: 10,
  },
  categoryIndicatorSelected: {
    height: 2,
    width: '100%',
    backgroundColor: Colors.ButtonColor,
    marginTop: 4,
    //  marginHorizontal: 10,
  },
  categoryIndicatorSelected1: {
    height: 2,
    width: '90%',
    backgroundColor: Colors.ButtonColor,
    marginTop: 4,
    marginHorizontal: 10,
  },
  categoryIndicatorNotSelected: {
    height: 2,
    //  width: 60,
    backgroundColor: 'transparent',
    marginTop: 4,
    marginHorizontal: 10,
  },
  menuItems1: {
    marginHorizontal: 10,
    width: Screen.width,
    alignItems: 'center'
  },
  menuItems2: {
    marginHorizontal: 5,
    width: (Screen.width / 2),
    alignItems: 'center'
  },
  menuItems3: {
    //marginHorizontal: 0,
    width: (Screen.width / 3),
    alignItems: 'center'
  },
  menuItems3Plus: {
    marginHorizontal: 10,
  //  width: (Screen.width / 3) - 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    // backgroundColor: '#ddd'
    // position: 'absolute',
    // top: 0,
    // top: 50
  },
  scrollView: {
    backgroundColor: Colors.WhiteColor,
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    position: 'absolute',
    // backgroundColor: '#1c1c1c',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  restaurantDataEmpty: {
    paddingTop: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    backgroundColor: Colors.WhiteColor,
    width: Screen.width,
    zIndex: 1,
    borderTopColor: '#AAAAAA',
    borderTopWidth: 0.2,
    marginBottom: 3,
  },
  restaurantData: {
    paddingTop: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    backgroundColor: Colors.WhiteColor,
    width: Screen.width,
    zIndex: 1,
    borderTopColor: '#AAAAAA',
    borderTopWidth: 0.2,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 0.2,
    marginBottom: 3,
  },
});
export default styles;
