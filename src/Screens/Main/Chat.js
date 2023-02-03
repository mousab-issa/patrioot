import React, { useState, useLayoutEffect } from 'react';
import {
  Animated,
  I18nManager,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image
  , Text
} from 'react-native';
//Components
import FadingGradient from '../../Components/Main/Layout/FadingGradient';
import ChatCard from '../../Components/Main/ChatCard';
//Theming 
import Colors from '../../theme/colors';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';
import Theme from '../../common/Theme';
//State
import { useDispatch, useSelector } from 'react-redux';
import { GetNotificatonData } from '../../redux/notification/action';
//Util Packages
import moment from 'moment';
//ScrollView for the bottomsheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
//Renaimted
import { withTiming, useSharedValue, Easing } from "react-native-reanimated";

//Screen Layout
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const Chat = (props) => {
  //Navigation 
  const { navigation } = props
  //State
  const notifications = useSelector(
    (state) => state.notification.notification_data,
  );
  const authToken = useSelector(
    (state) => state.User.auth_token,
  );
  const selectedLanguage = useSelector(
    (state) => state.User.selectedLanguage,
  );
  const dispatch = useDispatch();
  //Fading animation
  const opacityChange = useSharedValue(0);

  let offsetY = 0;

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
  }

  //LifCycle
  useLayoutEffect(() => {
    dispatch(GetNotificatonData(authToken, selectedLanguage));
  }, [])

  const onViewClicked = (item, orderType) => {

    if (orderType == 1)
      return;

    if (item.data.order.status == 'added' || item.data.order.status == 'cancelled')
      return;
    var lOrderId = (item.data != null && item.data.order != null && item.data.order.id != null) ? item.data.order.id : 0;
    navigation.navigate('ChatScreenView',
      {
        notificationData: item,
        fromChatScreen: true,
        orderId: lOrderId
      });
  };

  const getRemainingTime = (endTime) => {
    const remains = moment.duration(moment(new Date()).diff(moment(endTime)));
    const remainInSec = Math.floor(remains.asMinutes());

    if (remainInSec < 0)
      return 0
    else
      return remainInSec;
  }

  return (
    <Animated.View style={[styles.container]}>
      <View style={{ flex: 1, marginBottom: 10, marginTop: 10, }}>
        {(notifications != null && notifications.length > 0) &&
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [],

              {
                useNativeDriver: false,
                listener: (e) => {
                  ScrollListener(e)
                },
              },
            )}>
            {notifications.map((item, i) => {
              const currentOrderType = (item.data?.order?.status && item.data?.order?.status == 'added' && getRemainingTime(item.data?.order.created_at) < 5) ? 1 : 2;
              return (
                <View key={i}>
                  <ChatCard
                    onPress={() => onViewClicked(item, currentOrderType)}
                    img={Theme.sample3}
                    type={currentOrderType}
                    title={item.title}
                    content={item.Description}
                    item={item}
                  />
                </View>
              );
            })}
          </BottomSheetScrollView>
        }
        {(notifications == null || notifications.length == 0) &&
          <View style={styles.nochat}>
            <Image
              source={require('../../../assets/images/ico_notification.png')}
              resizeMode="contain"
              style={styles.chatNotIn}
            />
            <Text style={styles.chatNotFoundText}>
              {Languages.DoNotHaveNotifications}
            </Text>
          </View>
        }

        <FadingGradient  opacityChange={opacityChange} />
      </View>
    </Animated.View>
  );

}

export default Chat;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.WhiteColor,
  },
  chatNotFoundText: {
    color: Colors.TextColor,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f22,
    marginTop: 10,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  nochat: {
    flex: 1,
    marginTop: 30,
    // width: Screen.width,
    alignItems: 'center',
  },
  chatNotIn: {
    width: Screen.width * 0.517,
    height: Screen.width * 0.658,
    marginTop: 50
  },
});
