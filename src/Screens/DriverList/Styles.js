
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
    backArrow: {
        width: Screen.width * 0.057,
        height: Screen.width * 0.057
    },
    forBack: {
        flexDirection: 'row',
        margin: Screen.width * 0.047,
        marginTop: (Screen.width * 0.047) + (Platform.OS == 'android' ? 10 : 0),
    },
    forBack2: {
     marginTop: - Constants.ResponsiveSize.f12,
        alignItems: 'center',
    },
    centerTop: {
        justifyContent: 'center',
    },
    size: {
        fontSize: Constants.ResponsiveSize.f19,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: Colors.TextColor,
        textAlign: I18nManager.isRTL ? 'left' : 'left',
    },
    adressPart1: { width: '12%', },
    adressPart2: { width: '88%' },
    handImg: {
        justifyContent: "center",
        alignItems: 'center',
        width: Screen.width * 0.1175,
        height: Screen.width * 0.1175,
        position: 'absolute',
        right: 30,
        top: 10,
        zIndex: 3
    },
    handImage: {
        width: Screen.width * 0.1175,
        height: Screen.width * 0.1175
    }

};