import { Dimensions, I18nManager } from "react-native";
import Constants from '../../common/Constants';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        height: 100,
        width: Screen.width,
        backgroundColor: '#06B160'
    },
    top_view: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    top_left_img: {
        height: 70,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        top: 8
    },
    top_right_img: {
        height: 60,
        width: 60,
        borderRadius: 100,
        top: 8,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    firstView: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
    },
    first_inner: {
        height: 120,
        backgroundColor: "#FBC140",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    second_inner: {
        height: 120,
        backgroundColor: "#B7C7F0",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    third_inner: {
        height: 120,
        backgroundColor: "#E4A2A2",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    first_inner_pic: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#FF9717",
        left: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    second_inner_pic: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#178EFF",
        left: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    third_inner_pic: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#E87171",
        left: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    last_view: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: "#06B160",
        justifyContent: "center",
        alignItems: "center"
    },
    pop_up_opacity: {
        width: Screen.width,
        height: Screen.height,
        backgroundColor: '#000',
        opacity: .3,
        position: "absolute"
    },
    margin_popup: {
        margin: Screen.height * 0.022
    },
    verticalLine: {
        width: 1,
        height: "auto",
        marginLeft: 3,
        marginRight: 3,
        borderLeftColor: 'gray',
        borderLeftWidth: 1
    },
    input_underline: {
        width: Screen.width,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    input_underlinee: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    view_for_reject_btn: {
        height: 45,
        width: 120,
        backgroundColor: "#FF0208",
        borderRadius: 15,
    },
    view_for_details_btn: {
        height: 45,
        width: 120,
        backgroundColor: "#0060D5",
        borderRadius: 15,
    },
    reject_btn: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        top: 5,
        fontSize: 25,
        color: "white"
    },
    details_btn: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        top: 5,
        fontSize: 25,
        color: "white"
    },
    distance: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 8
    },
    kfc: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    top_view: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    top_left_view: {
        height: 50,
        width: 50,
        backgroundColor: "#8952F4",
        borderRadius: 100,
    },
    top_right_view: {
        height: 50,
        width: 150,
        backgroundColor: "#00B467",
        borderRadius: 15,
    },
    main_view: {
        alignItems: "center",
        justifyContent: "center",
        height: Screen.height * 0.367,
        width: Screen.width - 30,
        top: (Screen.height / 2) - (Screen.height * 0.184),
        left: 15
    },
    pop_up: {
        backgroundColor: "white",
        height: Screen.height * 0.367,
        width: Screen.width - 30,
        borderRadius: 30,
    },
    pop_up_img: {
        height: Screen.height * 0.0972,
        width: Screen.height * 0.0972,
        backgroundColor: "#F79A21",
        borderRadius: 130,
        alignItems: "center",
        justifyContent: "center"
    },
    center_text: {
        justifyContent: "center",
        alignItems: "center"
    },
    top_left_img_size: {
        width: 40,
        height: 40
    },
    top_right_img_size: {
        width: 55,
        height: 55
    },
    profile_name: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: 20,
        color: "white",
    },
    block_img_size: {
        width: Screen.height * 0.0864,
        height: Screen.height * 0.0864,
    },
    marginFrompopup: {
        marginTop: Screen.height * 0.0107
    },
    inner_text_size: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.056,
        textAlign: 'center'
    },
    textTop: {
        marginTop: Screen.height * 0.022
    },
    exist_btn: {
        height: Screen.height * 0.054,
        width: Screen.width * 0.280,
        backgroundColor: "red",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    exist_text: {
        fontSize: Screen.width * 0.0654,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: "white"
    },
    inner_right_img: {
        height: 30,
        width: 30
    },
    for_lock_view: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    lock_img: {
        width: 80,
        height: 80
    }
};