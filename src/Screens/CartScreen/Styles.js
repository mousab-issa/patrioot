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
    backgroundColor: Colors.BackgroundColor,
  },
  backIconBackground: {
    height: Constants.ResponsiveSize.f30,
    width: Constants.ResponsiveSize.f30,
    borderRadius: 20,
    backgroundColor: Colors.WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(3),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    borderColor: '#ddd',
    borderWidth: 1
  //  elevation: 3,
  },
  backIcon: {
    height: wp('3'),
    width: wp('3'),
  },
  headerContainer: {
    flexDirection: 'row',
    height: wp('14'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f10
        : Constants.ResponsiveSize.f18,
  },
  content: {
    flexGrow: 1,
  },
  footerContainer: {
    width: Screen.width,
    height: wp('47'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  dottedLine: {
    borderStyle: 'dashed',
    borderRadius: 0.0000001,
    // borderRadius: 1,
    width: Screen.width,
    // height: 1,
    borderWidth: 1,
    borderColor: '#ACACAC',
  },
  kfcText: {
    fontSize: Constants.ResponsiveSize.f18,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    marginLeft: '2%',
  },
  boldText: {
    fontSize:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f16
        : Constants.ResponsiveSize.f17,
    //  fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  regularText: {
    fontSize:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f13
        : Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.TextColor,
    marginBottom: 3,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  boldTextDigit: {
    fontSize: Constants.ResponsiveSize.f16,
    //  fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    textAlignVertical: 'center',
    paddingBottom: 2,
    marginTop: I18nManager.isRTL ? 3 : 0,
    lineHeight: 20,
  },
  cartText: {
    fontSize: Constants.ResponsiveSize.f16,
    // fontWeight: '700',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    marginHorizontal: 5,
    marginVertical: 4,
  },
  foodCardContainer: {
    height: Platform.OS === 'ios' ? wp('32') : wp(30),
    width: wp('100'),
    flexDirection: 'row',
    marginTop: 1,
    marginBottom: 15,
  },
  foodCardImage: {
    height: wp('20'),
    width: wp('20'),
    borderRadius: 5.5,
  },
  foodCardLeftContainer: {
    width: wp('30'),
    height: wp('24'),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  foodCardRightContainer: {
    // height: wp('25'),
    width: Platform.OS === 'ios' ? wp('70') : wp(67),
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: wp('3'),
  },
  trashBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: wp('6'),
  },
  trashConatiner: {
    height: wp('6'),
    width: wp('6'),

    justifyContent: 'center',
    alignItems: 'center',
  },
  trashImage: {
    height: wp('3.5'),
    width: wp('3.5'),
  },
  bottomContainer: {
    height: wp(9),
    width: wp(40),
    flexDirection: 'row',
    backgroundColor: Colors.BlackColor,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addIcon: {
    height: wp('5'),
    width: wp('5'),
  },
  addContainer: {
    flexDirection: 'row',
    width: wp('20'),
    height: wp('6'),
    borderRadius: 2,
    backgroundColor: Colors.WhiteColor,
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: Colors.WhiteColor,
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
  addIconConatiner: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: wp('32'),
    justifyContent: 'space-between',
  },
  editImage: {
    height: wp('4.5'),
    width: wp('4.5'),
  },
  editConatiner: {
    height: wp('5'),
    width: wp('5'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WhiteColor,
    borderRadius: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryBtn: {
    backgroundColor: Colors.ButtonColor,
    height: Screen.width * 0.12,
    width: wp('84'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

   // elevation: 1,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 8,
  },
  back_roundViewInner: {
    width: Screen.width * 0.055,
    height: Screen.width * 0.055,
    borderRadius: (Screen.width * 0.0945) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // margin: Screen.width * 0.047,
    //  bottom: (Screen.width * 0.21) + (DeviceInfo.hasNotch() ? 15 : 15),
    //  position: "absolute",
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  modalContent: {
    justifyContent: 'center',
    //        alignItems: 'center',
    margin: 0,
    width: Screen.width,
    height: Screen.height,
    zIndex: 1
  },
});
export default styles;
