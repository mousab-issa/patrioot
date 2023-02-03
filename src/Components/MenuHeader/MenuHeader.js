
import React from 'react';
import {
  Image, ImageBackground,
  Text, TouchableOpacity,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import styles from './Styles';

function MenuHeader(props) {

  const onBackClicked = () => {
    props.navigation.goBack();
  };

  return (
    <View>
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri:props.restaurent.coverimage}} style={styles.cardImage}>
        <TouchableOpacity
          style={styles.backIconBackground}
          onPress={onBackClicked}>
          <Image
            source={Languages.BackWhiteArrow}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
    <View style={styles.secondryHeader}>
      <View style={styles.leftContent}>
        <Text numberOfLines={1} style={styles.restaurentText}>{props.restaurent.name}</Text>
        <Text style={styles.secondryText}>{props.restaurent.description} </Text>
      </View>
      <View style={styles.rightContent}>
        <Image source={{uri:props.restaurent.thumbnail}} style={styles.profileImage} />
      </View>
    </View>
  </View>
  );
}

export default  React.memo(MenuHeader);
