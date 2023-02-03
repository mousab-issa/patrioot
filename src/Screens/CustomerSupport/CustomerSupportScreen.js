/** @format */

import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList, Image,
  KeyboardAvoidingView,
  Platform, TextInput,
  TouchableHighlight,
  TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import SupportMessage from '../../Components/SupportMessage/SupportMessage';
import UserMessage from '../../Components/SupportMessage/UserMessage';
import {
  addUserMessageAction,
  clearOldCustomerMessages
} from '../../redux/customer_suport/action';
import Styles from './Styles';


function CustomerSupportScreen(props) {
  const {
    addNewUserMessage,
    clearOldMessages,
    orderList,
    userID,
    userName
  } = props;


  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(1); //100
  const [txtMessage, settxtMessage] = useState('');
  const [dbMessages, setDBMessages] = useState(orderList);
  const flatListRef = useRef();
  useEffect(() => {
    const onChildAdd = firestore()
      .collection('Admin_chat')
      .doc(userID + '')
      .collection('messages')
      .orderBy('time')
      .onSnapshot(snapshot => {
        if (snapshot != null) {
          var messageData = [];
          snapshot.forEach((doc) => {
            messageData.push(doc.data());
          })
          clearOldMessages();
          addNewUserMessage(messageData);
          setDBMessages(messageData);
          scrollToEnd();
        }
      });
    setKeyboardVerticalOffset(Platform.OS != 'ios' ? 80 : 1)
   
  }, []);

  function onMessageTextChange(value) {
    settxtMessage(value);

  }

  function addMessageAndRefresh(newMessage, isClear) {
    addNewUserMessage(newMessage)
    setDBMessages(dbMessages.concat(newMessage))
    if (isClear)
      settxtMessage('')
    scrollToEnd()
  }

  function sendChatMessage(message) {
    const newMessage = {
      message: message,
      sender: "user",
      status: "read",
      time: firebase.firestore.FieldValue.serverTimestamp(),
    };
    addMessageAndRefresh(newMessage, true)
    try {
      firestore()
        .collection('Admin_chat')
        .doc(userID + '')
        .collection('messages')
        .add(newMessage)
        .then(() =>{});
      firestore()
        .collection('Admin_chat')
        .doc(userID + '')
        .set({
          last_message: message,
          last_message_time: firebase.firestore.FieldValue.serverTimestamp(),
          last_sender: "user",
          name: userName, //"user1 test"
          userType: 'CUSTOMER',
          read: 0
        })
        .then(() => {});
    }
    catch (error) {
      alert(error)
    }
  }

  function onChatMessageSendClicked() {
    
    if (txtMessage.length > 1) {
      sendChatMessage(txtMessage);
    }
  }

  function isiPhoneX() {
    const dim = Dimensions.get('window');
    if (Platform.OS === 'ios') {
      return dim.height > 810 && dim.height < 950;
    }
    return false;
  }

  function scrollToEnd() {
    flatListRef?.current?.scrollToEnd()
  }


  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.mainView}>
        <View style={Styles.topView}>
          <View style={Styles.topStyle}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={Styles.topStyleContainer}>
              <CustomIcon name={Languages.BackBlackArrow} type="MaterialIcons" />
            </TouchableOpacity>

            <Image
              source={require('../../../assets/images/Logo_green.png')}
              resizeMode="contain"
              style={Styles.topStyleImageBadge}
            />
          </View>
        </View>
        <View style={Styles.bodyView}>

          <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
            <View style={Styles.backView}>

              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={Styles.backView} keyboardVerticalOffset={keyboardVerticalOffset}
              >
                <View
                  style={isiPhoneX() ? Styles.middleViewX : Styles.middleView}>
                  <FlatList
                    data={dbMessages != null ? dbMessages : []}
                    ref={flatListRef}
                    disableVirtualization
                    removeClippedSubviews={false}
                    renderItem={(chat) => (
                      <View style={Styles.bodyViewInner}
                        key={chat.time + ""}>
                        {chat.item.sender == 'admin' && (
                          <SupportMessage dbMessages={chat.item} />
                        )}

                        {chat.item.sender == 'user' && (
                          <UserMessage dbMessages={chat.item} />
                        )}
                      </View>
                    )}
                  />
                </View>

                <View style={Styles.bottomBar}>
                  <View style={Styles.messageField}>
                    <TextInput
                      style={Styles.yourmessageField}
                      multiline={true}
                      placeholder={Languages.Typemessage}
                      placeholderTextColor="#C0B3B3"
                      onChangeText={onMessageTextChange}
                      value={txtMessage}
                    />
                  </View>
                  <TouchableHighlight
                    onPress={onChatMessageSendClicked}
                    style={Styles.sendButtonContainer} underlayColor="none">
                    <View style={Styles.sendButton}>
                      <Image
                        source={Languages.SendButton}
                        resizeMode="contain"
                        style={Styles.sendButtomImage}
                      />
                    </View>
                  </TouchableHighlight>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = ({ customer_suport, User }) => {
  return {
    userID: User._id,
    userName: User.name,
    orderList: customer_suport.customerSupportData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUserMessage: (chatData) => {
      dispatch(addUserMessageAction(chatData));
    },
    clearOldMessages: () => {
      dispatch(clearOldCustomerMessages([]));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerSupportScreen);
