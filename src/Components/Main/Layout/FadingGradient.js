import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Animated, { useAnimatedStyle } from 'react-native-reanimated';


const FadingGradient = ({ opacityChange }) => {


  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityChange ? opacityChange.value : 0
    };
  });

  const defaultFadeColors = [
    'rgba(255, 255, 255, 0.0)',
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 1)',
  ];

  return (
    <>
      <Animated.View
        style={[{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 40,
        }, animatedStyles]}
        pointerEvents={'none'}
      >


        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ width: '100%', height: 40 }}
          colors={defaultFadeColors}
          pointerEvents={'none'}
        />
      </Animated.View>
    </>
  );
};

export default FadingGradient;
