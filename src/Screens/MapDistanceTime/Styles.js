import { Dimensions, I18nManager, StyleSheet } from "react-native";
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
        ...StyleSheet.absoluteFillObject,
    },
    buttonStyle: {
        backgroundColor: "#06B160",
        height: 58,
        marginTop: 40,
        width: "auto",
        borderRadius: 8,
        marginBottom: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    back_btn_view: {
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
    back_roundView: {
        width: Screen.width * 0.1145,
        height: Screen.width * 0.1145,
        borderRadius: (Screen.width * 0.1145) / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: Screen.width * 0.047,
        top: DeviceInfo.hasNotch() ? 35 : 10,
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
    back_btn_text: {
        fontSize: Screen.width * 0.03525,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: "#06B160"
    },
    main_view: {
        height: Screen.width * 0.423,
        width: Screen.width,
        backgroundColor: "#fff",
    },
    center: {
        alignItems: "center",
        textAlign: "center"
    },
    inner_line_view: {
        width: 45,
        marginTop: 12,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 6,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
    },
    width_height: {
        width: Screen.width * 0.094,
        height: Screen.width * 0.094
    },
    top_distance_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12
    },
    inner_text_size: {
        fontSize: Constants.ResponsiveSize.f16,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    last_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    mark_size: {
        width: 40,
        height: 40
    },
    backArrow: {
        width: Screen.width * 0.067,
        height: Screen.width * 0.067
    },
    outerView: {
        marginVertical: 1,
        marginHorizontal: 20
    }
};