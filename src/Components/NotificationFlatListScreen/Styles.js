import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  notificationCard: {
    width: Screen.width - Screen.width * 0.0705,
    marginTop: Screen.width * 0.03525,
    marginLeft: Screen.width * 0.03525,
    marginRight: Screen.width * 0.03525,
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
  titleStyle: {
    color: '#1db063',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f16,
  },
  headingStyle: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f14,
    marginTop: 2,
  },
  detailsStyle: {
    color: '#000',
    fontSize: Constants.ResponsiveSize.f13,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    marginTop: 2,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginLeft: 4
  },
  empty_view: {
    width: '3%',
    backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  main_view: {
    width: '95%',
    marginLeft: 8,
    paddingVertical: 10
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 1,
  },
  items: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: Screen.height * 0.00648,
    marginTop: 3
  },
};
