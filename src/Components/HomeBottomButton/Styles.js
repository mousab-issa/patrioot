import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center_view_inner_logo: {
    width: Screen.width * 0.074,
    height: Screen.width * 0.074,
    marginTop: Screen.width * 0.00235,
    marginLeft: Screen.width * 0.00235,
  },
  center_in_home: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: - (Screen.width * 0.0235)

  },
  textStyle: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontWeight: '500',
    fontSize: Screen.width * 0.02585,
    marginTop: Screen.width * 0.017,
    marginBottom: -(Screen.width * 0.0335),
    paddingBottom: Screen.width * 0.03525,
  },
};
