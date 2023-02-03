import React, { useState } from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
//State Manegment
import { useDispatch, useSelector } from 'react-redux';
import { GetPromoData } from '../../redux/promo/action';
//Theming
import Colors from '../../theme/colors';
//Components
import PromoListingCard from '../../Components/Main/PromoListingCard';
import FadingGradient from '../../Components/Main/Layout/FadingGradient';
//ScrollView for the bottomsheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
//Renaimted
import { withTiming, useSharedValue, Easing } from "react-native-reanimated";

const Promo = (props) => {
  //Navigation 
  const { navigation } = props
  //Fading animation
  const opacityChange = useSharedValue(0);
  //State
  const [isRefreshing, SetRefreshing] = useState(false)
  //State manegment
  const promos = useSelector((state) => state.promo.promo_data);
  const offset = useSelector((state) => state.promo.offset);
  const token = useSelector((state) => state.User.token);
  const promoPaging = useDispatch();
  //Detect scrolling
  let offsetY = 0;

  const onRefresh = () => {
    SetRefreshing(true);
    setTimeout(() => {
      SetRefreshing(false);
    }, 2000);
  }

  const onViewClicked = (promoItem) => {
    const vendotData = promoItem.promoData.vendor_data
    const item = {
      vendor_id: vendotData.owner_id,
      cover_pic: vendotData.cover_pic,
      thumbnail: vendotData.thumbnail,
      branch_id: vendotData.branch_id,
      distance: vendotData.distance,
      delivery_charges: vendotData.delivery_charges,
      tags: vendotData.tags,
      name: vendotData.name,
      type: vendotData.type,
    }

    navigation.navigate('SearchResturant', { item });
  };

  const getRemainingTime = (endTime) => {
    var date1 = new Date(); // current date
    var date2 = new Date(endTime); // mm/dd/yyyy format
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const remainingTime = timeDiff / 1000
    return remainingTime;
  }

  let PromosData = [];

  for (promo in promos) {
    const promodata = {
      promoData: promos[promo],
      endingTime: getRemainingTime(promos[promo].end_date)
    }
    PromosData.push(promodata)
  }


  const ScrollListener = (e) => {
    offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY <= 2) {
      opacityChange.value = withTiming(0, {
        duration: 400,
        easing: Easing.out(Easing.exp),
      });
      // SetShown(false);
    } else if (offsetY > 2 && opacityChange.value != 1) {
      opacityChange.value = withTiming(1, {
        duration: 400
      });
    }
    if (offset > 0 && offsetY > ((e.nativeEvent.contentSize.height - (e.nativeEvent.layoutMeasurement.height + 50)))) {
      promoPaging(GetPromoData(token, offset))
    }
  }

  return (
    <Animated.View style={[styles.container]}>
      <View style={{ flex: 1, marginBottom: 10 }}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={({ distanceFromEnd }) => {

          }}
          onScroll={Animated.event(
            [],
            {
              useNativeDriver: false,
              listener: (e) => {
                ScrollListener(e)
              },
            },
          )}>
          <FlatList
            data={PromosData}
            onRefresh={() => onRefresh()}
            refreshing={isRefreshing}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => {


            }}
            onEndReachedThreshold={0.5}
            renderItem={({ item, i }) => (
              <View key={i}>
                <PromoListingCard
                  onPress={() => onViewClicked(item)}
                  img={item.promoData.cover_pic}
                  title={item.promoData.en_title}
                  content={item.body}
                  hasText={true}
                  item={item}
                /></View>
            )}
          />

        </BottomSheetScrollView>
        <FadingGradient  opacityChange={opacityChange} />
      </View>
    </Animated.View>
  );
}

export default Promo;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteColor,
  }
});