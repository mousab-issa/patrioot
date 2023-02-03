import { Dimensions, I18nManager } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../common/Constants';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
  },
  mainText: {
    fontSize: RFValue(80),
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#000',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: RFValue(18),
    color: '#000',
    textAlign: 'center',
  },
  topView: {
    height: Screen.height * 0.0756,
    width: Screen.width,
  },
  bodyView: {
    flex: 1,
    width: Screen.width,
    height: Screen.height - Screen.height * 0.0864,
    alignItems: 'center',
  },
  textHeadingStyle: {
    color: '#000',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.0467,

    marginLeft: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  paymentArea: {
    width: Screen.width - 20,
    height: Screen.width * 0.818,
    backgroundColor: '#fff',

    borderRadius: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  cardRowStyle: {
    height: Screen.width * 0.14,
    width: Screen.width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Screen.width * 0.0233,
  },
  cardRowStyle2: {
    height: Screen.width * 0.14,
    width: Screen.width / 2 - 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: Screen.width * 0.0233,
  },
  cardFieldBase: {
    backgroundColor: '#C7C7C7',
    height: 1,
    width: Screen.width - 100,
  },

  cardFieldBase2: {
    backgroundColor: '#C7C7C7',
    height: 1,
    width: Screen.width / 2 - 60,
  },
  expiryFieldOuter: {
    backgroundColor: '#fff',
    height: 45,
    width: Screen.width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back_btn_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Screen.height * 0.0648,
  },
  back_btn: {
    width: Screen.width * 0.0818,
    height: Screen.width * 0.0818,
    marginTop: 1,
    marginLeft: 10,
  },
  paymentArea_inner: {
    height: Screen.width * 0.14,
    width: Screen.width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  master_img: {
    width: Screen.width * 0.152,
    height: Screen.width * 0.07,
    marginTop: 1,
    marginLeft: 10,
  },
  master_and_visa_card: {
    width: Screen.width * 0.152,
    height: Screen.width * 0.07,
    marginTop: 1,
    marginLeft: 10,
  },
  radio_btn: {
    width: Screen.width * 0.042,
    height: Screen.width * 0.042,
    marginTop: 1,
    marginLeft: 10,
  },
  expiryOuter: {
    width: Screen.width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardFieldOuter: {
    backgroundColor: '#fff',
    height: Screen.width * 0.076,
    width: Screen.width - 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFieldOuter2: {
    backgroundColor: '#fff',
    height: Screen.width * 0.076,
    width: Screen.width / 2 - 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    color: '#000',
    fontWeight: '600',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Screen.width * 0.0347,
    width: Screen.width - 100,
    marginLeft: 2,
    textAlign: 'left',
  },
  headingStyle2: {
    color: '#000',
    fontWeight: '600',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Screen.width * 0.0347,
    width: Screen.width / 2 - 50,
    marginLeft: 2,
    textAlign: 'left',
  },
  input_text_1: {
    height: 38,
    width: '94%',
    color: '#383838',
    fontSize: 13,
    marginLeft: 1,
    marginBottom: 1,
    textAlignVertical: 'top',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  second_input_text: {
    height: 38,
    width: '94%',
    color: '#383838',
    fontSize: 13,
    marginLeft: 1,
    marginBottom: 1,
    textAlignVertical: 'top',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  center_height_width: {
    width: Screen.width * 0.257,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown_view: {
    width: Screen.width * 0.21,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown_text: {
    marginLeft: 5,
    marginTop: 4,
    labelPadding: 0,
    color: '#000',
    width: 80,
  },
  card: {
    width: Screen.width * 0.257,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  second_dropdown: {
    width: Screen.width * 0.21,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_center: {
    width: Screen.width * 0.257,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_inner_view: {
    width: Screen.width * 0.21,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  first_input_text: {
    height: 35,
    width: '94%',
    color: '#383838',
    fontSize: 15,
    marginLeft: 5,
    marginTop: 2,
    textAlignVertical: 'top',
  },

  addClick_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Add_btn_view: {
    backgroundColor: '#1db063',
    width: 100,
    height: Screen.width < 350 ? 35 : 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  add_btn_text: {
    color: '#fff',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Screen.width * 0.042,
  },
  card_view_inner: {
    height: Screen.width * 0.14,
    width: Screen.width - 20,
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
    margin: 10,
  },
  left_blue_sec: {
    backgroundColor: '#0034A9',
    height: Screen.width * 0.14,
    width: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  master_card_size_img: {
    width: Screen.width * 0.152,
    height: Screen.width * 0.07,
  },
  card_num: {
    fontSize: Screen.width * 0.0374,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
  },
  card_right: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    height: Screen.width * 0.14,
  },
  text_right: {
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    marginRight: 20,
  },
  tick_arrow: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: Screen.width < 350 ? 20 : 24,
    width: Screen.width < 350 ? 20 : 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: (Screen.width * 0.14) / 2,
    marginRight: 5,
  },
  tick_img: {
    width: Screen.width < 350 ? 15 : 17,
    height: Screen.width < 350 ? 15 : 17,
  },
  delete_card_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete_card_inner_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: Screen.width * 0.35,
    backgroundColor: 'red',
    borderRadius: 7,
  },
  delete_card_text: {
    fontSize: Screen.width * 0.035,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    color: '#fff',
  },
  iconStyle: {
    width: Screen.width * 0.0447,
    height: Screen.width * 0.0447,
    marginTop: 1,
    position: 'absolute',
    right: 40,
    bottom: 10,
  },
  iconStyle2: {
    width: Screen.width * 0.0447,
    height: Screen.width * 0.0447,
    marginTop: 1,
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
};
