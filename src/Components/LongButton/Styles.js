import { Dimensions, I18nManager, Platform } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    height: 100,
    width: Screen.width,
    backgroundColor: '#06B160',
  },
  buttonText: {
    fontSize:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f16
        : Constants.ResponsiveSize.f17,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.WhiteColor,
  },
  primaryBtn: {
    backgroundColor: Colors.ButtonColor,
    height:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f40
        : Constants.ResponsiveSize.f50,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Constants.ResponsiveSize.f18,
    marginBottom: Platform.OS === 'ios' ? 10 : 1
  },
  primaryBtn1: {
    height:
      Platform.OS === 'ios'
        ? Constants.ResponsiveSize.f40
        : Constants.ResponsiveSize.f50,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLoading: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
};
