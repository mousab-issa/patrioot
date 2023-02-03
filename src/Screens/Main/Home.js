import React from 'react';
import { Animated, Linking, StyleSheet, View } from 'react-native';
//State
import { useSelector } from 'react-redux';
//Components
import ListingCard from '../../Components/Main/ListingCard';
import ListingCardImage from '../../Components/Main/ListingCardImage';
import FadingGradient from '../../Components/Main/Layout/FadingGradient';
import HomeSearchLayout from '../../Components/Main/Layout/HomeSearchLayout';
//ScrollView for the bottomsheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
//Renaimted
import { withTiming, useSharedValue, Easing } from "react-native-reanimated";

const Home = (props) => {
  //Navigation 
  const { navigation } = props
  //State manegment
  const OrderListData = useSelector((state) => state.home_view.home_view_data);
  const isLoading = useSelector((state) => state.home_view.loading);

  const opacityChange = useSharedValue(0);


  let offsetY = 0;

  const onViewClicked = (item) => {
    if (item.inapp) {
      if (item.next_screen != null) {
        if (item.next_screen == 'SEARCH') {
          this.onSearchClicked('resturant');
        } else if (item.next_screen == 'CUSTOM_ORDER') {
          navigation.navigate('PickupLocationMap');
        } else if (item.next_screen == 'SETTINGS') {
          navigation.navigate('MyAccountScreen');
        }
      } else {
        navigation.navigate('PickupLocationMap');
      }
    } else {
      if (item.next_screen != null && item.next_screen.length > 5) {
        Linking.openURL(item.next_screen);
      } else {
        navigation.navigate('PickupLocationMap');
      }
    }
  };

  const ScrollListener = (e) => {
    offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY <= 2) {
      opacityChange.value = withTiming(0, {
        duration: 400,
        easing: Easing.out(Easing.exp),
      });
    } else if (offsetY > 2 && opacityChange.value != 1) {
      opacityChange.value = withTiming(1, {
        duration: 400
      });
    }
  }


  return (
    <Animated.View style={[styles.container]}>
      <View style={{ flex: 1, paddingBottom: 20, paddingTop: 5 }}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([], {
            useNativeDriver: false,
            listener: (e) => {
              ScrollListener(e)
            },
          })}>
          <HomeSearchLayout navigation={navigation} />
          {OrderListData.map((item, i) => {
            return (
              <View key={i}>
                {!item.imageOnly && (
                  <>
                    <ListingCard
                      onPress={() => onViewClicked(item)}
                      img={item.image}
                      title={item.title}
                      content={item.description}
                      hasText={!item.imageOnly}
                      isLoading={isLoading}
                    />
                  </>
                )}
                {item.imageOnly && (
                  <ListingCardImage
                    onPress={() => onViewClicked(item)}
                    img={item.image}
                    title={item.title}
                    content={item.description}
                    hasText={!item.imageOnly}
                    isLoading={isLoading}
                  />
                )}
              </View>
            );
          })}
        </BottomSheetScrollView>

        <FadingGradient  opacityChange={opacityChange} />
      </View>
    </Animated.View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
