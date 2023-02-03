import { Dimensions, I18nManager, StyleSheet } from 'react-native';
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
    backgroundColor: Colors.BackgroundColor,
  },
  content: {
    flex: 1,
  },
  backIconBackground: {
    height: wp('8'),
    width: wp('8'),
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(10),
    marginLeft: wp(3),
  },
  backIcon: {
    height: wp('5'),
    width: wp('5'),
  },
  checkboxIcon: {
    height: 20,
    width: 20,
  },
  imageCardContainer2: {
    height: Screen.width * 0.7,
    width: Screen.width,
    backgroundColor: '#ababab'
  },
  cardImage2: {
    height: '100%', // Screen.width * 0.45, //wp('60'),
    width: Screen.width, //wp('100'),
  },
  middleContainer: {
    // height: Screen.width * 0.22,
    width: Screen.width,
    flexDirection: 'column',
    padding: wp('3'),
    marginBottom: 18,
  },
  // boldText: {
  //   fontSize: RFValue(23),
  //   fontWeight: 'bold',
  //   color: Colors.supportBlack,
  // },
  // regularText: {
  //   fontSize: RFValue(16),
  //   color: Colors.secondaryText,
  // },
  boldText: {
    fontSize: Constants.ResponsiveSize.f20,
    //  fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginTop: 8,
    marginBottom: 8,
  },
  quantityText: {
    fontSize: Constants.ResponsiveSize.f28,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginTop: 8,
    marginBottom: 8,
  },
  boldText2: {
    fontSize: Constants.ResponsiveSize.f18,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  checkboxText: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    color: Colors.TextColor,
    marginLeft: '5%',
  },
  regularText: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  optionsTitle:{
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    
  },
  addText: {
    fontSize: Screen.width * 0.0329,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.supportWhite,
  },
  extrasContainer: {
    flex: 1,
  //  height: Screen.height * 0.31,
 //   width: Screen.width,
    backgroundColor: '#F7F7F7',
  },
  extrasTransparentContainer: {
    flex: 1,
  //  height: Screen.height * 0.31,
 //   width: Screen.width,
    // backgroundColor: '#F7F7F7',
  },
  extraText: {
    height: wp('8'),
    width: wp('100'),
    paddingLeft: wp('3'),
  },
  RemoveText: {
    height: wp('8'),
    width: wp('100'),
    paddingLeft: wp('3'),
    marginTop: wp('5'),
  },
  checkboxContainer: {
    height: wp('7'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('3'),
    marginTop: 5,
  },
  rectangleIcon: {
    height: wp('4.5'),
    width: wp('4.5'),
  },
  bottomContainer: {
    //  flex: 1,
    //  height: wp(18),
    width: wp(100),
    //  flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp('20'),
    marginTop: Constants.ResponsiveSize.f20,
    //  marginBottom: wp('15')
  },
  bottomContainerInner: {
    //  height: wp(15),
    width: wp(100),
    flexDirection: 'row',
    backgroundColor: Colors.secondry,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp('20'),
    //  marginTop: wp('3'),
  },
  bottomContainerInner2: {
    //  height: wp(15),
    width: wp(100),
    backgroundColor: Colors.secondry,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp('20'),
    // marginTop: wp('3'),
    marginBottom: wp('2'),
  },
  addIcon: {
    height: wp('8'),
    width: wp('8'),
  },
  primaryBtn: {
    backgroundColor: Colors.ButtonColor,
    height: wp('10'),
    width: wp('80'),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: wp('1'),
    marginBottom: wp('3'),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,

    // position: 'absolute',
    // bottom: Screen.width * 0.0235,
    // left: wp('10'),
  },
  bottomView11: {
    flex: 1,
    width: Screen.width,
    // height: Screen.height * (Screen.height > 800 ? 0.22 : (Screen.height > 500 ? 0.13: 0.10)),
    justifyContent: 'flex-end',
  },
  buttonOuter: {
    width: Screen.width,
    paddingVertical: Constants.ResponsiveSize.f10,
   // marginLeft: Constants.ResponsiveSize.f1,
  },
  priceStyle: {
    color: Colors.TextColor,
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
  }
});
export default styles;
