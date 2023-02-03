import { Dimensions, I18nManager } from 'react-native';
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
  chatAdmincard: {
    width: Screen.width * 0.96,
    marginLeft: Screen.width * 0.02,
    flexDirection: 'row',
    marginTop: 10,
  },
  chatUsercard: {
    width: Screen.width * 0.96,
    marginRight: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent:'flex-end',
  },
  UserCardInner: {
    //  flex: 1,
    //  width: '80%',
    maxWidth: '80%',
    backgroundColor: Colors.ChatGreenColor,
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 30,
  },
  adminCardInner: {
   // flex: 1,
    maxWidth: '80%',
    backgroundColor: '#EFEFEF',
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 3,
  },
  adminCardInnerView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,

  },
  userCardInnerView: {
    // flex: 1,
    //  flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,

  },
  chatTextStyle: {
    fontSize: Constants.ResponsiveSize.f11,
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    textAlign: 'center',
    marginTop: 5,
    marginTop: Constants.ResponsiveSize.f9,
    marginBottom: Constants.ResponsiveSize.f9,
  },
  adminCardInnerViewText: {
    marginLeft: 5,
    color: Colors.TextColor,
    padding: 2,
  },
  feedBackImage: {
    width: Screen.width * 0.10775,
    height: Screen.width * 0.10775,
    marginLeft: Screen.width * 0.0005,
  },
};
