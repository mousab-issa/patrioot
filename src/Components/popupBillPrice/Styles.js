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
  containerLoadingImage: { width: 160, height: 160, marginTop: 5 },
  popupInner: {
    backgroundColor: '#fff',
    borderRadius: Screen.width * 0.1175,
    height: Screen.width * 0.83,
    width: Screen.width * 0.9,
    alignItems: 'center',
  },
  popupbuttonsFlex: {
    width: '70%',
    height: 65,
    marginTop: 20,
    flexDirection: 'row',
  },
  popupImage: {
    width: Screen.width * 0.423,
    height: Screen.width * 0.395,
  },
  containerLoadingInnerView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressViewInner2Views: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressNoConatiner: {
    width: '98%',
    height: Screen.width < 400 ? 35 : 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1cad61',
    borderRadius: 20,
    marginRight: 2,
  },
  progressNoText: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#fff',
    fontSize: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: Screen.width * 0.0376,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  switchView: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '95%',
  },
  billPopupInnerView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  billPopupInnerViewLeft: {
    width: '68%',
    justifyContent: 'flex-end',
  },
  textInput: {
    backgroundColor: '#DDDBDB',
    height: Screen.width < 400 ? 35 : 40,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Screen.width * 0.0376,
    marginLeft: 5,
    width: '100%',
    borderRadius: 10,
  },
  textOuter: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: Screen.width * 0.01175,
  },
  billPopupInnerViewRight: {
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
  },
  font: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.03525,
  },
  billFont: {
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0329,
  },
  enterButtonStyle: {
    height: Screen.width < 400 ? 30 : 40,
    width: 120,
    marginTop: Screen.width * 0.0235,
    backgroundColor: '#1cad61',
    borderRadius: 5,
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
  enterButtonView: {
    width: 160,
    height: Screen.width * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
