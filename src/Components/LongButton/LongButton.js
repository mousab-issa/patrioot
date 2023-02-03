import React from 'react';
import {
    Text, 
    TouchableHighlight,
    View
} from 'react-native';
import Styles from './Styles';


function TouchableSearchBar(props) {
    return (
        <TouchableHighlight
            style={Styles.primaryBtn}
            onPress={props.onButtonClick}
            underlayColor="none">
            <View style={Styles.primaryBtn1}>
                <Text style={Styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableHighlight>

    );
}
export default TouchableSearchBar;
