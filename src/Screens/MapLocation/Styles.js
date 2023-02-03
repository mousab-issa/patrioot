
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
    bottomView: {
        borderTopLeftRadius: Screen.width * 0.05875,
        borderTopRightRadius: Screen.width * 0.05875,
        height: Screen.width * 0.705,
        width: Screen.width,
        alignItems: "center",
        textAlign: "center",
        bottom: 0,
        left: 0,
        backgroundColor: "#fff",
        position: "absolute"
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
    inner_line: {
        width: 45,
        marginTop: 12,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 6,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
    },
    text_size: {
        fontSize: Screen.width * 0.0705,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: "center",
    },
    inner_text_size: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        paddingTop: 15,
        paddingBottom: 10,
        textAlign: "center",
    },
    next_btn_text: {
        color: "white",
        fontSize: Screen.width * 0.047,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: "center",
    }
};