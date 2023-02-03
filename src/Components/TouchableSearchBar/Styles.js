import { Dimensions, I18nManager } from "react-native";
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';

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
    searchStyle: {
        borderWidth: 1,
        borderColor: Colors.borderSearchBar,
        backgroundColor: Colors.placeHolderBackground ,
        borderRadius: (Screen.width * 0.094) / 2,
        flexDirection: 'row',
        alignItems: 'center',
        height: Screen.width * 0.10,
    },
    searchInner: {
        width: '100%', flexDirection: 'row'
    },
    text_for_find: {
        fontSize: Constants.ResponsiveSize.f13,
        fontFamily: I18nManager.isRTL
            ? Constants.fontFamilyArabic
            : Constants.fontFamily,
        color: '#696060',
    }
};