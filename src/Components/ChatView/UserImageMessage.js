import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Styles from '../../Screens/ChatScreenView/Styles';


function UserImageMessage(props) {
  const showImage = () => {
    props.setImagePath(props.dbMessages.image_path);
    props.setProfileModalVisible(true);
  };

  return (
    <View
      style={[Styles.chatUsercard]}>
      <View>
        <TouchableOpacity
          style={Styles.LocationCardInner}
          onPress={() => showImage()}>
          <Image
            source={{ uri: props.dbMessages.image_path }}
            style={Styles.mapImage}
          />
          <View style={Styles.LocationsBoxDoubleTickTopView}>
            <View
              style={[
                Styles.doubleTickSpace,
                { flex: 2, alignItems: 'flex-start', marginLeft: 10 },
              ]}></View>
            <View
              style={[
                Styles.doubletickView,
                ,
                { flex: 1, alignItems: 'flex-end' },
              ]}>
              <Text style={[Styles.timeTextStyle, Styles.doubleTickText]}>
                11:00 pm
              </Text>
              <Image
                source={require('../../../assets/images/double_tick.png')}
                resizeMode="contain"
                style={Styles.doubleTickImage}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UserImageMessage;
