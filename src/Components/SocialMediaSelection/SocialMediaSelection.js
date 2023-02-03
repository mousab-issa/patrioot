import auth from '@react-native-firebase/auth';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  StatusBar, Text,
  TouchableWithoutFeedback, View
} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Animated, {
  useAnimatedStyle, useSharedValue,

  withTiming
} from 'react-native-reanimated';
import Languages from '../../common/Languages';
import Styles from './Styles';

function SocialMediaSelection(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const animationView = useSharedValue(1);
  const animationViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(animationView.value, {
            duration: 200,
          }),
        },
      ],
    };
  });

  const setModelVisible = () => {
    props.onSocialMediaModalClose();
  };

  useEffect(() => {
    animationView.value = -200;
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '982315841338-a7vgb8qs6rijb9rp34gkqpggn2vm4v0o.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: false,
    });
  });

  const onFacebookSigninClicked = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      await auth().signInWithCredential(facebookCredential);
      props.onSocialMediaSelected('FACEBOOK', data.accessToken);
    } catch (error) {
    }

  };

  const onGoogleSigninClicked = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError(null);
      props.onSocialMediaSelected('GOOGLE', userInfo.idToken);
    } catch (error) {
     // alert(error);
    }

  };

  const onCrossClicked = () => {
    animationView.value = 200;
    this.timeoutHandle = setTimeout(() => {
      clearTimeout(this.timeoutHandle);
      setModelVisible();
    }, 200);
  };

  return (
    <View style={{ flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
      <TouchableWithoutFeedback onPress={onCrossClicked}>
        <View style={Styles.pop_screen}>
          <Animated.View style={[Styles.bottomView, animationViewStyle]}>
            <Pressable onPress={onCrossClicked}>
              <View style={Styles.language_select_close}>
                <LottieView
                  source={require('../../../assets/animations/cross_appear.json')}
                  autoPlay
                  speed={0.5}
                  loop={false}
                />
              </View>
            </Pressable>
            <View style={Styles.languagePopupOuter}>
              <View style={Styles.languagePopupInner}>
                <Text style={Styles.pop_text}>
                  {Languages.SocialMediaAccount}
                </Text>
                {/* <View style={Styles.languageLineOuter}>
                  <TouchableWithoutFeedback
                    onPress={onFacebookSigninClicked}
                    style={Styles.englishRowOuter}>
                    <View style={Styles.smStyle}>
                      <View style={Styles.smFirst}>
                        <Image
                          style={Styles.rightArrow}
                          source={require('../../../assets/images/ico_facebook.png')}
                        />
                      </View>
                      <View style={Styles.smSecond}>
                        <Text
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          style={Styles.smtext}>
                          {Languages.SignInFB}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </View> */}
                <View style={[Styles.languageLineOuter, Styles.bottomDisatnce]}>
                  <TouchableWithoutFeedback
                    onPress={onGoogleSigninClicked}
                    style={Styles.englishRowOuter}>
                    <View style={Styles.smGoogleStyle}>
                      <View style={Styles.smFirst}>
                        <Image
                          style={Styles.rightArrow}
                          source={require('../../../assets/images/ico_google.png')}
                        />
                      </View>
                      <View style={Styles.smSecond}>
                        <Text
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          style={Styles.smtext}>
                          {Languages.SignINGoogle}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default SocialMediaSelection;
