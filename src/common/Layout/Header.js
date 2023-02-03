import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import PlusIcon from 'react-native-vector-icons/Entypo';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('../assets/images/logo.jpg')}
      />

      {props.showPlus ? (
        <TouchableOpacity
          onPress={() => {
            props.Press();
          }}
          style={[styles.plusButton, props.containerStyle]}>
          <PlusIcon name="plus" size={30} color="white" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#fff',
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logoStyle: {
    width: '70%',
    height: 65,
    marginLeft: 20,
  },
  plusButton: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#1B99D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default Header;
