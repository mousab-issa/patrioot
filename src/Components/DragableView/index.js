import React, { Component } from 'react';
import {
  Animated,
  SafeAreaView, View
} from 'react-native';
import HomeView from './../HomeView/HomeView';
import NotificationView from './../NotificationView/NotificationView';
import { animatedPosition, panGesture } from './pan-responder';
import styles from './styles';


class BottomSheet extends Component {
  onMedicineClicked = (navigation) => {
    alert('Medicine Clicked');
  };

  onCoffeeClicked = (navigation) => {
    alert('Coffee Clicked');
  };

  onFoodClicked = (navigation) => {
    alert('Food Clicked');
  };

  onMarketClicked = (navigation) => {
    alert('Market Clicked');
  };

  render() {
    const { navigation } = this.props;
    return (
      <Animated.View style={[styles.container, { bottom: animatedPosition }]}>
        <View style={styles.gestureArea} {...panGesture.panHandlers}>
          <View style={styles.pullItem} />
        </View>
        <SafeAreaView style={styles.content}>
          <View style={styles.container}>
            {this.props.selectedView && <HomeView navigation={navigation} />}
            {!this.props.selectedView && (
              <NotificationView navigation={navigation} />
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    );
  }
}

export default BottomSheet;
