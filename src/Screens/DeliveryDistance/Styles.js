
import { Dimensions, I18nManager, StyleSheet } from "react-native";
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bottomView: {
        height: Screen.width * 0.705,
        width: Screen.width,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
    buttonStyle: {
        backgroundColor: "#06B160",
        height: Screen.width * 0.11,
        marginTop: Screen.width * 0.024,
        width: Screen.width * 0.9,
        borderRadius: (Screen.width * 0.11) / 2,
        marginBottom: Screen.width * 0.02,
        marginHorizontal: 40,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 1,
        justifyContent: 'center',
        flexDirection: "row"
    },
    mark_img: {
        width: 40,
        height: 40
    },
    back_btn_view: {
        width: Screen.width * 0.1645,
        height: Screen.width * 0.0705,
        borderRadius: Screen.width * 0.0235,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: Screen.width * 0.047,
        top: DeviceInfo.hasNotch() ? 30 : 5, position: "absolute",
    },
    back_btn_text: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    back_roundView: {
        width: Screen.width * 0.0945,
        height: Screen.width * 0.0945,
        borderRadius: (Screen.width * 0.0945) / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: Constants.ResponsiveSize.f10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    back_roundViewInner: {
        width: Screen.width * 0.055,
        height: Screen.width * 0.055,
        borderRadius: (Screen.width * 0.0945) / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    location_roundView: {
        width: Screen.width * 0.0945,
        height: Screen.width * 0.0945,
        borderRadius: (Screen.width * 0.0945) / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: Screen.width * 0.047,
        bottom: (Screen.width * 0.62) + (DeviceInfo.hasNotch() ? 15 : 15),
        right: 0,
        position: "absolute",

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    backArrow: {
        width: Screen.width * 0.043,
        height: Screen.width * 0.043,
    },
    inner_line: {
        width: 50,
        marginTop: 8,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 4,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
    },
    text_size: {
        fontSize: Screen.width * 0.0455,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        fontWeight: '600',
        textAlign: "left",
        marginHorizontal: 20,
        marginVertical: Screen.width * 0.0188,
    },
    inner_text_size: {
        fontSize: I18nManager.isRTL ? Constants.ResponsiveSize.f14 : Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        paddingTop: 3,
        paddingBottom: 4,
        width: Screen.width * 0.60,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
        color: Colors.TextColor,
    },
    addressSize: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        paddingTop: 3,
        paddingBottom: 2,
        textAlign: "center",
        marginBottom: 10,
    },
    next_btn_text: {
        color: "white",
        fontSize: Screen.width * 0.042,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        marginLeft: 10
    },

    height_and_center: {
        height: Screen.width * 0.1175,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    searchStyle: {
        borderWidth: 1,
        borderColor: '#CDCDCD',
        backgroundColor: '#F9F9F9',
        borderRadius: (Screen.width * 0.094) / 2,
        flexDirection: 'row',
        marginLeft: Screen.width * 0.047,
        alignItems: 'center',
        justifyContent: 'center',
        height: Screen.width * 0.094,
        marginRight: Screen.width * 0.047
    },
    search_black_img: {
        width: Screen.width * 0.0705,
        height: Screen.width * 0.0705,
        marginTop: 1,
        marginLeft: Screen.width * 0.0455,
    },
    input_text: {
        height: Screen.width > 400 ? 40 : 37,
        width: "90%",
        color: '#383838',
        fontSize: Screen.width * 0.03525,
        marginLeft: 5,
        marginBottom: 1,
        textAlignVertical: "top",
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    viewOuter: {
        marginVertical: 1,
        marginHorizontal: 15,

    },
    middlePIN: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forBack: {
        flexDirection: 'row',
        margin: Screen.width * 0.047,
    },
    addressOuter: {
        flexDirection: 'row',
        margin: 8,
    },
    size: {
        fontSize: Screen.width * 0.0455,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    adressPart1: { width: '10%', },
    adressPart2: { width: '90%', top: 1 },
    choseLocationbg: {
        position: "absolute",
        width: Screen.width * 0.9,
        backgroundColor: Colors.BackgroundColor,
        margin: Screen.width * 0.047,
        top: (DeviceInfo.hasNotch() ? 40 : 20),
        borderRadius: (Screen.width * 0.09) / 1.5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 1
    },
    hrRowinner: {
        marginLeft: 45,
        marginRight: 80,
        borderBottomColor: '#DFDFDF',
        borderBottomWidth: 1,
    },
    hrRow: {
        marginTop: Screen.width * 0.03,
        borderBottomColor: '#818181',
        borderBottomWidth: 1,
    },
    pin: {
        flexDirection: "row", margin: 15
    },
    leftView: {
        width: "20%"
    },
    rightView: {
        width: "80%"
    },
    pinsize: {
        width: Screen.width * 0.1075,
    },
    distance: {
        fontSize: 16,
        color: "gray"
    },
    location: {
        fontSize: 16,
        top: 3
    },
    sizeText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    innerImg: {
        width: Screen.width,

    },
    addressIconOuter: {
        backgroundColor: '#FF5530',
        width: Screen.width * 0.0552,
        height: Screen.width * 0.0552,
        borderRadius: (Screen.width * 0.0752) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Screen.width * 0.00705
    },
    addressIconOuter2: {
        backgroundColor: '#06B160',
        width: Screen.width * 0.0552,
        height: Screen.width * 0.0552,
        borderRadius: (Screen.width * 0.0752) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Screen.width * 0.00705
    },
    addressIconInner: {
        backgroundColor: '#fff',
        width: Screen.width * 0.0239,
        height: Screen.width * 0.0239,
        borderRadius: (Screen.width * 0.0329) / 2,
    },

    bottomVieww: {
        flexDirection: "row",
        backgroundColor: Colors.ButtonColor,
        margin: 10,
        borderRadius: 20,
        height: Screen.width * 0.10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Constants.ResponsiveSize.f25,
        marginHorizontal: Constants.ResponsiveSize.f25,

    },
    innerBottom: {
        flex: 1,
        borderTopLeftRadius: Constants.ResponsiveSize.f10,
        borderTopRightRadius: Constants.ResponsiveSize.f10,
        backgroundColor: Colors.WhiteColor,
        alignItems: 'center',
    },
    fontSixe: {
        color: "#fff",
        fontSize: Constants.ResponsiveSize.f14,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        marginLeft: 15,
        marginRight: 10,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    marginn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    distanceSize: {
        marginLeft: 8,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Constants.ResponsiveSize.f13,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
        color: Colors.TextColor,
    },
    rightEditView: {
        position: "absolute",
        right: 10,
        top: '35%',
    },
    editView: {
        height: Screen.width * 0.0564,
        width: Screen.width * 0.129,
        borderRadius: 20,
        borderColor: "#06B160",
        borderWidth: 2,
        justifyContent: 'center',
    },
    editText: {
        textAlign: "center",
        color: "#06B160",
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        fontSize: Constants.ResponsiveSize.f11,
        lineHeight: 16,
    },
    mainBottom: {
        width: Screen.width,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',

        bottom: 0
    },
    leftPinImg: {
        marginTop: Screen.width * 0.0305,
        flexDirection: "row",
        width: '85%',
        alignItems: 'center'
    },
    doubleImgPin: {
        marginLeft: 20
    }

})