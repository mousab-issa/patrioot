import { Dimensions, I18nManager } from "react-native";
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        flex: 1,

        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Img: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ico_size: {
        marginTop: -(Screen.width * 0.095),
        height: Screen.width * 0.45,
        width: Screen.width * 0.45
    },
    create_msg: {
        fontSize: Constants.ResponsiveSize.f20,
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        marginTop: -(Screen.width * 0.15),
        color: Colors.TextColor,
    }
}