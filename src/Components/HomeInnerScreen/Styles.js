import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  textHeadingStyle: {
    flex: 1,
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.05405,
    width: Screen.width,
    textAlign: 'left',
    marginTop: Screen.width * 0.0235,
    marginLeft: Screen.width * 0.06,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  viewStyle: {
    backgroundColor: 'white',
    borderRadius: Screen.width * 0.0405,
    width: Screen.width * 0.92,
    marginTop: Screen.width * 0.0012,
    marginLeft: Screen.width * 0.04,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  OuterView: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bgImh: {
    width: null,
    height: Constants.ResponsiveSize.screenHeight * 0.22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sizeFont: {
    fontSize: Constants.ResponsiveSize.f16,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    width: '100%',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  sizeDetails: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    width: '100%',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: 20,
  },
  cardBottom: {
    margin: Constants.ResponsiveSize.f10,
    backgroundColor: '#fff',
  },
};
