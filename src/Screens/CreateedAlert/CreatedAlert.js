import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Languages from '../../common/Languages';
import {

  setUserLoggedInAction
} from '../../redux/user/action';
import Styles from './Styles';

function CreatedAlert(props) {
  const {
    _id,
    name,
    emailAddress,
    auth_token,
    fcmToken,
    userPhoneNumber,
    userCountryCode,
    callSetUserLoggedInAction,
  } = props;

  useEffect(() => {
    storeUserData();
    callSetUserLoggedInAction(true)

    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'HomeScreen',
          },
        ],
      });
      props.navigation.dispatch(resetAction);
    }, 2000);
  }, []);

  storeUserData = async () => {
    try {

      await AsyncStorage.setItem('@_id', _id + '')
      await AsyncStorage.setItem('@name', name)
      await AsyncStorage.setItem('@emailAddress', emailAddress)
      await AsyncStorage.setItem('@auth_token', auth_token)
      await AsyncStorage.setItem('@fcmToken', fcmToken)
      await AsyncStorage.setItem('@userPhoneNumber', userPhoneNumber)
      await AsyncStorage.setItem('@userCountryCode', userCountryCode)
      await AsyncStorage.setItem('@userLoggedIn', 'TRUE')
      
    } catch (e) {
      
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={Styles.Img}>
        <LottieView
          source={require('../../../assets/animations/checkmark.json')}
          style={Styles.ico_size}
          autoPlay
          loop={false}
        />
        <Text style={Styles.create_msg}>
          {Languages.AccountCreatedSuccessfully}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = ({ User }) => {
  return {
    _id: User._id,
    name: User.name,
    emailAddress: User.emailAddress,
    auth_token: User.auth_token,
    fcmToken: User.fcmToken,
    userPhoneNumber: User.phoneNumber,
    userCountryCode: User.countryCode,
    selectedLanguage: User.selectedLanguage,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    callSetUserLoggedInAction: obj => dispatch(setUserLoggedInAction(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedAlert);
