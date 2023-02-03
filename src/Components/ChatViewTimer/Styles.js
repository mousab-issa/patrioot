import { Dimensions, I18nManager } from 'react-native';
import Constants from '../../common/Constants';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

export default {

    bottomTimeText: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        color: '#fff',
        fontSize: Screen.width * 0.047
    },
    bottomTime: {
        height: Screen.width * 0.0705,
        width: Screen.width * 0.2115,
        borderRadius: Screen.width * 0.0235,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        position: 'absolute',
        backgroundColor: '#FF0C0C',
        top: Screen.width * 0.01175,
        right: Screen.width * 0.0235,
    }
}
