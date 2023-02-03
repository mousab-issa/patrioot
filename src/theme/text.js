import ResponsiveText from '../components/ResponsiveText';
import React from 'react';
import Fonts from './fonts';
const styles = {
  playText: {
    fontFamily: Fonts.Wopi,
    fontSize: 6,
    marginBottom: 8,
  },
};
const ItemText = {
  ButtonText: (text, style) => (
    <ResponsiveText style={{...styles.playText, ...style}}>
      {text}
    </ResponsiveText>
  ),
  HowTo: (style) => (
    <ResponsiveText style={{...styles.playText, ...style}}>
      HOW TO PLAY
    </ResponsiveText>
  ),
  Home: (style) => (
    <ResponsiveText style={{...styles.playText, ...style}}>Home</ResponsiveText>
  ),
};

export default ItemText;
