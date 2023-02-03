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
  topBar: {
    width: Screen.width,
    height: 80,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  searchContainerOuter: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  searchContainer: {
    width: Screen.width * 0.77,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  searchStyle: {
    borderWidth: 1,
    borderColor: '#c1c0c0',
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginRight: 2,
  },
  profileOuterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Screen.width * 0.125,
    width: Screen.width * 0.125,
    marginLeft: 6,
  },
  profileStyle: {
    borderWidth: Screen.width * 0.0235,
    borderColor: '#1db063',
    backgroundColor: '#1db063',
    borderRadius: 30,
    flexDirection: 'row',
    marginLeft: Screen.width * 0.01175,
    alignItems: 'center',
    justifyContent: 'center',

    height: Screen.width * 0.11,
    width: Screen.width * 0.11,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  buttonViewOuter: {
    position: 'absolute',
    bottom: 10,
    left: Screen.width * 0.05,
    width: Screen.width * 0.9,
    height: Screen.width * 0.235,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  textStyle: {
    color: '#c1c0c0',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 13,
    marginTop: 2,
  },
  greenCircle: {
    backgroundColor: '#1db063',
    width: 40,
    height: 40,
    borderRadius: 20,
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
  redCircle: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 20,
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
  search_black_img: {
    width: Screen.width * 0.0705,
    height: Screen.width * 0.0705,
    marginTop: 1,
    marginLeft: Screen.width * 0.0355,
  },
  text_for_find: {
    width: '85%',
    color: '#383838',
    fontSize: Screen.width * 0.0329,
    marginLeft: Screen.width * 0.01175,
    marginBottom: 1,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'left',
  },
  avatar_img: {
    width: Screen.width * 0.075,
    height: Screen.width * 0.075,
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center_view_inner_logo: {
    width: 25,
    height: 25,
    marginTop: 1,
    marginLeft: 1,
  },
  center_in_home: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    backgroundColor: '#fff',
    borderRadius: Screen.width * 0.0405,
    width: Screen.width * 0.92,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  textHeadingStyle: {
    flex: 1,
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.05405,
    width: Screen.width,
    textAlign: 'left',
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
  bottomMargin: {
    padding: 10
  },
};
