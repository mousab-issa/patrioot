import React from "react";
import {Image} from 'react-native';
import sound from "../assets/icons/sound.png"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = {
  soundIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode:'contain'
  }
}

const Icons = {
  Sound: (style = {}) => (
    <Image source={sound} style={{...styles.soundIcon, ...style}}/>
  ),
}

export default Icons
