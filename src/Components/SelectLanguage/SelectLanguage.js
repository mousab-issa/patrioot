import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  I18nManager, Image,
  Pressable,
  StatusBar, Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback, View, DevSettings
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import RNRestart from 'react-native-restart';
import Languages from '../../common/Languages';
import Styles from './Styles';

function SelectLanguage(props) {
  const [isEnglishSelected, setisEnglishSelected] = useState(true);

  const animationView = useSharedValue(1)
  const animationViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(animationView.value, {
            duration: 200
          }),

        }
      ]
    }
  })

  useEffect(() => {

    getLanguageDataArabic();
    getLanguageDataEnglish();

    animationView.value = -200
  });

  const setModelVisible = () => {
    props.onModalClose();
  };

  const getLanguageDataEnglish = async () => {
    try {
      const value = await AsyncStorage.getItem('@APP_LANGUAGE');
      if (value !== null) {
        if (value === 'en') {
          setisEnglishSelected(true);
        } else {
          setisEnglishSelected(false);
        }
      }
    } catch (e) {
    }
  };

  const setAppLanguage = (appLanguage) => {
    Languages.setLanguage(appLanguage);
    I18nManager.forceRTL(appLanguage === 'ar');
  };

  const onEnglishClicked = () => {
    setisEnglishSelected(true);
    setAppLanguage('en');
    storeData('@APP_LANGUAGE', 'en');
  };

  const onArabicClicked = () => {
    setisEnglishSelected(false);
    setAppLanguage('ar');
    storeData('@APP_LANGUAGE', 'ar');
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      if (key === '@APP_LANGUAGE') {
     
        if(Platform.OS==='ios'){
          DevSettings.reload();
        }
        else if(Platform.OS==='android')
        {
          RNRestart.Restart();
        }
      }
    } catch (e) {
    }
  };

  const getLanguageDataArabic = async () => {
    try {
      const value = await AsyncStorage.getItem('@APP_LANGUAGE');
      if (value !== null) {
        setisEnglishSelected(value === 'ar' ? false : true);
      } else {
        setisEnglishSelected(true);
      }
    } catch (e) {
    }
  };
  const onCrossClicked = () => {
    animationView.value = 200
    this.timeoutHandle = setTimeout(() => {
      clearTimeout(this.timeoutHandle);
      setModelVisible();
    }, 200);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent barStyle='dark-content' />
      <TouchableWithoutFeedback
        onPress={onCrossClicked}>
        <View style={Styles.pop_screen}>
          <Animated.View style={[Styles.bottomView, animationViewStyle]}>
            <Pressable
              onPress={onCrossClicked}>
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
                <Text style={Styles.pop_text}>{Languages.ChangeLanguage}</Text>
                <Text style={Styles.pop_second_text}>
                  {Languages.LanguageOption}
                </Text>
                <View style={Styles.languageLineOuter}>
                  <TouchableOpacity
                    onPress={onEnglishClicked}
                    style={Styles.englishRowOuter}>
                    <View style={Styles.language_select_pop}>
                      <Text style={Styles.languageText}>EN</Text>
                    </View>
                    <View style={Styles.languageDescriptionText}>
                      <Text style={Styles.language_text}>{Languages.English}</Text>
                    </View>
                    <View style={Styles.languageSelection}>
                      {isEnglishSelected && (
                        <Image
                          resizeMode="contain"
                          style={Styles.languageSelectionImage}
                          source={require('../../../assets/images/ico_done_green.png')}
                        />
                      )}
                      {!isEnglishSelected && (
                        <Image
                          resizeMode="contain"
                          style={Styles.languageSelectionImage}
                          source={require('../../../assets/images/ico_done_grey.png')}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={[Styles.languageLineOuter, Styles.bottomDisatnce]}>
                  <TouchableOpacity
                    onPress={onArabicClicked}
                    style={Styles.englishRowOuter}>
                    <View style={Styles.language_select_pop2}>
                      <Text style={Styles.languageText}>AR</Text>
                    </View>
                    <View style={Styles.languageDescriptionText}>
                      <Text style={Styles.language_arab_text}>{Languages.Arabic}</Text>
                    </View>
                    <View style={Styles.languageSelection}>
                      {!isEnglishSelected && (
                        <Image
                          resizeMode="contain"
                          style={Styles.languageSelectionImage}
                          source={require('../../../assets/images/ico_done_green.png')}
                        />
                      )}
                      {isEnglishSelected && (
                        <Image
                          resizeMode="contain"
                          style={Styles.languageSelectionImage}
                          source={require('../../../assets/images/ico_done_grey.png')}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default SelectLanguage;
