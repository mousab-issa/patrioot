import { Dimensions, I18nManager } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from '../../common/Constants'
import Colors from '../../theme/colors';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingLeft: 3.5,
    },
    mainText: {
        fontSize: RFValue(80),
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: '#000',
        textAlign: 'center'
    },
    bottomText: {
        fontSize: RFValue(18),
        color: '#000',
        textAlign: 'center'
    },
    topView: {
        width: Screen.width,
        marginTop: 2
    },
    bodyView: {
        flex: 1,
        width: Screen.width,
        alignItems: 'center',
    },
    textHeadingStyle: {
        color: Colors.BlackColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Constants.ResponsiveSize.f17,
        marginTop: 2,
        marginLeft: 10,
    },
    profileNameStyle: {
        color: Colors.BlackColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Constants.ResponsiveSize.f14,
        marginLeft: 5,
        textAlign: 'left',
    },
    profileNameStyle2: {
        color: Colors.BlackColor,
        fontWeight: '600',
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        fontSize: Screen.width * 0.0444,
        marginLeft: 20,
        textAlign: 'left',
    },
    profileNameStyle3: {
        color: Colors.BlackColor,
        fontWeight: '600',
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        fontSize: Screen.width * 0.0497,
        marginLeft: 20,
        textAlign: 'left',
    },
    profileNameValueStyle: {
        color: Colors.TextColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicMedium : Constants.fontFamilyMedium,
        fontSize: Constants.ResponsiveSize.f13,
        marginLeft: 6
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -7,
        paddingLeft: 5,
        paddingBottom: 10,
    },
    backClick: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Screen.height * 0.0648,
    },
    back_img: {
        width: Screen.width * 0.0818,
        height: Screen.width * 0.0818,
        marginTop: 1,
        marginLeft: 10
    },
    background: {
        backgroundColor: Colors.BackgroundColor,
    },
    background_inner: {
        flexDirection: 'row',
        //  height: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    height_center: {
        backgroundColor: '#fff',
        height: Screen.height < 600 ? 45 : Screen.height * 0.0648,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionStyle: {
        color: '#727272',
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Constants.ResponsiveSize.f14,
        marginLeft: 20,
        textAlign: 'left',
    },
    for_center_view: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    width_height_bg: {
        width: 1.5,
        height: 19,
        backgroundColor: Colors.borderFlag
    },
    green_tick: {
        width: Constants.ResponsiveSize.f16,
        height: Constants.ResponsiveSize.f16,
        marginTop: 1,
        marginLeft: 10,
    },
    contact_info: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    mail_info: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    payment: {
        flexDirection: 'row',
        height: Screen.height * 0.0648,
        alignItems: 'center'
    },
    img_view: {
        flex: 1,
        alignItems: 'flex-end'
    },
    gray_img: {
        width: 20,
        height: 20,
        marginTop: 1,
        marginRight: 10,
    },
    main_view_for_change_Language: {
        backgroundColor: '#fff',
        height: Screen.height < 600 ? 115 : Screen.height * 0.162,
        marginTop: 10,
        width: Screen.width,
    },
    row_margin: {
        flexDirection: 'row',
        height: Screen.height * 0.0431,
        alignItems: 'center',
        marginTop: 10
    },
    row_height_change_language: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    text_arabic: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginBottom: 10
    },
    logout_btn_view: {
        backgroundColor: Colors.BackgroundColor,
        borderWidth: 1,
        borderColor: Colors.RED_COLOR,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        height: Screen.height < 600 ? 35 : 40,
        width: (Screen.width * .75),
        margin: 25,
        marginTop: 40
    },
    logout_text: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Constants.ResponsiveSize.f16,
        color: Colors.RED_COLOR,
        width: (Screen.width * .85),
        textAlign: 'center'
    },
    headingView: {
        width: Screen.width,
        height: Constants.ResponsiveSize.f45,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    headingText: {
        color: Colors.BlackColor,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicMedium : Constants.fontFamilyMedium,
        fontSize: Constants.ResponsiveSize.f16,
        marginLeft: 10,
        textAlign: 'left',
        marginBottom: 5,
    },
    share_btn: {
        backgroundColor: Colors.ButtonColor,
        borderRadius: 100,
        height: Screen.width * 0.130,
        width: Screen.width * 0.130,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 10,
        marginBottom: 120
    },
    share_btn_img: {
        width: Screen.width * 0.090,
        height: Screen.width * 0.090
    },
    topRight: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    topLeft: {
        flex: 2, flexDirection: 'row', alignItems: 'center', left: 3
    },
    modalContent: {
        justifyContent: 'center',
        //        alignItems: 'center',
        margin: 0,
        width: Screen.width,
        height: Screen.height
    },
};