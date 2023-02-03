import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

export default {
    mainView: {
        height: Screen.width * 0.25,
        width: Screen.width * 0.92,
        backgroundColor: "#F3F2F9",
        marginLeft: (Screen.width * 0.09) / 2,
        marginRight: (Screen.width * 0.08) / 2,
        marginTop: 10,
        marginBottom: 10,

        borderRadius: 10,
        justifyContent: "center",
    },
    size: {
        fontSize: Constants.ResponsiveSize.f16,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: Colors.TextColor,
        marginTop: 2,
        marginLeft: 3,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    size2: {
        fontSize: Screen.width * 0.0423,
        color: "gray",
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    margin: {
        flex: 1,
        alignItems: 'center'
    },
    margin2: {
        flex: 2,
    },
    margin2Inner: {
        flexDirection: "row",
        alignItems: 'center',
        height: Screen.width * 0.11
    },
    handImg: {
        justifyContent: "center",
        flex: 1,
        alignItems: 'center'
    },
    avatarImage: {
        width: Screen.width * 0.176,
        height: Screen.width * 0.176
    },
    avatarImage2: {
        width: Screen.width * 0.047,
        height: Screen.width * 0.047
    },
    driverImageContainer: {
        width: Screen.width * 0.176,
        height: Screen.width * 0.176,
        borderRadius: 100,
        overflow: 'hidden'
    },
    driverImageContainer2: {
        width: Screen.width * 0.1,
        height: Screen.width * 0.1,
        borderRadius: 100,
        overflow: 'hidden',
    },
    pinImage: {
        width: (Screen.width * 0.047) * 0.72,
        height: Screen.width * 0.047
    },
    handImage: {
        width: Screen.width * 0.1175,
        height: Screen.width * 0.1175
    }
}