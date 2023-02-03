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
    width: Screen.width - 30,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,

    backgroundColor: '#f6f6f6',
    shadowColor: '#ababab',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 0,
    borderRadius: 5,
    flexDirection: 'row',
  },
  titleStyle: {
    color: '#1db063',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 17,
    marginTop: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  headingStyle: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 13,
    marginTop: 2,
  },
  detailsStyle: {
    color: '#000',
    fontSize: 13,
    marginTop: 2,
  },
  empty_view: {
    width: '2%',
    backgroundColor: '#1db063',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  main_view: {
    width: '95%',
    marginLeft: 8,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
  },
  items: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 6,
  },
  bottomMargin: {
    marginBottom: Screen.height * 0.13,
  },
  notificationNotIn: {
    width: Screen.width * 0.517,
    height: Screen.width * 0.658
  },
  notificationNotFoundText: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0627,
    marginTop: 10,
    textAlign: 'center'
  },
  noNotification: {
    flex: 1,
    marginTop: 30,
    width: Screen.width - 10,
    alignItems: 'center',
  }


};
