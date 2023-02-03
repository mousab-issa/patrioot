import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
  Animated, I18nManager, Dimensions,
  ScrollView, StyleSheet, View, Image, Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../../common/Theme';
import ChatCard from '../../Components/Main/ChatCard';
import { GetNotificatonData } from '../../redux/notification/action';
import Colors from '../../theme/colors';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const defaultFadeColors = [
  'rgba(255, 255, 255, 0.0)',
  'rgba(255, 255, 255, 0.7)',
  'rgba(255, 255, 255, 1)',
];

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    props.navigation.addListener("willFocus", () => {
     

    });
  }

  state = {
    isFade: false,
    keyword: '',
  };

  offsetY = 0;
  scrollY = new Animated.Value(0);

  getStartFade() {
    const shadowPosY = this.scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [-40, 0],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: shadowPosY,
          width: '100%',
          height: 40,
        }}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ width: '100%', height: 40 }}
          colors={defaultFadeColors}
          pointerEvents={'none'}
        />
      </Animated.View>
    );
  }

  onChangeKeyword(text) {
    this.setState({ keyword: text });
  }

  componentDidMount() {
   

    this.props.dispatch(GetNotificatonData(this.props.authToken, this.props.selectedLanguage));
  }
  componentWillUnmount() {
  }
  onChangeLanguage() {
    const { config } = this.props;
    setTimeout(() => {
      RNRestart.Restart();
    }, 1000);
  }

  onViewClicked = (item, orderType) => {
   
    if (orderType == 1)
      return;
  
    if (item.data.order.status == 'added' || item.data.order.status == 'cancelled')
      return;
    var lOrderId = (item.data != null && item.data.order != null && item.data.order.id != null) ? item.data.order.id : 0;
    this.props.navigation.navigate('ChatScreenView',
      {
        notificationData: item,
        fromChatScreen: true,
        orderId: lOrderId
      });
  };
  getRemainingTime = (endTime) => {
    const remains = moment.duration(moment(new Date()).diff(moment(endTime)));
    const remainInSec = Math.floor(remains.asMinutes());
   
    if (remainInSec < 0)
      return 0
    else
      return remainInSec;
  }
  render() {
    const { config, notifications, dispatch, authToken, selectedLanguage } = this.props;
    return (
      <Animated.View style={[styles.container]}>
        <View style={{ flex: 1, marginBottom: 10, marginTop: 10, }}>
          {(notifications != null && notifications.length > 0) &&
            <ScrollView
              showsVerticalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                {
                  useNativeDriver: false,
                  listener: (e) => {
                    this.offsetY = e.nativeEvent.contentOffset.y;
                    if (this.offsetY <= 2) this.setState({ isFade: false });
                    else this.setState({ isFade: true });
                  },
                },
              )}>
              {notifications.map((item, i) => {
                const currentOrderType = (item.data?.order?.status && item.data?.order?.status == 'added' && this.getRemainingTime(item.data?.order.created_at) < 5) ? 1 : 2;
                return (
                  <View key={i}>
                    <ChatCard
                      onPress={() => this.onViewClicked(item, currentOrderType)}
                      img={Theme.sample3}
                      type={currentOrderType}
                      title={item.data?.title}
                      content={item.data?.Description}
                      item={item}
                    />
                  </View>
                );
              })}
            </ScrollView>
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
          {this.state.isFade && this.getStartFade()}
        </View>
      </Animated.View>
    );
  }
}

export default function (props) {
  const { colors } = useTheme();
  const config = useSelector((state) => state.config);
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
  return (
    <ChatScreen
      {...props}
      colors={colors}
      config={config}
      notifications={notifications}
      authToken={authToken}
      selectedLanguage={selectedLanguage}
      dispatch={dispatch}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.WhiteColor,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: Theme.white,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    height: 40,
  },
  searchInput: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    fontSize: 15,
    paddingHorizontal: 4,
  },
  searchMan: {
    marginLeft: 20,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 0,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
