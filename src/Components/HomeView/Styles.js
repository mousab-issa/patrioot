import { Dimensions, I18nManager } from "react-native";
import Constants from '../../common/Constants';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    topBar: {
        width: Screen.width,
        height: 80,
        backgroundColor: 'transparent',
        marginBottom: 10,

    },
    searchContainerOuter: {
        flex: 1,
        flexDirection: 'row',
        height: Screen.width * 0.1175,
        alignItems: 'center',
    },
    searchContainer: {
        width: Screen.width * 0.77,
        height: Screen.width * 0.1175,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    searchStyle: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        flexDirection: 'row',
        marginLeft: Screen.width * 0.0235,
        alignItems: 'center',
        justifyContent: 'center',
        height: Screen.width * 0.094,
        marginRight: 2,
        paddingLeft: 5,
    },
    profileOuterStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Screen.width * 0.125,
        width: Screen.width * 0.125,
        marginLeft: 6,
    },
    profileStyle: {
        borderWidth: Screen.width * 0.0235,
        borderColor: '#1db063',
        backgroundColor: '#1db063',
        borderRadius: 30,
        flexDirection: 'row',
        marginLeft: Screen.width * 0.01175,
        alignItems: 'center',
        justifyContent: 'center',

        height: Screen.width * 0.11,
        width: Screen.width * 0.11,
    },
    buttonViewOuter: {
        position: 'absolute',
        bottom: Screen.height * (Screen.height > 600 ?  0.15 : 0.20),
        left: Screen.width * 0.015,
        width: Screen.width * 0.90,
        height: Screen.width * 0.235,
        borderRadius: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1

    },
    textStyle: {
        color: '#c1c0c0',
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.3055,
        marginTop: 2,
    },
    greenCircle: {
        backgroundColor: '#1db063',
        width: Screen.width * 0.094,
        height: Screen.width * 0.094,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1

    },
    redCircle: {
        backgroundColor: 'red',
        width: Screen.width * 0.094,
        height: Screen.width * 0.094,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    search_black_img: {
        width: Screen.width * 0.0705,
        height: Screen.width * 0.0705,
        marginTop: 1,
        marginLeft: Screen.width * 0.030,
    },
    top_fade_img: {
        width: Screen.width - 20,
        position: 'absolute',
        left: 0, 
        top: -15,
        backgroundColor: 'transparent'
    },
    text_for_find: {
        width: "90%",
        color: '#383838',
        fontSize:Constants.ResponsiveSize.f12,
        marginBottom: 1,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: 'left',
    },
    avatar_img: {
        width: Screen.width * 0.075,
        height: Screen.width * 0.075
    },
    center_view: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    center_view_inner_logo: {
        width: 25, height: 25, marginTop: 1, marginLeft: 1,
    },
    center_in_home: {
        alignItems: 'center', justifyContent: 'center',
    },
    viewStyle: {
        backgroundColor: '#fff',
        borderRadius: Screen.width * 0.0405,
        width: Screen.width * 0.92,
        marginTop: 10,
        marginBottom: 10,
        marginLeft:3,
        marginRight: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    textHeadingStyle: {
        flex: 1,
        color: '#000',
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        fontSize: Screen.width * 0.05405,
        width: Screen.width,
        textAlign: 'left',
        marginLeft: Screen.width * 0.06,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    },
    bottomMargin:{
    }
};