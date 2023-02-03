import { I18nManager } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

export default {
  imageContainer: {
    height: wp('45'),
    width: wp('100'),
    backgroundColor: '#ababab'
  },
  cardImage: {
    height: wp('45'),
    width: wp('100'),
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
    position: 'absolute',
    left: 0,
    top: 0,
  },
  backIcon: {
    height: wp('5'),
    width: wp('5'),
  },
  secondryHeader: {
    width: wp('100'),
    height: wp('15'),
    flexDirection: 'row',
    backgroundColor: Colors.WhiteColor
  },
  leftContent: {
    width: wp('70'),
    flexDirection: 'column',
    paddingLeft: wp(3),
    paddingTop: wp(1),
  },
  restaurentText: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  secondryText: {
    fontSize: Constants.ResponsiveSize.f12,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    color: Colors.SecondaryTextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  rightContent: {
    width: wp('30'),
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


};
