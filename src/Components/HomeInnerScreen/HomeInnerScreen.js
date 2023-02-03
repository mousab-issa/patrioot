import { Card } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Styles from './Styles';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function HomeInnerScreen(props) {

  const [isLoaded, setisLoaded] = useState(false);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  useEffect(() => {

    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      setisLoaded(true)
    }, 1000);

  }, [])


  return (

    <ShimmerPlaceholder
      visible={isLoaded}
      shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
      style={{ marginVertical: isLoaded ? 0 : 10 }}
      height={windowWidth * 0.50}
      isInteraction={false}
      width={windowWidth - 30}
    >

      <Card style={{ borderRadius: 10, }}>
        <Ripple
          displayUntilPressOut={true}
          onPress={props.onPress}>
          <Image
            resizeMode="cover"
            style={Styles.bgImh}
            source={props.imageData}
          />
          <View style={Styles.cardBottom}>
            <Text style={Styles.sizeFont}>{props.Heading}</Text>
            <Text style={Styles.sizeDetails}>{props.Details}</Text>
          </View>
        </Ripple>

      </Card>
    </ShimmerPlaceholder>
  );
}
export default HomeInnerScreen;
