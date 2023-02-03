import { Dimensions, I18nManager } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DeviceInfo from 'react-native-device-info';
import Constants from '../../common/Constants'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    upper_view: {
        width: Screen.width,
        height: Screen.height,
        backgroundColor: '#000',
        opacity: .3,
    },
    main_view: {
        width: "100%",
        height: Screen.height - 50,
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    close_view: {
        alignItems: "center",
        textAlign: "center"
    },
    line_view: {
        width: 45,
        marginTop: 12,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 6,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
    },
    text_for: {
        fontSize: 20,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
    },
    search_view: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    img_url: {
        width: 30,
        height: 30,
        marginRight: 8
    },
    name_flag: {
        margin: 5,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: 18
    },
    flag_code: {
        margin: 5,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: 18,
        position: 'absolute',
        right: 0
    },
    inner_line_view: {
        width: "auto",
        borderBottomColor: '#D8D6D6',
        borderBottomWidth: 1,
        marginBottom: 5
    }
};