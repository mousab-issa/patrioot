import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Languages from '../../common/Languages';
import NotificationFlatListScreen from '../NotificationFlatListScreen/NotificationFlatListScreen';
import Styles from './Styles';


const NotificationView = ({ notification_data, navigation }) => {
  const [refreshing, setrefreshing] = useState(false);
  const [OrderListData, setOrderListData] = useState(notification_data);

  const onNotificationListRefresh = () => {
    setrefreshing(true);
  };

  const onNotificationItemClicked = (value) => {
    navigation.navigate('ChatScreenView');
  };
  return (

    <ScrollView style={Styles.bottomMargin}>
      {(OrderListData == null || OrderListData.length == 0) &&
        <View style={Styles.noNotification}>
          <Image
            source={require('../../../assets/images/ico_notification.png')}
            resizeMode="contain"
            style={Styles.notificationNotIn} />
          <Text style={Styles.notificationNotFoundText}>{Languages.DoNotHaveNotifications}</Text>
        </View>
      }
      {!(OrderListData == null || OrderListData.length == 0) &&
        <FlatList
          scrollEnabled={false}
          data={OrderListData}
          removeClippedSubviews={false}
          refreshing={refreshing}
          onRefresh={onNotificationListRefresh}
          keyExtractor={(notification) => notification.id}
          renderItem={(notification) => (
            <NotificationFlatListScreen
              onPress={() => onNotificationItemClicked(notification)}
              title={notification.item.title}
              heading={notification.item.heading}
              details={notification.item.details}
            />
          )}
        />
      }
    </ScrollView>
  );
};

const mapStateToProps = ({ notification }) => {
  return {
    notification_data: notification.notification_data,
  };
};

export default connect(mapStateToProps)(NotificationView);
