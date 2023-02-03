import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar, Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback, View
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Languages from '../../common/Languages';
import Styles from './Styles';


function SearchForCountry(props) {
  const [search, setsearch] = useState('');
  const [filteredCountryData, setFilteredCountryData] = useState(Languages.CountryData);


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
    animationView.value = -200;
  });

  const setModelVisible = () => {
    animationView.value = 200
    this.timeoutHandle = setTimeout(() => {
      clearTimeout(this.timeoutHandle);
      props.onModalClose();
    }, 200);
  };

  const updateSearch = (search) => {
    // const [filteredCountryData, setFilteredCountryData] = useState(Languages.CountryData);
    const searchdata = search.replace(/[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    let lSearchData = searchdata.toLowerCase()
    var lfilteredCountries = Languages.CountryData.filter(function (item) {
      return item.name.toLowerCase().search(lSearchData) >= 0
    });
    setFilteredCountryData(lfilteredCountries)
    setsearch(search);
  };

  const onCountryClicked = (Country) => {
    props.onCountrySelected(Country);
    animationView.value = 200
    this.timeoutHandle = setTimeout(() => {
      clearTimeout(this.timeoutHandle);
      props.onModalClose();
    }, 200);
  };
  //{paddingBottom:props.keyboardVisible?(200):0}
  return (
    <View style={[Styles.coutryPopUPOuter]}>
      <StatusBar
        translucent

        barStyle="dark-content"
      />
      <TouchableWithoutFeedback onPress={setModelVisible}>
        <View style={Styles.mainModal} />
      </TouchableWithoutFeedback>

      {/* <View style={[Styles.CountryListOuter, { paddingBottom: props.keyboardVisible ? (150) : 0 }, animationViewStyle]}> */}
      <Animated.View style={[Styles.CountryListOuter, { paddingBottom: props.keyboardVisible ? (1) : 0 }, animationViewStyle]}>
        <View style={Styles.inner_line} />
        <View style={Styles.searchCountryOuter}>
          <Text style={Styles.searchCountry}>{Languages.SearchForCountry}</Text>
        </View>
        <View style={Styles.searchOuter}>

          <SearchBar
            placeholder={Languages.TypeTheCountry}
            icon={{ type: 'font-awesome', name: 'search' }}
            onChangeText={updateSearch}
            value={search}
            editable={true}
            clearIcon={true}
            inputStyle={Styles.searchBG}
            inputContainerStyle={Styles.searchBarContainer}
            platform={Platform.OS}
            placeholderTextColor="#969494"
            containerStyle={Styles.searchContainer}
          />
        </View>
        <ScrollView>
          <View style={Styles.scrollOuter}>
            {
              filteredCountryData.map((country, i) => (
                <View key={i} style={Styles.mainView}>
                  <TouchableOpacity onPress={() => onCountryClicked(country)}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={Styles.flagImage}
                        resizeMode="contain"
                        source={country.url}
                      />
                      <Text style={Styles.countryNameRow}>{country.name}</Text>
                      <Text style={Styles.countrycodeStyle}>{country.code}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={Styles.lastView} />
                </View>
              ))
            }
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

export default SearchForCountry;
