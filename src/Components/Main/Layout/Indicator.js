import React from 'react';
import { Dimensions, Animated, I18nManager, Platform } from 'react-native';
//Themes
import Colors from '../../../theme/colors';

//Layout
const { width } = Dimensions.get('screen');
//PLatform const
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android'
const IsArabic = I18nManager.isRTL

const Indicator = ({ measures, scrollX, data }) => {
  //Padding
  const paddingHoz = 15;

  const widthsArray = measures.map((measure) => measure.width + paddingHoz * 1.7);

  const scalesFinder = widthsArray.map((CurrentWidth, i) => {
    if (i === 0) {
      return CurrentWidth / CurrentWidth;
    } else if (i === 1) {
      return CurrentWidth / widthsArray[0];
    } else if (i === 2) {
      return CurrentWidth / widthsArray[0];
    }
  });

  const inputRange = data.map((_, i) => i * width);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: scalesFinder.length > 0 ? scalesFinder : [1, 1, 0.7],
  });

  // For English and IOS ONLY and Arabic Android only
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure, i) => {
      if (i === 0) {
        return measure.x;
      } else if (i === 1) {
        return IsArabic ? measure.x :measure.x - (measure.x / 20);
      } else if (i === 2) {
        return IsArabic ? measure.x :measure.x - (measure.x / 20);
      }
    }),
  });
  
  // For Arabic and IOS ONLY
  const translateXArabic = scrollX.interpolate({
    inputRange,
    outputRange: measures
      .slice(0)
      .reverse()
      .map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        zIndex: -1,
        position: 'absolute',
        width: widthsArray[0],
        height: 36,
        left: -paddingHoz,
        backgroundColor: Colors.TabSelectedBG,
        transform: [

          {
            translateX: isIOS && IsArabic ? translateXArabic : translateX,
          },
          {
            scaleX: indicatorWidth,
          },
        ],
        top: -7,
        borderRadius: 17,
        borderColor: 'rgba(0,0,0,0.05)',
        borderWidth: 0.5,
      }}
    />
  );
};

export default Indicator;
