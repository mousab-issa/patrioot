import React, { useState } from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import FeedBackPopup from '../../Components/FeedBackPopup/FeedBackPopup';
import PopupBillPrice from '../../Components/popupBillPrice/PopupBillPrice';
import Styles from '../../Screens/ChatScreenView/Styles';




function OrderConfirmations(props) {
  const [isShowFeedbackPopUp, setisShowFeedbackPopUp] = useState(false);
  const [modalVisible, setModelVisible] = useState(false);
  const [modelVisibleConfirm, setModelVisibleConifrm] = useState(false);

  function onModalClose() {
    setModelVisible(false);
  }
  function onModalConfirmClose() {
    setModelVisibleConifrm(false);
  }

  function onConfirmNOClicked() {
    // setModelVisibleConifrm(true)
  }
  function onConfirmYESClicked() {
    //setModelVisible(true)
    setModelVisibleConifrm(true);
  }

  return (
    <View
      style={[Styles.chatlocationcard]}>
      <View>
        <Image
          source={require('../../../assets/images/Logo_green.png')}
          resizeMode="contain"
          style={Styles.orderConfirmImage}
        />
        <View style={Styles.confirmationCardInner}>
          <View style={Styles.orderConfirmMessageView}>
            <Text
              style={[Styles.chatTextStyle, Styles.orderConfirmMessageText]}>
              {props.dbMessages.message}
            </Text>
          </View>
          <View style={Styles.orderTopView}>
            <View style={Styles.orderTopInnerView}>
              <View style={Styles.orderNoButton}>
                <TouchableOpacity onPress={onConfirmYESClicked}>
                  <View style={Styles.confirmButtonStyle}>
                    <Text style={Styles.buttonText}>{Languages.Yes}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Styles.orderYesButton}>
                <TouchableOpacity onPress={onConfirmNOClicked}>
                  <View style={Styles.rejectButtonStyle}>
                    <Text style={Styles.buttonText}>{Languages.No}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <PopupBillPrice
          onModalClose={onModalClose}
          modalVisible={modalVisible}
        />
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modelVisibleConfirm}>
        <FeedBackPopup
          onModalClose={onModalConfirmClose}
          modalVisible={modalVisible}
        />
      </Modal>
    </View>
  );
}
export default OrderConfirmations;
