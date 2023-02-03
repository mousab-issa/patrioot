import { Dimensions, I18nManager } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from '../../common/Constants'
import Colors from '../../theme/colors'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default {
    container: {
        backgroundColor: Colors.WhiteColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText: {
        fontSize: RFValue(80),
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: '#000',
        textAlign: 'center'
    },
    bottomText: {
        fontSize: RFValue(18),
        color: '#000',
        textAlign: 'center'
    },
    imageStyle: {
        width: 130,
        height: 130
    }
};