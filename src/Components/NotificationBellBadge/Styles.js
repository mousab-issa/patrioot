import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {

    justifyContent: "center",
    alignItems: "center",
    width: Screen.width * 0.07405,
    height: Screen.width * 0.07405,
  },
  notification_image: {
    width: Screen.width * 0.05405,
    height: Screen.width * 0.05405,
    resizeMode: 'contain',
    marginTop: Screen.width * 0.01405,
  },
  badge: {
    position: 'absolute',
    width: Screen.width * 0.05405,
    height: Screen.width * 0.040,
    left: -Screen.width * 0.020,
    top: -10,
    backgroundColor: '#FF0000',
    borderRadius: 15
  },
  badge_text: {
    color: '#fff',
    fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0290,
    textAlign: 'center',
    
  },


};
