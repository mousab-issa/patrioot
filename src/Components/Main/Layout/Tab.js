import React, { forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  I18nManager,
} from 'react-native';
//State 
import { useSelector } from 'react-redux';
//Theming
import Theme from '../../../common/Theme';
import Colors from '../../../theme/colors';
import Constants from '../../../common/Constants';
import CustomIcon from '../../../common/CustomIcon';
import Languages from '../../../common/Languages';


const Tab = forwardRef(({ item, onItemPress, selected }, ref) => {
  const notifications = useSelector(
    (state) => state.notification.notification_data,
  );
  return (
    <TouchableWithoutFeedback onPress={onItemPress}>

      <View
        ref={ref}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>

        {
          I18nManager.isRTL && (
            <Animated.Text
              style={[
                !I18nManager.isRTL ? styles.tabText : styles.tabText_rtl,
                { color: selected ? Colors.WhiteColor : Colors.WhiteColor },
              ]}>
              {item.title == 'Chat'
                ? Languages.Notification
                : item.title == 'Home'
                  ? Languages.Home
                  : Languages.Patrioot}
            </Animated.Text>

          )
        }

        <View>
          {(item.title === 'Chat' && notifications.length > 0) && (
            <View style={styles.circle}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={styles.badge2}>
                  {notifications.length}
                </Text>
              </View>
            </View>
          )}


          <CustomIcon
            name={
              item.title == 'Chat'
                ? 'ChatTab'
                : item.title == 'Home'
                  ? 'HomeTab'
                  : 'PatriootWhite'
            }
            type={'SVG'}
            iconStyle={{
              fontSize: Constants.ResponsiveSize.f12,
              color: '#000000',
            }}
          />

        </View>

        {
          !I18nManager.isRTL && (
            <Animated.Text
              style={[
                !I18nManager.isRTL ? styles.tabText : styles.tabText_rtl,
                { color: selected ? Colors.WhiteColor : Colors.WhiteColor },
              ]}>
              {item.title == 'Chat'
                ? Languages.Notification
                : item.title == 'Home'
                  ? Languages.Home
                  : Languages.Patrioot}
            </Animated.Text>

          )
        }

      </View>
    </TouchableWithoutFeedback>
  );
});


export default Tab;


const styles = StyleSheet.create({

  circle: {
    zIndex: 1,
    position: 'absolute',
    top: -7,
    left: -7,
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#F34E4E',
    justifyContent: 'center',
  },
  tabText: {
    color: Theme.primary,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyBold,
    fontSize: Constants.ResponsiveSize.f14,
    paddingLeft: Constants.ResponsiveSize.f5,
  },
  tabText_rtl: {
    color: Theme.primary,
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabicBold
      : Constants.fontFamilyArabicBold,
    fontSize: Constants.ResponsiveSize.f14,
    paddingLeft: Constants.ResponsiveSize.f5,
    paddingRight: Constants.ResponsiveSize.f5,
  },
  badge2: {
    textAlign: 'center',
    color: '#fff',
    fontSize: Constants.ResponsiveSize.f12,
    bottom: 1
  },

});
















