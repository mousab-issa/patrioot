import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Styles from './Styles';

function NotificationBellBadge({ notification_data, navigation }) {
  const [OrderListData, setOrderListData] = useState(notification_data.length);

  useEffect(() => {

  }, [])


  return (
    <View style={Styles.container}>
      <CustomIcon name="notification" type={"MaterialCommunityIcons"} iconStyle={{ color: '#FFFFFF', fontSize: Constants.ResponsiveSize.f25, paddingHorizontal: Constants.ResponsiveSize.f5 }} />
      {OrderListData > 0 &&
        <View style={[Styles.badge]}>
          <Text style={Styles.badge_text}>{OrderListData}</Text>
        </View>
      }
    </View>
  );
}

const mapStateToProps = ({ notification }) => {
  return {
    notification_data: notification.notification_data,
  };
};

export default connect(mapStateToProps)(NotificationBellBadge);
