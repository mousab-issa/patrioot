import React from 'react';
import { Image, View } from 'react-native';
import Styles from './Styles';

const DriverImage = (props) => {

    return (
        <View style={Styles.driverImageContainer}>
            <Image
                style={props.style}
                source={props.source}
            />
        </View>

    );
};

export default React.memo(DriverImage);
