import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableHighlight, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

function ProfileModal({ setProfileModalVisible, imagePath }) {

  return (
    <View style={styles.modal}>
      <Image
        style={{ width: '100%', height: 200, resizeMode: 'stretch' }}
        source={
          imagePath
            ? { uri: imagePath }
            : require('../../../assets/images/Driver_Avatar.png')
        }
      />

      <TouchableHighlight
        style={styles.touchableButton}
        onPress={() => {
          setProfileModalVisible(false);
        }}>
        <Icon name={'times'} size={25} color={'white'} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  touchableButton: {
    width: '20%',
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ProfileModal;
