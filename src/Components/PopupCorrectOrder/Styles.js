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
    borderRadius: 30,
    height: 290,
    width: Screen.width * 0.9,
    alignItems: 'center',
  },
  sendButtonStyle: {
    height: 45,
    width: 130,

    backgroundColor: '#1cad61',
    borderRadius: 10,
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
    height: 45,
    width: 130,
    backgroundColor: '#FF3535',
    borderRadius: 10,
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
    fontSize: 16,
    textAlign: 'center',
  },
  blockImageSize: {
    width: 80,
    height: 80,
  },
  blockImageSizeOuter: {
    marginTop: 15,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E79E2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  textOuter: {
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    width: '80%',
  },
};
