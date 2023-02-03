import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  height_center: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#9E9C9C',
    borderBottomWidth: 0.5,
    paddingRight: 3.5,
    marginBottom: 1
  },
  for_height_flex: {
    flexDirection: 'row',
    height: Screen.height < 600 ? 42 : Screen.height * 0.0648,
    alignItems: 'center',
  },
  optionStyle: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    fontSize: Constants.ResponsiveSize.f14,
    textAlign: 'left',
  },
  firstHalf: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center_align: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 7
  },
  gray_imgg: {
    width: Screen.width * 0.0467,
    height: Screen.width * 0.0467,
    marginTop: 1,
    marginRight: 10,
  },
  iconStyle: {
    width: Screen.width * 0.0597,
    height: Screen.width * 0.0597,
    marginTop: 1,
    marginLeft: 10,
  },
};
