import React from 'react';
import { Image } from 'react-native';
import Styles from './Styles';

const LocationImage = (props) => {

    return (
        <Image
            style={Styles.pinImage}
           
            source={require('../../../assets/images/PathPin.png')}
        />
    );
};

export default React.memo(LocationImage);
