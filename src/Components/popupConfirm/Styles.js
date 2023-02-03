import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  containerLoading: {
    flex: 1,
    height: Screen.height,
    width: Screen.width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  popupInner: {
    backgroundColor: '#fff',
    borderRadius: Screen.width * 0.047,
    height: Screen.width * 0.43,
    width: Screen.width * 0.8,
    alignItems: 'center',
  },
  sendButtonStyle: {
    height: Screen.width * 0.10575,
    width: Screen.width * 0.235,

    backgroundColor: '#1cad61',
    borderRadius: Screen.width * 0.0235,
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
  editButtonStyle: {
    height: Screen.width * 0.10575,
    width: Screen.width * 0.235,
    backgroundColor: 'grey',
    borderRadius: Screen.width * 0.0235,
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
  orderTopView: {width: '100%', paddingVertical: 10},
  orderTopInnerView: {width: '100%', flexDirection: 'row'},
  font: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0376,
  },
  buttonText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0423,
  },
  popInnerView: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginBottom: Screen.width * 0.01175,
  },
  contentStyle: {
    marginTop: Screen.width * 0.032,
    paddingBottom: Screen.width * 0.01175,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentStyleInner: {
    padding: Screen.width * 0.01175,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentStyleInner2: {
    marginTop: Screen.width * 0.0235,
    padding: Screen.width * 0.01175,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    width: '70%',
  },
};
