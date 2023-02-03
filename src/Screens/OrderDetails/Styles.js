
import { Dimensions, I18nManager, Platform } from "react-native";
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainView: {
        margin: Screen.width * 0.044
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 10 : 12
    },
    backArrow: {
        width: Screen.width * 0.069,
        height: Screen.width * 0.069
    },
    heading: {
        fontSize: Constants.ResponsiveSize.f16,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: Colors.TextColor,
        marginLeft: 10
    },
    heading2: {
        fontSize: Constants.ResponsiveSize.f15,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
        color: Colors.TextColor,
    },
    textSize: {
        fontSize: Constants.ResponsiveSize.f14,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: Colors.TextColor,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    textTotal: {
        fontSize: Constants.ResponsiveSize.f12,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: Colors.TextColor,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
        lineHeight: Constants.ResponsiveSize.f18,
    },
    textSR: {
        fontSize: Screen.width * 0.022,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        fontWeight: "600",
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    textView: {
        marginTop: Screen.height * 0.046
    },
    bottom1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 3,
        paddingBottom: 2
    },
    bottomleft: { flex: 1, paddingLeft: 10 },
    bottomRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10,
        flexDirection: 'row'
    },
    priseView: {
        flexDirection: "row",
        marginTop: Screen.height * 0.016,
        justifyContent: 'space-between'
    },
    box: {
        height: Screen.height * 0.046,
        width: Screen.width * 0.200,
        backgroundColor: Colors.ButtonColor,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#B6B1B1",
        borderWidth: 1
    },
    boxWhite: {
        height: Screen.height * 0.046,
        width: Screen.width * 0.200,
        backgroundColor: "#fff",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#B6B1B1",
        borderWidth: 1
    },
    hrRowinner: {
        borderBottomColor: '#CECECE',
        borderBottomWidth: 1,
        top: 5,
    },
    fonts: {
        fontSize: Constants.ResponsiveSize.f12,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        color: Colors.TextColor,
    },
    fontSelected: {
        fontSize: Constants.ResponsiveSize.f12,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        color: Colors.WhiteColor,
    },
    textBoxView: {
        margin: Screen.width * 0.044,
    },
    totalView: {
        marginVertical: Screen.width * 0.044,
    },
    messageBox: {
        fontSize: Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicMedium : Constants.fontFamilyMedium,
        color: Colors.TextColor,
        borderRadius: 10,
        borderColor: '#B6B1B1',
        borderWidth: 1,
        justifyContent: "flex-start",
        top: 10,
        height: Screen.width * 0.3525,
        textAlignVertical: 'top',
        padding: 10,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    bottomView: {
        top: Screen.height * 0.0387,
    },
    forRow: {
        flexDirection: "row",
    },
    masterCard: {
        width: Screen.width * 0.139,
        height: Screen.width * 0.139
    },
    visaCard: {
        width: Screen.width * 0.139,
        height: Screen.width * 0.139
    },
    bottomText: {
        fontSize: Constants.ResponsiveSize.f11,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: "center",
        top: Screen.height * 0.0101,
        color: Colors.TextColor,
    },
    paymentText: {
        fontSize: Constants.ResponsiveSize.f9,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
        color: Colors.TextColor,
        marginLeft: 10
    },
    colorGreen: {
        color: "#00B467"
    },
    smallText: {
        fontSize: Constants.ResponsiveSize.f9,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    },
    textBtn: {
        color: Colors.WhiteColor,
        textAlign: "center",
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.04,
        justifyContent: "center"
    },
    submitBtn: {
        height: Screen.width * 0.1175,
        backgroundColor: Colors.ButtonColor,
        borderRadius: 100,
        top: Screen.height * 0.032,
        justifyContent: "center",

    },
    marginTop: {
        top: Screen.height * 0.039
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
    buttonOuter: {
        marginBottom: Constants.ResponsiveSize.f14,
        marginTop: Constants.ResponsiveSize.f18,

    },
};