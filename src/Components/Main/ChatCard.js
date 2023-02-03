import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React, { Component } from 'react';
import {
  I18nManager,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../../common/Theme';
import firestore from '@react-native-firebase/firestore';
import TimerCountdown from '../../common/TimerCountdown';
import { GetNotificatonData } from '../../redux/notification/action';
import Constants from './../../common/Constants';
import Colors from './../../theme/colors';

const BORDER_RADIUS = 12;
class ChatCard extends Component {
  state = {
    unReadMessage: 0
  }
  componentDidMount() {
    const currentID = this.props.item?.data?.order?.id;
    if (currentID != null && currentID != undefined)
      // if (this.props.item.data?.order?.status && this.props.item.data?.order?.status == 'accepted')
      this.getUnreadMessages(currentID.toString());
  }
  getUnreadMessages = (id) => {
    this.onUpdate = firestore()
      .collection('customer_rider_chat')
      .doc(id)
      .collection('messages')
      .where('pending', '==', true)
      .onSnapshot(snapshot => {
        if (snapshot != null) {
          var lengthHere = [];
          snapshot.forEach((doc) => {
            lengthHere.push(doc.data());
          })
          this.setState({ unReadMessage: lengthHere.length })
        }
      });
  }
  componentWillUnmount() {
    if (this.onUpdate != undefined)
      this.onUpdate()
  }
  getRemainingTime = (endTime) => {
    const remains = moment.duration(moment(new Date()).diff(moment(endTime)));
    const remainInSec = Math.floor(remains.asSeconds());
    if (remainInSec < 0)
      return 0
    else
      return remainInSec;
  }
  onTimerComplete = (dispatch, authToken, selectedLanguage) => {
    dispatch(GetNotificatonData(authToken, selectedLanguage))
  }
  render() {
    const { config, dispatch, authToken, selectedLanguage } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.cardShadow}>
          <TouchableHighlight
            onPress={this.props.onPress}
            underlayColor="none">
            <View
              style={[
                styles.cardContainer,
              ]}>
              <View
                style={
                  I18nManager.isRTL
                    ? styles.textContainer_rtl
                    : styles.textContainer
                }>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                <Text style={styles.contentStyle}>{this.props.content}</Text>
              </View>
              <View style={styles.progressOuter}>
                {this.props.type == 1 && this.props.item.data.order.order_type != 'customorder' && (
                  <TimerCountdown
                    colors={[
                      [Theme.primaryExtraLight, 0.4],
                      ['#F7B801', 0.4],
                      ['#A30000', 0.2],
                    ]}
                    size={Constants.ResponsiveSize.f28}
                    duration={60}
                    animatedColor={'#000000'}
                    trailColor={'#FFFFFF'}
                    remainingTime={60}
                    strokeWidth={Constants.ResponsiveSize.f3}
                    onComplete={() => {
                      this.onTimerComplete(dispatch, authToken, selectedLanguage);
                    }}
                  />
                )}
                {(this.props.type == 2 && this.props.item.data && this.props.item.data.order.status != 'added' && this.props.item.data.order.status != 'cancelled')  && (
                  <View style={{ top: 6, left: 3 }}>

                    {this.state.unReadMessage > 0 &&
                      <View style={styles.circle}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.badge2}>{this.state.unReadMessage}</Text>
                        </View>
                      </View>}
                    <Image
                      source={Theme.chat}
                      style={{
                        width: 22,
                        height: 22,
                        resizeMode: 'contain',
                        tintColor: Theme.primaryLight,
                      }}
                    />
                  </View>
                )}
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const { colors } = useTheme();
  const config = useSelector((state) => state.config);
  const authToken = useSelector((state) => state.User.auth_token);
  const selectedLanguage = useSelector((state) => state.User.selectedLanguage);
  const dispatch = useDispatch();
  return (
    <ChatCard {...props} colors={colors} authToken={authToken} selectedLanguage={selectedLanguage} config={config} dispatch={dispatch} />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: '20%',
  },
  cardShadow: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 5,
    backgroundColor: '#fff'
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderLeftColor: Theme.primaryLight,
    borderLeftWidth: BORDER_RADIUS,
    paddingBottom: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: BORDER_RADIUS,
    borderRightColor: '#eee',
    borderRightWidth: 1,
  },
  cardContainer_rtl: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    borderRightColor: Theme.primaryLight,
    borderRightWidth: BORDER_RADIUS,
    paddingBottom: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: BORDER_RADIUS,
    borderLeftColor: '#eee',
    borderLeftWidth: 1,
  },
  circle: {
    zIndex: 1,
    position: 'absolute',
    top: -10,
    left: -10,
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: Theme.redLight,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 0,
  },
  textContainer_rtl: {
    flex: 1,
    paddingRight: 10,
  },
  titleStyle: {
    textAlign: 'left',
    paddingTop: 5,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicMedium
      : Constants.fontFamilyMedium,
    fontSize: Constants.ResponsiveSize.f16,
    color: Theme.primaryExtraLight,
  },
  contentStyle: {
    textAlign: 'left',
    paddingTop: 3,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f14,
    color: Colors.TextColor,
  },
  badge: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
  },
  badge2: {
    fontSize: Constants.ResponsiveSize.f12,
    fontFamily: Constants.fontFamily,
    color: Colors.WhiteColor,
    bottom: Platform.OS === 'android' ? 1 : (DeviceInfo.hasNotch() ? 2 : 1),
  },
  progressOuter: {
    width: 45,
    paddingTop: 10,
    alignItems: 'center',
  },
  progress: {
    fontSize: Constants.ResponsiveSize.f14,
    fontFamily: Constants.fontFamilyBold,
    color: Colors.TextColor,
  },
});
