import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Styles from './Styles';

class OrderConfirmations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCameraPopUp: false,
      modalVisible: false,
      modalConfirmVisible: false,
    };
  }
  onConfirmYESClicked = () => {
    this.setState({
      modalVisible: true,
    });
  };
  onConfirmNoClicked = () => {
    this.setState({
      modalConfirmVisible: true,
    });

  };
  componentDidMount() {

  }
  render() {
    return (
      <View>
        <View
          style={[Styles.cardOrder]}>
          <Image
            source={require('../../../assets/images/pic.png')}
            resizeMode="contain"
            style={Styles.orderConfirmImage}
          />
          <View style={Styles.confirmationCardInner}>
            <View style={Styles.orderConfirmMessageView}>
              <Text
                style={[Styles.chatTextStyle, Styles.orderConfirmMessageText]}>
                {this.props.dbMessages.message}
              </Text>
            </View>
            <View style={Styles.orderTopView}>
              <View style={Styles.orderTopInnerView}>
                <View style={Styles.orderNoButton}>
                  <TouchableOpacity
                    onPress={this.onConfirmNoClicked.bind(this)}>
                    <View style={Styles.confirmButtonStyle}>
                      <Text style={Styles.buttonText}>No</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Styles.orderYesButton}>
                  <TouchableOpacity
                    onPress={this.onConfirmYESClicked.bind(this)}>
                    <View style={Styles.rejectButtonStyle}>
                      <Text style={Styles.buttonText}>Yes</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Styles.doubletickView}>
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
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default OrderConfirmations;
