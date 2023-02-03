import React, { Component } from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import Styles from './Styles';


class PopupCorrectOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalConfirmVisible: this.props.modalConfirmVisible,
    };
  }

  componentDidMount() {

  }

  onEnterClicked = () => {
    this.props.modalConfirmVisible = false;
  };

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalConfirmVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={Styles.containerLoading}>
          <View style={Styles.popupInner}>
            <View style={Styles.blockImageSizeOuter}>
              <Image
                source={require('../../../assets/images/block.png')}
                resizeMode="contain"
                style={Styles.blockImageSize}
              />
            </View>
            <View style={Styles.textOuter}>
              <Text style={Styles.font}>
                {Languages.InCaseOfCancelling}{' '}
                <Text style={{ color: 'red' }}> 4 SAR </Text>
                {Languages.profileWillBeChecked}
              </Text>
            </View>

            <View style={Styles.buttonOuter}>
              <View style={Styles.orderNoButton}>
                <TouchableHighlight underlayColor="none">
                  <View style={Styles.sendButtonStyle}>
                    <Text style={Styles.buttonText}>{Languages.Back}</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={Styles.orderNoButton}>
                <TouchableHighlight underlayColor="none">
                  <View style={Styles.editButtonStyle}>
                    <Text style={Styles.buttonText}>{Languages.Continue}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
export default PopupCorrectOrder;
