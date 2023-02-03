import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FlagDropdown from './FlagDropdown';
import {SearchBar} from 'react-native-elements';
import Styles from './Styles';

class Flags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: FlagDropdown,
      search: '',
    };
    this.Close = this.Close.bind(this);
    this.onCountryClicked = this.onCountryClicked.bind(this);
  }
  Close = () => {
    alert('close');
  };
  updateSearch = (search) => {
    this.setState({search});
  };

  onCountryClicked = () => {
    this.props.navigation.goBack();
  };

  render() {
    const data = this.state.data;
    const {search} = this.state;
    return (
      <SafeAreaView>
        <View style={Styles.upper_view} />
        <View style={Styles.main_main_view}>
          <View style={Styles.close_view}>
            <TouchableOpacity onPress={this.Close} style={Styles.line_view} />
          </View>
          <View style={{margin: 15}}>
            <Text style={Styles.text_for}>Search for a country </Text>
          </View>
          <View style={Styles.search_view}>
            <SearchBar
              placeholder="Type the country"
              icon={{type: 'font-awesome', name: 'search'}}
              onChangeText={this.updateSearch}
              value={search}
              clearIcon={true}
              inputStyle={{backgroundColor: '#DEDEDE'}}
              platform={Platform.OS}
              placeholderTextColor="#969494"
              containerStyle={{
                backgroundColor: '#DEDEDE',
                justifyContent: 'space-around',
                width: 'auto',
                borderRadius: 30,
                height: 50,
              }}
            />
          </View>
          <ScrollView>
            <View style={{margin: 20}}>
              {data.map((row, i) => (
                <View key={i}>
                  <TouchableOpacity onPress={this.onCountryClicked}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={Styles.img_url}
                        resizeMode="contain"
                        source={row.url}
                      />
                      <Text style={Styles.name_flag}>{row.name}</Text>
                      <Text style={Styles.flag_code}>{row.code}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={Styles.inner_line_view} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Flags;
