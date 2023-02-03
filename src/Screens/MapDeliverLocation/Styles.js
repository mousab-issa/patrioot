import { Dimensions, I18nManager } from "react-native";
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        flex: 1,
    },
    map: {
        flex: 1
    },
    markUp: {
        position: 'absolute',
        width: 30, top: '45%',
        bottom: '45%',
        left: '45%',
        right: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    viewStyle: {
        borderTopLeftRadius: Screen.width * 0.05875,
        borderTopRightRadius: Screen.width * 0.05875,
        height: Screen.width * 0.8225,
        width: Screen.width,
        alignItems: "center",
        textAlign: "center",
        bottom: 0,
        backgroundColor: "#fff",
        position: "absolute",
        paddingLeft: 20,
        paddingRight: 20
    },
    topRow: {
        flexDirection: "row",
        width: Screen.width,
    },
    homeOuter:
    {
        flexDirection: "row",
        margin: Screen.width * 0.05875,
        width: Screen.width * .90,
    },
    middleLine: {
        width: (Screen.width * .90) - (Screen.width * 0.235),
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 4,
    },
    buttonStyle: {
        backgroundColor: "#06B160",
        height: 58,
        marginTop: 12,
        width: Screen.width * .94,
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonStyle: {
        backgroundColor: "#06B160",
        height: Screen.width * 0.1363,
        marginTop: Screen.width * 0.064,
        width: "auto",
        borderRadius: 8,
        marginBottom: Screen.width * 0.0235,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 1,
        justifyContent: 'center'
    },
    top_back_btn: {
        width: Screen.width * 0.1645,
        height: Screen.width * 0.0705,
        borderRadius: Screen.width * 0.0235,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: Screen.width * 0.047,
        top: DeviceInfo.hasNotch() ? 30 : 5,
        position: "absolute",
    },
    back_text: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    SlideDown_view: {
        width: Screen.width * 0.10575,
        marginTop: Screen.width * 0.0282,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 6,
        borderRadius: Screen.width * 0.0235,
        alignItems: "center",
        textAlign: "center",
    },
    for_location: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 15,
        marginTop: 10
    },
    fontsize_family: {
        fontSize: Screen.width * 0.047,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    inner_size: {
        fontSize: Screen.width * 0.0329,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
    },
    view_location: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 10
    },
    flexdirection: {
        flexDirection: "column"
    },
    left_home_logo: {
        height: Screen.width * 0.1175,
        width: Screen.width * 0.1175,
        backgroundColor: "#06B160",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Screen.width * 0.0235
    },
    right_home_logo: {
        height: Screen.width * 0.1175,
        width: Screen.width * 0.1175,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Screen.width * 0.0235
    },
    logo_size: {
        width: Screen.width * 0.094,
        height: Screen.width * 0.094
    },
    text_location: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.03055
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    distance: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20
    },
    price_text: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.047
    },
    price_inner: {
        fontWeight: "700",
        fontSize: Screen.width * 0.047,
        width: Screen.width * 0.188,
        borderRadius: Screen.width * 0.0235,
        backgroundColor: "#06B160",
        color: "white",
        height: Screen.width * 0.08225,
        marginLeft: Screen.width * 0.040,
        alignItems: "center",
        justifyContent: "center"
    },
    text_sar: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.047,
        color: "#fff"
    },
    next_view: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    order_confirm: {
        color: "white",
        fontSize: Screen.width * 0.047,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: "center",
    }
};








