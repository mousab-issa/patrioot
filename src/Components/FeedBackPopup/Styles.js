import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

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
  containerLoadingImage: {
    width: 160,
    height: 388,
    marginTop: 5,
  },
  popupInner: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 388,
    width: 314,
    marginLeft: (Screen.width - 314) / 2,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
  },
  feedbackEntryStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
  },
  feedbackEntryText: {
    fontSize: Constants.ResponsiveSize.f17,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
  },
  feedbackEntryInput: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  feedbackButtonContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 8,
    marginTop: 20,
  },
  feedbackSubmitButton: {
    backgroundColor: Colors.AppGreenColor,
    width: 170,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  feedbackButtonText: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    color: Colors.WhiteColor,
  },
  popupbuttonsFlex: {
    width: '70%',
    height: 65,
    marginTop: Screen.width * 0.047,
    flexDirection: 'row',
  },
  popupImage: {
    width: 70,
    height: 78,
    marginTop: 10,
    marginBottom: 10,
  },
  TumbImage: {
    width: Screen.width * 0.10575,
    height: Screen.width * 0.10575,
  },
  feedbackTextStyle: {
    fontSize: Constants.ResponsiveSize.f14,
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
  },
  TumbupView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TumbdownView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularTumbsup: {
    width: Screen.width * 0.1645,
    height: Screen.width * 0.1645,
    borderRadius: 45,
    backgroundColor: '#1cad61',
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

  circularTumbdown: {
    width: Screen.width * 0.1645,
    height: Screen.width * 0.1645,
    borderRadius: 45,
    backgroundColor: '#fc5863',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    TumbView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularTumbdownImageContainer: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularTumbdownImage: {
      width: 45,
      height: 45,
    },
    circularTumbdownInnerView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
};
