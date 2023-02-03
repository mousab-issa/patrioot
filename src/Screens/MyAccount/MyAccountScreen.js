import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView, StatusBar, Text,
  View, Dimensions, Linking
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import ProfileInnerSVGView from '../../Components/ProfileInnerView/ProfileInnerSVGView';
import ProfileInnerView from '../../Components/ProfileInnerView/ProfileInnerView';
import SelectLanguage from '../../Components/SelectLanguage/SelectLanguage';
import Toast from 'react-native-simple-toast';

import {
  resetUserDataAction, setIsUserLoggedInAction, setUserEmailAddressAction, UpdateUserNameEmail
} from '../../redux/user/action';
import Styles from './Styles';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';



function MyAccountScreen(props) {
  const {
    userID,
    emailAddress,
    name,
    userPhoneNumber,
    userCountryCode,
    setIsUserLoggedIn,
    authToken,
    updateUserEmailName,
    resetUserData,
  } = props;

  const [modelVisible, setModelVisible] = useState(false);
  const [localName, setNameText] = useState(name);
  const [localPhone, setPhoneNumber] = useState(userPhoneNumber);
  const [localEmail, setEmail] = useState(emailAddress);
  const [isNameEditing, setNameEditing] = useState(false);
  const [isPhoneEditing, setPhoneEditing] = useState(false);
  const [isEmailEditing, setEmailEditing] = useState(false);



  const logOut = () => {
    storeUserData();

    const timeoutHandle = setTimeout(() => {
      resetUserData(false);
      setIsUserLoggedIn(false);
      clearTimeout(timeoutHandle);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'WelcomePage',
          },
        ],
      });
      props.navigation.dispatch(resetAction);
    }, 300);
  };
  storeUserData = async () => {
    try {
      await AsyncStorage.setItem('@_id', '0')
      await AsyncStorage.setItem('@name', '')
      await AsyncStorage.setItem('@emailAddress', '')
      await AsyncStorage.setItem('@auth_token', '')
      await AsyncStorage.setItem('@userPhoneNumber', '')
      await AsyncStorage.setItem('@userCountryCode', '')
      await AsyncStorage.setItem('@userLoggedIn', 'FALSE')
      
    } catch (e) {
    }
  }

  storeUpdateUserata = async () => {
    try {
      await AsyncStorage.setItem('@name', localName)
      await AsyncStorage.setItem('@emailAddress', localEmail)
      
    } catch (e) {
    }
  }

  const onCustomerServicesClicked = () => {
    props.navigation.navigate('CustomerSupportScreen');
  };

  const onPrivacyPolicyClicked = () => {
    Linking.openURL(Constants.PrivacyPolicyLink);
  };

  const onTermsClicked = () => {
    Linking.openURL(Constants.TermsOfServiceLink);
  };

  const onStartDeliveringClicked = () => {
    Linking.openURL(Constants.StartDeliveringLink);
  };

  const onRateOurAppClicked = () => {
    Linking.openURL(Constants.RatePatriootLink);
  };

  const onInviteAFriendClicked = () => {
    alert('Invite a friend');
  };

  const onChangeLanguageClicked = () => {
    setModelVisible(true);
  };

  const onModalClose = () => {
    setModelVisible(false);
  };
  const onNameTextChange = (value) => {
    setNameText(value);
  };
  const onEmailTextChange = (value) => {
    setEmail(value);
  };
  const onPhoneTextChange = (value) => {
    setPhoneNumber(value);
  };
  const onNameClick = () => {
    setNameEditing(true);
    setEmailEditing(false);
    setPhoneEditing(false);
  };
  const onPhoneClick = () => {
    setNameEditing(false);
    setEmailEditing(false);
    setPhoneEditing(true);
  };
  const onEmailClick = () => {
    setNameEditing(false);
    setEmailEditing(true);
    setPhoneEditing(false);
  };
  const onCheckBoxClick = () => {
    if (!isEmailEditing && !isNameEditing)
      return;
    if (localName.length < 4) {
      return;
    }
    if (localEmail?.length > 0) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(localEmail) === false) {
        Toast.showWithGravity(
          Languages.EnterEmailAddress,
          Toast.SHORT,
          Toast.CENTER,
        );
        
        return;
      }
      else {
        
      }
    }
    setNameEditing(false);
    setEmailEditing(false);
    setPhoneEditing(false);
    const data = {
      name: localName,
      email: localEmail
    }
    storeUpdateUserata();
    updateUserEmailName(data, authToken);
  }
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Modal
        isVisible={modelVisible}
        backdropOpacity={0.9}
        backdropColor="rgba(0,0,0,0.5)"
        // animationIn="fadeIn"
        // animationOut="fadeOut"
        animationInTiming={1}
        animationOutTiming={1}
        coverScreen={false}
        deviceWidth={Dimensions.get('screen').width}
        deviceHeight={Dimensions.get('screen').height}
        style={Styles.modalContent}
      >
        <SelectLanguage onModalClose={onModalClose} />
      </Modal>
      <View style={Styles.topView}>
        <View style={Styles.main}>
          <View style={Styles.topLeft}>
            <BackBlackArrow navigation={props.navigation} />
            <Text style={Styles.textHeadingStyle}>{Languages.MyProfile}</Text>
          </View>
          <View style={Styles.topRight}>
            <CustomIcon
              name={'GreenLogo'}
              type={'SVG'}
              iconStyle={{
                fontSize: Constants.ResponsiveSize.f12,
                color: '#000000',
                ...props.iconStyle,
              }}
            />
          </View>
        </View>
        <View style={Styles.background}>
          <View style={Styles.background_inner}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <CustomIcon name={'nameIcon'} />
              <Text style={Styles.profileNameStyle}>{Languages.Name}</Text>
            </View>
            <View style={Styles.for_center_view}>
              <View style={Styles.width_height_bg} />
              {isNameEditing &&
                <TextInput
                  style={[Styles.profileNameValueStyle, { padding: 0, }]}
                  multiline={false}
                  keyboardType="default"
                  placeholderTextColor="#A6A6A6"
                  onChangeText={onNameTextChange}
                  value={localName}
                  onBlur={()=>onCheckBoxClick()}
                  autoFocus={true}
                />}
              {!isNameEditing &&
                <TouchableOpacity
                  onPress={onNameClick}>
                  <Text style={Styles.profileNameValueStyle}>{localName}</Text>
                </TouchableOpacity>}
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={onCheckBoxClick}>
                {(localName != null && localName.length > 0) &&
                  <CustomIcon
                    name={'check'}
                    type="Octicons"
                    iconStyle={{
                      fontSize: Constants.ResponsiveSize.f22,
                      paddingHorizontal: Constants.ResponsiveSize.f5,
                      color: 'green',
                    }}
                  />
                }
                {!(localName != null && localName.length > 0) &&
                  <CustomIcon
                    name={'EditLocation'}
                    type={'SVG'}
                    iconStyle={{
                      fontSize: Constants.ResponsiveSize.f10,
                      color: '#000000',
                    }}
                  />
                }
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.contact_info}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <CustomIcon name={'callIcon'} />
              <Text style={Styles.profileNameStyle}>
                {Languages.UserPhoneNumber}
              </Text>
            </View>
            <View style={Styles.for_center_view}>
              <View style={Styles.width_height_bg} />
              <Text style={Styles.profileNameValueStyle}>
                {userCountryCode}
                {localPhone}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={onCheckBoxClick}>
                <CustomIcon
                  name={'check'}
                  type="Octicons"
                  iconStyle={{
                    fontSize: Constants.ResponsiveSize.f22,
                    paddingHorizontal: Constants.ResponsiveSize.f5,
                    color: 'green',
                  }}
                /></TouchableOpacity>
            </View>
          </View>
          <View style={Styles.mail_info}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <CustomIcon name={'emailIcon'} />
              <Text style={Styles.profileNameStyle}>{Languages.Email}</Text>
            </View>
            <View style={Styles.for_center_view}>
              <View style={Styles.width_height_bg} />
              {isEmailEditing &&
                <TextInput
                  style={[Styles.profileNameValueStyle, { padding: 0, }]}
                  multiline={false}
                  keyboardType="email-address"
                  placeholderTextColor="#A6A6A6"
                  placeholder={Languages.EmailAddress}
                  onChangeText={onEmailTextChange}
                  onBlur={()=>onCheckBoxClick()}
                  value={localEmail}
                  autoFocus={true}
                />}
              {!isEmailEditing &&
                <TouchableOpacity
                  onPress={onEmailClick}>
                  <Text style={Styles.profileNameValueStyle}>{localEmail?.length > 0 ? localEmail : Languages.EnterEmail}</Text>
                </TouchableOpacity>}
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={onCheckBoxClick}>
                {(localEmail != null && localEmail.length > 0) &&
                  <CustomIcon
                    name={'check'}
                    type="Octicons"
                    iconStyle={{
                      fontSize: Constants.ResponsiveSize.f22,
                      paddingHorizontal: Constants.ResponsiveSize.f5,
                      color: 'green',
                    }}
                  />
                }
                {!(localEmail != null && localEmail.length > 0) &&
                  <CustomIcon
                    name={'EditLocation'}
                    type={'SVG'}
                    iconStyle={{
                      fontSize: Constants.ResponsiveSize.f10,
                      color: '#000000',
                    }}
                  />
                }
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.bodyView}>

          <View style={Styles.headingView}>
            <Text style={Styles.headingText}>{Languages.Account}</Text>
          </View>

          <ProfileInnerView
            Click={onInviteAFriendClicked}
            name={'inviteIcon'}
            type={'Ionicons'}
            Name={Languages.InviteaFriend}
          />
          <ProfileInnerView
            Click={onChangeLanguageClicked}
            name={'globe'}
            type={'Ionicons'}
            Name={Languages.ChangeAppLanguage}
          />
          <ProfileInnerView
            Click={onCustomerServicesClicked}
            name={'alert'}
            type={'Ionicons'}
            Name={Languages.Help}
          />

          <View style={Styles.headingView}>
            <Text style={Styles.headingText}>{Languages.General}</Text>
          </View>

          <ProfileInnerSVGView
            Click={onPrivacyPolicyClicked}
            name={'PrivacyPolicy'}
            type={'svg'}
            Name={Languages.Privacypolicy}
          />
          <ProfileInnerView
            Click={onTermsClicked}
            name={'terms'}
            type={'Ionicons'}
            Name={Languages.Terms}
          />
          <ProfileInnerView
            Click={onRateOurAppClicked}
            name={'starIcon'}
            type={'AntDesign'}
            Name={Languages.RateourApp}
          />
          <ProfileInnerView
            Click={onStartDeliveringClicked}
            name={'car'}
            type="FontAwesome5"
            Name={Languages.Startdelivering}
          />

          <View style={Styles.logout_btn_view}>
            <TouchableHighlight onPress={logOut} underlayColor="none">
              <Text style={Styles.logout_text}>{Languages.Logout}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView >
  );
}

const mapStateToProps = ({ User }) => {
  return {
    userID: User._id,
    emailAddress: User.emailAddress,
    name: User.name,
    userPhoneNumber: User.phoneNumber,
    userCountryCode: User.countryCode,
    authToken: User.auth_token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserEmailAddress: (emailAddress) => {
      dispatch(setUserEmailAddressAction(emailAddress));
    },
    setIsUserLoggedIn: (isLoggedIn) => {
      dispatch(setIsUserLoggedInAction(isLoggedIn));
    },
    resetUserData: (isLoggedIn) => {
      dispatch(resetUserDataAction(isLoggedIn));
    },
    updateUserEmailName: (obj, token) => {
      dispatch(UpdateUserNameEmail(obj, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen);
