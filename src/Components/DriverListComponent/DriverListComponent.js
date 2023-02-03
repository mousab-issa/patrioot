import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  LayoutAnimation,
  Platform,
  Text,
  UIManager,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import CustomIcon from '../../common/CustomIcon';
import DriverImage from './DriverImage';
import LocationImage from './LocationImage';
import Styles from './Styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function DriverComponent(props) {
  const [isLoaded, setisLoaded] = useState(true);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      setisLoaded(true)
    }, 100);

  }, [])

  return (
    <Animatable.View animation={'slideInRight'} duration={100}>
      <View style={Styles.mainView}>
        <ShimmerPlaceholder visible={isLoaded} shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
          height={windowWidth * 0.30} isInteraction={false} width={windowWidth - 10}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={Styles.margin}>
              <DriverImage style={Styles.avatarImage} source={{ uri: props.item.profile_pic }} />
            </View>
            <View style={Styles.margin2}>
              <View>
                <Text style={Styles.size}>{props.item.username}</Text>
              </View>
              <View style={Styles.margin2Inner}>
                <LocationImage  />
                <Text style={Styles.size2}>{props.item.location_name}</Text>
              </View>
            </View>
            <View style={Styles.handImg}>
              {props.item.animate ?
                <Animatable.View
                  animation={"fadeInDown"}
                  direction={'reverse'}
                  delay={50}
                  iterationCount={1}
                  duration={1000}
                  style={{ position: 'absolute' }}
                >
                  <CustomIcon name={'hand'} />
                </Animatable.View>
                :
                null}
              {props.item.animate ?
                <Animatable.View
                  animation={"fadeIn"}
                  easing={"ease-out"}
                  delay={50}
                  iterationCount={1}
                  duration={2000}
                  style={{ position: 'absolute' }}
                >
                  <CustomIcon name={'hand'} />
                </Animatable.View>
                :
                <CustomIcon name={'hand'} />
              }

            </View>
          </View>
        </ShimmerPlaceholder>
      </View>
    </Animatable.View>
  );
}
export default DriverComponent;
