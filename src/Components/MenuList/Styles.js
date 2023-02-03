import {Dimensions, I18nManager} from 'react-native';
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
  scene: {
    flex: 1,
  },
  foodCardContainer: {
    width: Screen.width - 20,
    flexDirection: 'row',
    marginTop: Constants.ResponsiveSize.f5,
    marginBottom: Constants.ResponsiveSize.f9,
  },
  foodCardImage: {
    height: Constants.ResponsiveSize.f78,
    width: Constants.ResponsiveSize.f78,
    borderRadius: 5.5,
  },
  foodCardLeftContainer: {
    width: Constants.ResponsiveSize.f98,
    height: Constants.ResponsiveSize.f84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodCardRightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  PriceAndCaloriesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  SvgDesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  IconTitleTile: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  IconTitleTileLeft: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  IconStlye: {
    width: '18%',
  },

  boldText: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    width: Screen.width * 0.5,
    lineHeight: Constants.ResponsiveSize.f18,
  },
  InnerBoldText: {
    fontSize: Constants.ResponsiveSize.f15,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: Colors.TextColor,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: Constants.ResponsiveSize.f18,
  },
  regularText: {
    fontSize: Constants.ResponsiveSize.f13,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    color: Colors.TextColor,
    marginBottom: 6,
    marginTop: 6,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    width: Screen.width * 0.7,
    lineHeight: Constants.ResponsiveSize.f15,
  },
  seperatorOuter: {
    width: Screen.width,
    height: 2,
    alignItems: 'center',
  },
  seperatorInner: {
    backgroundColor: '#AFAFAF',
    width: Screen.width - 30,
    height: 0.5,
    marginLeft: -9,
  },
};
