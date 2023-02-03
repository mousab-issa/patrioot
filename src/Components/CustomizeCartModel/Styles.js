import { Dimensions, I18nManager, Platform } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    flexDirection: 'row',
  },
  pop_screen: {
    height: 50,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    
  },
  modelPopupOuter: {
    backgroundColor: Colors.BackgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: Platform.OS == 'ios' ? 10 : 1,
    zIndex: 2
  },
  modelPopupInner: {
    padding: 10,
  },
  modelLineOuter: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modelText: {
    color: '#fff',
    fontSize: Screen.width * 0.0374,
    fontFamily: I18nManager.isRTL
      ? Constants.AppNameFontFamilyBold
      : Constants.AppNameFontFamilyBold,
  },

  bottomDisatnce: {
    marginBottom: Screen.width * 0.0975,
  },
  pop_text: {
    fontSize: Constants.ResponsiveSize.f18,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: 'left',
    color: Colors.TextColor,
  },
  divider: {
    borderStyle: 'dashed',
    borderRadius: 1,
    width: Screen.width,
    height: 1,
    borderWidth: 1,
    borderColor: '#ACACAC',
  },
  sheetTypeIcon: {
    width: 45,
    backgroundColor: Colors.SecondaryText,
    borderColor: Colors.SecondaryText,
    borderWidth: 3,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  doneButton: {
    backgroundColor: Colors.ButtonColor,
    width: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 2,
    paddingBottom: 2,
  },
  doneButtonText: {
    color: Colors.WhiteColor,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    marginBottom: 2
  },
  messageBox: {
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    height: Screen.width * 0.5525,
    marginHorizontal: 10,
    color: Colors.TextColor,
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
};
