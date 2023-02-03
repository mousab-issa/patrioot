import { DevSettings, Dimensions, I18nManager, Platform } from "react-native";
import { color } from "react-native-reanimated";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants'
import Colors from '../../theme/colors'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    outerview: {
        //   marginHorizontal: Screen.width * 0.047,
        // paddingTop: 20,
        paddingBottom: Platform.OS === 'android' ? 10 : 15,
        paddingTop: Platform.OS == 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: Colors.WhiteColor,
    },
    containerLoading: {
        flex: 1,
        height: Screen.height,
        width: Screen.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 13,
        height: 45,
        marginTop: Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? 25 : 0) : Constants.STATUSBAR_HEIGHT,
        //    marginTop: Constants.STATUSBAR_HEIGHT,
    },
    containerInner: {
        flex: 2,
        justifyContent: 'center',
        //   flexDirection: 'row',
        //   marginBottom: Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? -10 : -1) : -1,
    },
    logo: {
        width: Screen.width * 0.080, // 33,
        height: Screen.width * 0.080,
        marginLeft: 5,
        marginRight: 5,
    },
    appName: {
        //  fontSize: Screen.width * 0.0584 , //25,
        width: Screen.width * 0.210, // 33,
        height: Screen.width * 0.080,
        paddingLeft: 8,
        //  fontWeight: "400",
        //  fontFamily: I18nManager.isRTL ? Constants.AppNameFontFamily : Constants.AppNameFontFamily,
    },
    inner_img: {
        width: "auto",
        height: (Screen.height * 0.333),
        resizeMode: 'contain',
    },
    language_select: {
        marginRight: 5,
        height: Screen.width * 0.087,
        width: Screen.width * 0.087,
        backgroundColor: Colors.badge,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',

    },
    languageOption: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '99%'
    },
    languageOptionText: {
        color: Colors.WhiteColor,
        fontSize: Screen.width * 0.034, //17,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicMedium : Constants.fontFamilyMedium,
    },
    mainLogo: {
        // marginTop: Screen.height * (Screen.height < 800 ? 0.07 : 0.17),
        //    marginTop: 20,
        alignItems: 'center',
        width: Screen.width,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: (Screen.height / 2) - Constants.ResponsiveSize.f40,
    },
    ico_size: {
        // marginTop: -(Screen.width * 0.095),
        //  height: Screen.width /4, // Constants.ResponsiveSize.f50, 
        width: Screen.width * 0.70, // Constants.ResponsiveSize.f50
    },
    language_select_close: {
        marginLeft: Screen.width - 50,
        marginBottom: 10,
        height: Screen.width * 0.080,
        width: Screen.width * 0.080,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',

    },
    pop_screen: {
        height: 50,
        flex: 1,
        justifyContent: 'flex-end',
    },
    crossStyle: {
        height: 20,
        width: 20
    },
    languagePopupOuter: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    languagePopupInner: {
        padding: 10
    },
    languageLineOuter: {
        flexDirection: "row",
        marginTop: 20
    },
    languageText: {
        color: "white"
    },
    languageDescriptionText: {
        flex: 2,
        paddingLeft: 20
    },
    languageSelection: {
        flex: 3,
        paddingLeft: 20,
        alignItems: 'flex-end'
    },
    languageSelectionImage: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    close_pop: {
        backgroundColor: "white",
        height: 50,
        width: 50, resizeMode: 'contain',
        marginLeft: 40
    },
    pop_text: {
        fontSize: 20,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    pop_second_text: {
        fontSize: Screen.width * 0.0467,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        top: 10
    },
    welcome_text: {
        fontSize: Platform.OS === 'android' ? Constants.ResponsiveSize.f33 : Constants.ResponsiveSize.f31,
        color: Colors.TextColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: "center",
        width: Screen.width - 40,
        paddingRight: Screen.width * 0.030
    },
    joinus_text: {
        fontSize: Constants.ResponsiveSize.f15,
        color: Colors.TextColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: "center",
        width: Screen.width - 50,
        lineHeight: 30,
    },
    loginsocialmedia_text: {
        fontSize: Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: "left",
        width: Screen.width - 50,
        color: '#06B160',
        lineHeight: 20,
        marginLeft: 1

    },
    termsAndServiceBlack_text: {
        fontSize: Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        color: Colors.TextColor,
        textAlign: "left",
        lineHeight: 20,
    },
    termsAndServicegreen_text: {
        fontSize: Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        color: '#06B160',
        lineHeight: 20,
    },
    termsandpp_text: {
        fontSize: Constants.ResponsiveSize.f16,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: "left",
        width: Screen.width - 50,
        color: '#000',
        lineHeight: 20,
    },
    loginWithStyle: {
        backgroundColor: Colors.ButtonColor,
        height: Screen.height < 500 ? 40 : Screen.height * 0.0547,
        width: Screen.width - 40,
        borderRadius: 50,

        //  justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 3
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,

        // elevation: 1
    },
    rightArrow: {
        height: Screen.width * 0.055,// 22,
        width: Screen.width * 0.055,
        //   left: Screen.width - 110
    },
    loginStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -75, //Screen.width * 0.1175,
    },
    logintext: {
        color: Colors.WhiteColor,
        fontSize: Constants.ResponsiveSize.f13,

        //  top: 18,
        paddingLeft: 20,
        paddingRight: 20,
        // marginVertical:20,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        // textAlign: I18nManager.isRTL ? "left" : "right",
        textAlign: "center",
    },
    language_select_pop: {
        // marginLeft: 150,
        // flex: 1,
        height: 36,
        width: 36,
        backgroundColor: "#0187B4",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: 'center',

    },
    language_select_pop2: {
        // marginLeft: 150,
        height: 36,
        width: 36,
        backgroundColor: "#06B160",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: 'center',
    },
    englishRowOuter: {
        alignItems: 'center',
        flexDirection: 'row',
        width: Screen.width - 20
    },
    socialMediaImages: {
        width: Screen.width * 0.0611,
        height: Screen.width * 0.0611,
        //   marginLeft: 17, 
        //   marginTop: 8
    },
    socialMediaStyle: {
        flexDirection: "row",
        justifyContent: "center",
    },
    social_link: {
        marginTop: Screen.width * 0.047,
        marginRight: Screen.width * 0.0235,
        width: Screen.width * 0.15275,
        borderRadius: Screen.width * 0.0235,
        height: Screen.width * 0.1081,
        backgroundColor: "#E5E5E5",
        alignItems: 'center',
        justifyContent: 'center'
    },
    social_link2: {
        marginTop: Screen.width * 0.047,
        marginRight: Screen.width * 0.0235,
        width: Screen.width * 0.15275,
        borderRadius: Screen.width * 0.0235,
        height: Screen.width * 0.1081,
        backgroundColor: "#1877F2",
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeView: {
        alignItems: "center",
        //  bottom: -100,
        marginTop: Constants.ResponsiveSize.f120,
    },
    welcomeViewSub: {
        alignItems: "center",
        //  bottom: -100,
    },
    socialMediaView: {
        alignItems: "center",
        marginTop: 2,
    },
    TermsPPView: {
        alignItems: "center",
        position: 'absolute',
        //bottom: 20,
        justifyContent: 'center',
        left: 15,
        bottom: Platform.OS === 'android' ? 25 : 20,
    },
    bottomView: {
        flexDirection: 'row',
        width: Screen.width - 40,
        marginLeft: 10,
        flexWrap: "wrap"
    },
    butonView: {
        width: Screen.width,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: Constants.ResponsiveSize.f130,
        //  height:Screen.width * 0.1,
    },
    buttonOuter: {
        width: Screen.width,
        //  marginHorizontal: -Constants.ResponsiveSize.f16,
        // marginBottom: Constants.ResponsiveSize.f14,
        // marginTop: Constants.ResponsiveSize.f8,
    },
    modalContent: {
        justifyContent: 'center',
//        alignItems: 'center',
        margin: 0,
        width: Screen.width,
        height: Screen.height
    },
};