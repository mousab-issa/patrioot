import { Card } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Styles from './Styles';


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');


function NotificationFlatListScreen(props) {

  const [isLoaded, setisLoaded] = useState(false);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  useEffect(() => {

    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      setisLoaded(true)
    }, 1000);

  }, [])



  return (
    <ShimmerPlaceholder visible={isLoaded} shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
      height={90} isInteraction={false} width={windowWidth - 30}
    >
      <Card style={{ borderRadius: 10, overflow: 'hidden', flexDirection: 'row' }}>

        <View style={Styles.empty_view} />
        <Ripple
          onLongPress={() => { }}
          onPress={props.onPress}>
          <View style={Styles.main_view}>
            <View style={Styles.title}>
              <Text style={Styles.titleStyle}> {props.title} </Text>
            </View>
            <View style={Styles.items}>
              <Text style={Styles.detailsStyle}>{props.details} </Text>
            </View>
          </View>
        </Ripple>
      </Card>
    </ShimmerPlaceholder>
  );
}

export default NotificationFlatListScreen;
