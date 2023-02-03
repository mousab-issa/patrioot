import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar,
  ActivityIndicator, Linking, Image, I18nManager,
  Dimensions, TouchableHighlight
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { Bubble, GiftedChat, SystemMessage, IMessage, Send } from './src'

import ImagePicker from 'react-native-image-crop-picker';
import ImageView from "react-native-image-viewing-rtl";
import { connect } from 'react-redux';

import AccessoryBar from './support/AccessoryBar'
import CustomActions from './support/CustomActions'
import CustomView from './support/CustomView'
import Modal from 'react-native-modal';

import earlierMessages from './support/data/earlierMessages'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import _ from 'lodash';

import styles from './Styles';
import LottieView from 'lottie-react-native';
import BackBlackArrow from '../../Components/BackBlackArrow/BackBlackArrow';
import Bill from '../../Components/ChatView/Bill';
import FeedBack from '../../Components/ChatView/feedBack';
import FeedBackPopup from '../../Components/FeedBackPopup/FeedBackPopup';

import {
  addUserMessageAction,
  addAllMessagesAction,
  clearMessagesAction,
  setOrderIDAction,
  CancleOrderAction
} from '../../redux/chat/action';
import ImageResizer from 'react-native-image-resizer';

import Languages from '../../common/Languages';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const filterBotMessages = message =>
  !message.system && message.user && message.user._id && message.user._id === 2

const findStep = step => message => message._id === step

const ChatTopic = 'customer_rider_chat';
const messagesCaption = 'messages';

let user = {
  _id: 1,
  name: 'abc',
}

let otherUser = {
  _id: 3,
  name: 'Taimoor',
  // avatar: 'https://facebook.github.io/react/img/logo_og.png',
}

class ChatScreen extends Component {
  state = {
    inverted: false,
    step: 0,
    messages: [],
    loadEarlier: true,
    typingText: null,
    isLoadingEarlier: false,
    appIsReady: false,
    isTyping: false,
    feedbackPopUp: false,
    orderId: 0,
    NotificationData: null,
    startLatitude: 0.0,
    startLongitude: 0.0,
    destinationLatitude: 0.0,
    destinationLongitude: 0.0,
    orderDetails: null,
    orderDataWithUsers: null,
    order_type: '',
    orderStatus: null,
    orderDescription: '',
    locationAlreadyAdded: false,
    orderNumber: '',
    deliveryCharges: 0,
    serviceCharges: 0,
    orderPrice: 0,
    totalPrice: 0,
    VATNumber: 'ABCXYZ000',
    driverId: 0,
    driverName: '',
    showDriverImage: false,
    driverFCM: '',
    driverImageData: [],
    driverImage: 'http://68.183.87.136/storage/cover_pics/restaurants/BURGER KING.jpg',
    driverPhoneNumber: '00966',
    isFinished: false,
  }

  _isMounted = false
  _TotalPrice = 0;

  componentDidMount() {

    this._isMounted = true

    this.setState({
      appIsReady: true,
      isTyping: false,
    })
    //orderDataWithUsers


    var NotificationData = this.props.route.params != null ? this.props.route.params.notificationData : null;
    var fromChatScreen = this.props.route.params != null ? this.props.route.params.fromChatScreen : null;
    var lorderId = this.props.route.params != null ? this.props.route.params.orderId : null;

    if (fromChatScreen && NotificationData != null) {
      const selectedRider = NotificationData.data.user;


      if (lorderId != null) {
        this.setState({
          //   driverFCM: selectedRider.device_token,
          //   driverName: selectedRider.first_name,
          orderId: lorderId, //NotificationData.data.order.id,
          //   driverImage: selectedRider.profile_pic,
          //   driverPhoneNumber: selectedRider.phone,
        }, function () {
          this.chcekFirestoreOrderData(NotificationData, selectedRider);
          this.setMessageAsRead();
          this.props.setOrderID(lorderId);
          //  this.getFirestoreCollection();
        })
      }
    }
    else {
      // const selectedRider = this.props.route.params.selectedRider;

      NotificationData = this.props.notificationData;
      lorderId = this.props.orderID;
      const selectedRider = this.props.selectedRider;

      if (lorderId != null) {
        this.setState({
          //   driverFCM: selectedRider.device_token,
          //   driverName: selectedRider.username,
          orderId: lorderId, //NotificationData.data.order.id,
          //   driverImage: selectedRider.profile_pic,
          //   driverPhoneNumber: selectedRider.phone,
        }, function () {
          this.chcekFirestoreOrderData(NotificationData, selectedRider);
          this.setMessageAsRead();
          //    this.getFirestoreCollection();
        })
      }
    }

    const time = setInterval(() => {
      if (this.state.isFinished) {
        clearInterval(time);
      }
      else {
        this.getFirestoreCollection();
      }
    }, 120000);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.cancelledOrderId.length > 0 && nextProps.OrderState.length > 0) {
      if (nextProps.OrderState == 'CENCELLED' && (nextProps.cancelledOrderId + '') == (this.state.orderId + '')) {
        this.onBackClicked();
      }
    }
    if (nextProps.cancelApiSuccess) {
      this.onBackClicked();
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  PopulateDataToOrder = (alreadyPopulated) => {

    const selectedOrderData = this.state.orderDataWithUsers;

    const NotificationData = selectedOrderData.order;
    const customerData = selectedOrderData.customer;
    const driverData = selectedOrderData.driver;

    user.name = customerData.name;

    otherUser._id = driverData.id;
    otherUser.name = driverData.name;

    this.setState({
      driverFCM: driverData.fcmToken,
      driverName: driverData.name,
      driverImage: driverData.profile_pic,
      driverPhoneNumber: driverData.phoneNumber,
      driverId: driverData.id,
    })

    if (NotificationData != null) {
      const StartData = NotificationData.data.start;
      if (StartData != null) {
        this.setState({
          startLatitude: parseFloat(StartData.latitude == null ? 0 : StartData.latitude),
          startLongitude: parseFloat(StartData.longitude == null ? 0 : StartData.longitude),
        })
      }

      if (NotificationData.data.destination != null) {
        const destinationOrder = NotificationData.data.destination;
        this.setState({
          destinationLatitude: parseFloat(destinationOrder.latitude == null ? 0 : destinationOrder.latitude),
          destinationLongitude: parseFloat(destinationOrder.longitude == null ? 0 : destinationOrder.longitude),
        })
      }

      /*   if (NotificationData.data.order.order_type != null && NotificationData.data.order.order_type == 'Normalorder') {
           
           const branchLocation = NotificationData.data.order.branch;
           this.setState({
             startLatitude: parseFloat(branchLocation.latitude == null ? 0 : branchLocation.latitude),
             startLongitude: parseFloat(branchLocation.longitude == null ? 0 : branchLocation.longitude),
           })
           const OrderLocation = NotificationData.data.order;

           this.setState({
             destinationLatitude: parseFloat(OrderLocation.latitude == null ? 0 : OrderLocation.latitude),
             destinationLongitude: parseFloat(OrderLocation.longitude == null ? 0 : OrderLocation.longitude),
           })
         }*/

      if (NotificationData.data.order.order_type != null && NotificationData.data.order.order_type == 'Normalorder') {
        const branchLocation = NotificationData.data.start;
        this.setState({
          startLatitude: parseFloat(branchLocation.latitude == null ? 0 : branchLocation.latitude),
          startLongitude: parseFloat(branchLocation.longitude == null ? 0 : branchLocation.longitude),
          orderStatus: 'normal'
        })
        const OrderLocation = NotificationData.data.destination;
        this.setState({
          destinationLatitude: parseFloat(OrderLocation.latitude == null ? 0 : OrderLocation.latitude),
          destinationLongitude: parseFloat(OrderLocation.longitude == null ? 0 : OrderLocation.longitude),
        })

      }

      if (NotificationData.data.order != null) {
        if (NotificationData.data.order.order_type == 'customorder') {
          _TotalPrice = parseFloat(NotificationData.data.order.min_price != null ? NotificationData.data.order.min_price : 0);
          this.setState({
            orderPrice: parseFloat(NotificationData.data.order.min_price != null ? NotificationData.data.order.min_price : 0),
            orderStatus: 'custom'
          })
        }
        else {
          let ItemsPrice = 0;
          const OrderData = NotificationData.data.order.order_item;
          for (itemIndex in OrderData) {
            let addOns = 0;
            for (AddON in OrderData[itemIndex].addons) {
              addOns += parseFloat(OrderData[itemIndex].addons[AddON].price)
            }
            ItemsPrice += (parseFloat(OrderData[itemIndex].price) + addOns) * parseFloat(OrderData[itemIndex].quantity);
          }
          _TotalPrice = ItemsPrice;
          this.setState({
            orderPrice: ItemsPrice,
          }, function () {
          })
        }

        this.setState({
          orderId: NotificationData.data.order.id,
          order_type: NotificationData.data.order.order_type,
          deliveryCharges: parseFloat(NotificationData.data.order.delivery_charges == null ? 0 : NotificationData.data.order.delivery_charges),
          serviceCharges: parseFloat(NotificationData.data.order.service_charges == null ? 1 : NotificationData.data.order.service_charges),
          orderDescription: NotificationData.data.order.description,
          orderPrice: parseFloat(NotificationData.data.order.min_price),
          orderNumber: NotificationData.data.order.order_number,
          orderData: NotificationData.data.order,

        }, function () {
          this.setState({
            totalPrice: _TotalPrice + this.state.deliveryCharges + this.state.serviceCharges,
          })
          if (!alreadyPopulated) {
            //   this.chcekFirestoreCollection();
            //  }
            // else {
            this.AddLocationAndOtherData();
          }
        })
      }
    }
    this.chcekFirestoreCollection();
  }

  onSendClicked = () => {
    this.onBackClicked();
  }

  chcekFirestoreCollection = () => {
    const onChildAdd = firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .onSnapshot(snapshot => {
        if (snapshot != null) {
          let snapshotSize = snapshot.size;
          if (snapshotSize > 0) {
            this.getFirestoreCollection();
          }
          else {
            //   this.AddLocationAndOtherData();
          }
        }
      });
  }

  addDataToMessageArray = (dataItem) => {
    const step = this.state.step + 1
    this.setState((previousState: any) => {
      // const sentMessages = [{ ...messages[0], sent: true, received: true }]
      const sentMessages = [dataItem] as IMessage[] //[{ ...messages[0], sent: true, received: true }]
      return {
        messages: GiftedChat.append(
          previousState.messages,
          sentMessages,
          Platform.OS !== 'web',
        ),
        step,
      }
    })
  }

  prependDataToMessageArray = (dataItem) => {
    const step = this.state.step + 1
    this.setState((previousState: any) => {
      // const sentMessages = [{ ...messages[0], sent: true, received: true }]
      const sentMessages = [dataItem] as IMessage[] //[{ ...messages[0], sent: true, received: true }]
      return {
        messages: GiftedChat.prepend(
          previousState.messages,
          sentMessages,
          Platform.OS !== 'web',
        ),
        step,
      }
    })
  }

  getFirestoreCollection = () => {
    const lthis = this
    const onChildAdd = firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      //.orderBy('createdAt')
      .orderBy('createdAt', 'desc')
      // .where('sender', '==', 'admin')
      // .where('time', '<', currentDate)
      .onSnapshot(snapshot => {
        // clearOldMessages()
        if (snapshot != null) {
          snapshot.docChanges().forEach(function (change) {

            if (change.type === "added") {
              var tempData = change.doc.data();
              
              var presentData = [...lthis.state.messages];

              var tempDataItem = presentData.find(item => item._id == tempData._id)
              if (!tempDataItem) {
                if (tempData.messageType == 'DELIVER_ORDER_TEXT') {
                  tempData.quickReplies.keepIt = false
                }
                if (tempData.quickReplies != null) {
                  if (tempData.quickReplies.keepIt == true) {
                    tempData.quickReplies.values[0].title = lthis.getLocalizedMessageString(tempData.quickReplies.values[0].value, tempData.quickReplies.values[0].title);
                    tempData.quickReplies.values[1].title = lthis.getLocalizedMessageString(tempData.quickReplies.values[1].value, tempData.quickReplies.values[1].title);
                  }
                }

                if (tempData.messageType == 'DELIVER_ORDER_TEXT') {
                  tempData.quickReplies.keepIt = false;
                }

                tempData.text = lthis.getLocalizedMessageString(tempData.messageType, tempData.text);

                const currentTime = moment.utc(new Date()).valueOf();
                const timeDifference = moment(currentTime).diff(moment(tempData.createdAt), 'seconds');

                if (tempData.messageType == 'DELIVER_ORDER_TEXT') {
                  const tempData1 = {
                    _id: tempData._id,
                    text: Languages.DidYouDeliverOrder,
                    sender: "customer",
                    user: tempData.user,
                    pending: tempData.pending,
                    fcm: tempData.fcm,
                    chatId: tempData.chatId,
                    type: 'DELIVER_ORDER_TEXT',
                    messageType: 'DELIVER_ORDER_TEXT',
                    status: "read",
                    createdAt: tempData.createdAt,
                    // quickReplies: quickReply,
                  };
                  // tempData = tempData1;
                  if (timeDifference > 5) {
                    lthis.prependDataToMessageArray(tempData1)
                  }
                  else {
                    lthis.addDataToMessageArray(tempData1)
                    // lthis.setMessageAsRead();
                  }
                }
                else {

                  const ltempData = _.cloneDeep(tempData)

                  if (timeDifference > 10) {
                    if (ltempData.messageType == 'IMAGE' && timeDifference < 20) {
                      lthis.addDataToMessageArray(ltempData)
                    }
                    else {
                      lthis.prependDataToMessageArray(ltempData)
                    }
                  }
                  else {
                    lthis.addDataToMessageArray(ltempData)
                    //  this.setMessageAsRead();
                  }
                }
              }
            }
            if (change.type === "modified") {
              const edittedData = change.doc.data();

              const _currentMessages = [...lthis.state.messages];
              var messageIndex = _currentMessages.findIndex(function (c) {
                return c._id == edittedData._id;
              });

              if (messageIndex >= 0) {
                if (edittedData.quickReplies != null) {
                  _currentMessages[messageIndex].quickReplies = edittedData.quickReplies;
                }
                if (_currentMessages[messageIndex].messageType == 'DELIVER_ORDER_TEXT') {
                  _currentMessages[messageIndex].quickReplies.keepIt = false
                }

                if (_currentMessages[messageIndex].quickReplies != null) {
                  if (_currentMessages[messageIndex].quickReplies.keepIt == true) {
                    _currentMessages[messageIndex].quickReplies.values[0].title = lthis.getLocalizedMessageString(_currentMessages[messageIndex].quickReplies.values[0].value, _currentMessages[messageIndex].quickReplies.values[0].title);
                    _currentMessages[messageIndex].quickReplies.values[1].title = lthis.getLocalizedMessageString(_currentMessages[messageIndex].quickReplies.values[1].value, _currentMessages[messageIndex].quickReplies.values[1].title);
                  }
                }

                _currentMessages[messageIndex].text = lthis.getLocalizedMessageString(edittedData.messageType, edittedData.text);
                _currentMessages[messageIndex].pending = edittedData.pending;
                lthis.setState({
                  messages: []
                }, function () {
                  lthis.setState({
                    messages: _currentMessages
                  })
                })

              }
            }
            if (change.type === "removed") {

            }
          })



          /* const step = this.state.step //+ messageData.length
           this.setState((previousState: any) => {
             const sentMessages = messageData as IMessage[] //[{ ...messages[0], sent: true, received: true }]
             return {
               messages: GiftedChat.append(
                 previousState.messages,
                 sentMessages,
                 Platform.OS !== 'web',
               ),
               step,
             }
           })*/
        }
      });
  }

  chcekFirestoreOrderData = (NotificationData, selectedRider) => {

    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '').get()
      .then(documentSnapshot => {

        if (documentSnapshot.exists) {
          const storedOrderData = documentSnapshot.data();
          this.setState({
            orderDataWithUsers: storedOrderData.orderData
          }, function () {

            this.PopulateDataToOrder(true);
          })

        }
        else {

          const customerData = {
            id: this.props.id,
            name: this.props.userName,
            fcmToken: this.props.fcmToken,
            phoneNumber: this.props.countryCode.replace("+", "00") + this.props.phoneNumber,
          };

          const driverData = {
            id: selectedRider.id,
            name: selectedRider.username,
            fcmToken: selectedRider.device_token != null ? selectedRider.device_token : '',
            phoneNumber: selectedRider.phone,
            profile_pic: selectedRider.profile_pic != null ? selectedRider.profile_pic : '',
          };
          const lselectedState = {
            selectedState: NotificationData.order_type == "Normalorder" ? '1' : '0',
          };

          const orderData = {
            selectedState: NotificationData.order_type == "Normalorder" ? '1' : '0',
            order: NotificationData,
            driver: driverData,
            customer: customerData
          };

          firestore()
            .collection(ChatTopic)
            .doc(this.state.orderId + '').set({
              orderData: orderData,
            })
            .then(() => {

              this.setState({
                orderDataWithUsers: orderData
              }, function () {

                this.PopulateDataToOrder(false);
              })
            });
        }
      });
  }

  AddLocationAndOtherData = () => {
    this.setState({
      locationAlreadyAdded: true
    }, function () {

    })

    const DeliveryLocation = {
      latitude: this.state.destinationLatitude,
      longitude: this.state.destinationLongitude,
    };

    const DeliveryLocationData = {
      _id: moment().valueOf(),
      text: Languages.Deliverylocation,
      sender: "Rider",
      location: DeliveryLocation,
      user: otherUser,
      pending: true,
      fcm: this.state.driverFCM,
      lang: this.props.selectedLanguage,
      chatId: this.state.orderId + '',
      type: 'LOCATION',
      messageType: 'DELIVERY_LOCATION',
      status: "read",
      createdAt: moment.utc(new Date()).valueOf(),
    };
    this.addDataToMessageArray(DeliveryLocationData);
    let locationItem = [];
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .add(DeliveryLocationData)
      .then(() => {
        const storeLocation = {
          latitude: this.state.startLatitude,
          longitude: this.state.startLongitude, // 2.398704,
        };

        const storeLocationData = {
          _id: moment().valueOf(),
          text: Languages.StoreLocation,
          sender: "Rider",
          location: storeLocation,
          user: otherUser,
          pending: true,
          fcm: this.state.driverFCM,
          lang: this.props.selectedLanguage,
          chatId: this.state.orderId + '',
          type: 'LOCATION',
          messageType: 'STORE_LOCATION',
          status: "read",
          createdAt: moment.utc(new Date()).valueOf(),
        };

        this.addDataToMessageArray(storeLocationData);
        firestore()
          .collection(ChatTopic)
          .doc(this.state.orderId + '')
          .collection(messagesCaption)
          .add(storeLocationData)
          .then(() => {
            const quickReply = {
              type: 'radio',
              keepIt: true,
              values: [
                {
                  title: Languages.CONFIRM,
                  value: 'CONFIRM',
                },
                {
                  title: Languages.REJECT,
                  value: 'REJECT',
                },
              ],
            }
            setTimeout(() => {
              const quickReplyData = {
                _id: moment().valueOf(),
                text: '',
                sender: "Rider",
                user: otherUser,
                pending: true,
                fcm: this.state.driverFCM,
                lang: this.props.selectedLanguage,
                chatId: this.state.orderId + '',
                type: 'ORDER_DETAIL',
                messageType: 'ORDER_DETAIL',
                status: "read",
                createdAt: moment.utc(new Date()).valueOf(),
                quickReplies: quickReply,
              };
              this.addDataToMessageArray(quickReplyData);
              firestore()
                .collection(ChatTopic)
                .doc(this.state.orderId + '')
                .collection(messagesCaption)
                .add(quickReplyData)
                .then(() => {

                  this.getFirestoreCollection();
                });
            }, 2500)
          });
      });
  }

  addBillAndFeedback = () => {

    setTimeout(() => {
      const billData = {
        _id: moment().valueOf(),
        text: '',
        sender: "Rider",
        user: otherUser,
        pending: true,
        fcm: this.state.driverFCM,
        lang: this.props.selectedLanguage,
        chatId: this.state.orderId + '',
        type: 'BILL',
        messageType: 'BILL',
        status: "read",
        createdAt: moment.utc(new Date()).valueOf(),
      };
      this.addLocationDatatoFirebase(billData);
    }, 1000)

    setTimeout(() => {
      const requestData = {
        _id: moment().valueOf(),
        text: Languages.MakeSureYouClickYes,
        sender: "Rider",
        user: otherUser,
        pending: true,
        fcm: this.state.driverFCM,
        lang: this.props.selectedLanguage,
        chatId: this.state.orderId + '',
        type: 'text',
        messageType: 'MAKE_SURE_CLICK_YES',
        status: "read",
        createdAt: moment.utc(new Date()).valueOf(),
      };
      this.addLocationDatatoFirebase(requestData);
    }, 1500)

    setTimeout(() => {
      const feedbackData = {
        _id: moment().valueOf(),
        text: Languages.DidYouReceiveYourOrder,
        sender: "Rider",
        user: otherUser,
        pending: true,
        fcm: this.state.driverFCM,
        lang: this.props.selectedLanguage,
        chatId: this.state.orderId + '',
        type: 'text',
        messageType: 'FEEDBACK_RECEIVE_ORDER',
        status: "read",
        createdAt: moment.utc(new Date()).valueOf(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: Languages.Yes,
              value: 'YES',
            },
            {
              title: Languages.No,
              value: 'NO',
            },
          ],
        }
      };
      this.addLocationDatatoFirebase(feedbackData);
    }, 2000)
  }

  addLocationDatatoFirebase = (messageData) => {
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .add(messageData)
      .then(() => { });
  }

  setOrderDetailReplyData = () => {
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .where('type', '==', 'ORDER_DETAIL')
      .get()
      .then(querySnapshot => {
        const thing = querySnapshot.docs[0];
        var currVal = thing.data();
        thing.ref.update({
          'quickReplies.keepIt': false,
        })
      });
  }
  setFeedbackReplyData = () => {
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .where('messageType', '==', 'FEEDBACK_RECEIVE_ORDER')
      .get()
      .then(querySnapshot => {
        const thing = querySnapshot.docs[0];

        var currVal = thing.data();

        thing.ref.update({
          'quickReplies.keepIt': false,
        })
      });
  }

  setMessageAsRead = () => {
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .where('user._id', '!=', this.props.id)
      .get()
      .then(querySnapshot => {
        for (newDOC in querySnapshot.docs) {
          const docRef = querySnapshot.docs[newDOC];
          var docData = docRef.data();
          if (docData.pending == true) {
            docRef.ref.update({
              pending: false,
            })
          }
        }
      });
  }


  CancleOrderByCustomer = () => {

    const data = {
      order_id: this.state.orderId,
      lang: this.props.selectedLanguage,
      cancellation_reason: "Rajected by Customer",
    }
    this.props.CancleOrder(data, this.props.authToken)
  }

  onLoadEarlier = () => {
    this.setState(() => {
      return {
        isLoadingEarlier: true,
      }
    })

    setTimeout(() => {
      if (this._isMounted === true) {

        this.setState((previousState: any) => {
          return {
            messages: GiftedChat.prepend(
              previousState.messages,
              earlierMessages() as IMessage[],
              Platform.OS !== 'web',
            ),
            loadEarlier: true,
            isLoadingEarlier: false,
          }
        })
      }
    }, 1500) // simulating network
  }

  onGalleryClicked = (messages: IMessage[] = []) => {

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {

      this.SendImage(image.path)
    });
  }
  onCameraClicked = (messages: IMessage[] = []) => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {

      this.SendImage(image.path);
    });
  }

  SendImage = (pImage) => {
    const step = this.state.step + 1

    this.addImageToFirebase(pImage, "");
  }

  addImageToFirebase = (pImage, dateTimeData) => {

    let imageName = 'ChatData_' + this.props.id + '_' + this.getRandomNumber();
    imageName = imageName.replace('.', '');
    imageName = imageName + '.jpg';

    const messageId = moment().valueOf();
    const CreatedTime = moment.utc(new Date()).valueOf();
    const dataMessage = {
      _id: messageId,
      image: pImage,
      fileName: imageName,
      sender: "customer",
      user: user,
      fcm: this.state.driverFCM,
      lang: this.props.selectedLanguage,
      chatId: this.state.orderId + '',
      messageType: 'IMAGE',
      pending: true,
      status: "read",
      createdAt: CreatedTime,
    };
    this.addDataToMessageArray(dataMessage);

    let newWidth = 500;
    let newHeight = 500;
    let compressFormat = 'JPEG';
    let quality = 100;
    let rotation = 0;
    let outputPath = null;
    let imageUri = pImage;
    ImageResizer.createResizedImage(
      imageUri,
      newWidth,
      newHeight,
      compressFormat,
      quality,
      rotation,
      outputPath,
    )
      .then((response) => {
        // response.uri is the URI of the new image that can now be displayed, uploaded...
        //resized image uri
        let uri = response.uri;
        //generating image name

        //to resolve file path issue on different platforms
        let uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        //setting the image name and image uri in the state

        let reference = storage().ref(imageName);
        let task = reference.putFile(uploadUri);

        task.then(() => {

          reference.getDownloadURL()
            .then((url) => {
              //from url you can fetched the uploaded image easily

              // Add code to set data in Firestore
              setTimeout(() => {
                const newMessage = {
                  _id: messageId,
                  image: url,
                  fileName: imageName,
                  sender: "customer",
                  user: user,
                  fcm: this.state.driverFCM,
                  lang: this.props.selectedLanguage,
                  chatId: this.state.orderId + '',
                  messageType: 'IMAGE',
                  pending: true,
                  status: "read",
                  createdAt: CreatedTime,
                };

                firestore()
                  .collection(ChatTopic)
                  .doc(this.state.orderId + '')
                  .collection(messagesCaption)
                  .add(newMessage)
                  .then(() => { });
              }, 100)

            })
            .catch((e) => { });

        }).catch((e) => { });
      })
      .catch((err) => {

      });
  }

  addBillToChat = () => {
    setTimeout(() => {
      const billObject = {
        _id: moment().valueOf(),
        text: '',
        sender: "Rider",
        user: user,
        pending: true,
        type: 'BILL',
        fcm: this.state.driverFCM,
        lang: this.props.selectedLanguage,
        chatId: this.state.orderId + '',
        messageType: 'BILL',
        billPrice: _TotalPrice,
        status: "read",
        createdAt: moment.utc(new Date()).valueOf(),
      };
      this.addLocationDatatoFirebase(billObject);
    }, 1000)
  }

  getLocalizedMessageString = (messageType, text) => {
    if (messageType == 'STORE_LOCATION') {
      return Languages.StoreLocation;
    }
    else if (messageType == 'DELIVERY_LOCATION') {
      return Languages.Deliverylocation;
    }
    else if (messageType == 'CONFIRM') {
      return Languages.CONFIRM;
    }
    else if (messageType == 'REJECT') {
      return Languages.REJECT;
    }
    else if (messageType == 'YES') {
      return Languages.Yes;
    }
    else if (messageType == 'NO') {
      return Languages.No;
    }
    else if (messageType == 'FEEDBACK_RECEIVE_ORDER') {
      return Languages.DidYouReceiveYourOrder;
    }
    else if (messageType == 'DELIVER_ORDER_TEXT') {
      return Languages.DidYouDeliverOrder;
    }
    else if (messageType == 'MAKE_SURE_CLICK_YES') {
      return Languages.MakeSureYouClickYes;
    }
    return text;
  }

  onSend = (messages = []) => {
    const messageData = messages[0];

    const newMessage = {
      _id: moment().valueOf(),
      text: messageData.text,
      sender: "customer",
      user: user,
      pending: true,
      fcm: this.state.driverFCM,
      lang: this.props.selectedLanguage,
      chatId: this.state.orderId + '',
      messageType: messageData.messageType != null ? messageData.messageType : 'text',
      type: 'text',
      status: "read",
      createdAt: moment.utc(new Date()).valueOf(),
    };
    this.addDataToMessageArray(newMessage);

    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .add(newMessage)
      .then(() => {

      });
    // this.addDatatoFirebase(messageData.text, messageData.createdAt)

    // for demo purpose
    // setTimeout(() => this.botSend(this.state.step), Math.round(Math.random() * 1000))
  }

  getRandomNumber = () => {
    const min = 100;
    const max = 10000;

    return (min + (Math.random() * (max - min)));
  }

  addDatatoFirebase = (messageData, dateTimeData) => {

    const newMessage = {
      _id: moment().valueOf(),
      text: messageData,
      sender: "customer",
      user: user,
      pending: true,
      fcm: this.state.driverFCM,
      lang: this.props.selectedLanguage,
      chatId: this.state.orderId + '',
      type: 'text',
      messageType: 'text',
      status: "read",
      createdAt: moment.utc(new Date()).valueOf(),
    };
    firestore()
      .collection(ChatTopic)
      .doc(this.state.orderId + '')
      .collection(messagesCaption)
      .add(newMessage)
      .then(() => { });
  }

  botSend = (step = 0) => {
    const newMessage = (messagesData as IMessage[])
      .reverse()
      // .filter(filterBotMessages)
      .find(findStep(step))

    if (newMessage) {
      this.setState((previousState: any) => ({
        messages: GiftedChat.append(
          previousState.messages,
          [newMessage],
          Platform.OS !== 'web',
        ),
      }))
    }
  }

  parsePatterns = (_linkStyle: any) => {
    return [
      {
        pattern: /#(\w+)/,
        style: { textDecorationLine: 'underline', color: 'darkorange' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ]
  }

  renderCustomView = (props) => {
    if (props.currentMessage.type == 'BILL') {
      if (props.currentMessage.billPrice != null) {
        _TotalPrice = props.currentMessage.billPrice;
      }
      return (
        <Bill orderData={this.state.orderDataWithUsers}
          totalPrice={this.state.totalPrice}
          serviceTax={this.state.serviceCharges}
          orderPrice={_TotalPrice}
          VATnumber={this.props.VATNumber}
        />
      );
    }
    else if (props.currentMessage.type == 'ORDER_DETAIL') {
      return <FeedBack orderData={this.state.orderDataWithUsers} />
    }
    else if (props.currentMessage.type == 'LOCATION') {
      return <CustomView {...props} />
    }
    return null
  }

  renderCustomView1(props) {
    return <CustomView {...props} />
  }

  onReceive = (text: string) => {

    this.setState((previousState: any) => {
      return {
        messages: GiftedChat.append(
          previousState.messages as any,
          [
            {
              _id: Math.round(Math.random() * 1000000),
              text,
              createdAt: new Date(),
              user: otherUser,
            },
          ],
          Platform.OS !== 'web',
        ),
      }
    })
  }

  onSendFromUser = (messages: IMessage[] = []) => {

    const createdAt = new Date()
    const messagesToUpload = messages.map(message => ({
      ...message,
      user,
      createdAt,
      _id: Math.round(Math.random() * 1000000),
    }))
    this.onSend(messagesToUpload)
  }

  setIsTyping = () => {
    this.setState({
      isTyping: !this.state.isTyping,
    })
  }

  renderAccessory = () => (
    <AccessoryBar onGalleryClicked={this.onGalleryClicked} onCameraClicked={this.onCameraClicked} isTyping={this.setIsTyping} />
  )

  renderCustomActions = props =>
    Platform.OS === 'web' ? null : (
      <CustomActions {...props} onSend={this.onSendFromUser} />
    )

  renderBubble = (props: any) => {
    return <Bubble {...props} />
  }

  renderSystemMessage = props => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    )
  }

  renderTicks = message => {
    // const { statusMessage } = this.state;

    if (message.pending) {
      return (
        <CustomIcon
          name={'GrayDoubleTick'}
          type={'SVG'}
        />
      );
    }
    else {
      return (
        <CustomIcon
          name={'BlueDoubleTick'}
          type={'SVG'}
        />
      );
    }

    // TODO: Status pending
    /*  if (message && message.user && message.user._id === this.ownerInfo?.phone) {
          const status = statusMessage[message._id];
          switch (status) {
              case STATUS_MESSAGE.SENDING:
                  return (
                      <ActivityIndicator
                          size="small"
                          color={Colors.pink_06}
                          style={styles.loadingTick}
                      />
                  );
              case STATUS_MESSAGE.RECEIVED:
                  return (
                      <Icon name={'16_notifications_check_circle_full'} style={styles.ticks} />
                  );
              case STATUS_MESSAGE.SENT:
                  return <Icon name={'16_notifications_check_circle'} style={styles.ticks} />;
              case STATUS_MESSAGE.READ:
                  return (
                      <Avatar
                          size="tiny"
                          name={this.friendInfo?.name}
                          source={{ uri: this.friendInfo?.avatar }}
                          style={styles.ticks}
                      />
                  );
              default:
                  return null;
          }
      } else {
          return null;
      }*/
  };

  onQuickReply = replies => {

    if (replies.length > 0) {

      let messageArray = this.state.messages
      var in_array = messageArray.filter(function (item) { return item._id == replies[0].messageId });
      var index = messageArray.indexOf(in_array[0]);
      messageArray[index].quickReplies.keepIt = false;
      if (replies[0].value == 'YES') {
        this.setState({
          feedbackPopUp: true
        }, function () {
          this.deleteChatImagesFromStorage();
        })
        this.setFeedbackReplyData();
      }
      else if (replies[0].value == 'NO') {
        this.setFeedbackReplyData();
      }
      else if (replies[0].value == 'CONFIRM') {
        this.setOrderDetailReplyData();
        if (this.state.orderStatus == 'normal') {
          this.addBillToChat();
        }
        //  this.addBillAndFeedback();
      }
      else if (replies[0].value == 'REJECT') {
        this.setOrderDetailReplyData();
        this.CancleOrderByCustomer();
      }
      this.setState({
        messages: messageArray,
      })
    }

    const createdAt = moment.utc(new Date()).valueOf(); //new Date()
    if (replies.length === 1) {
      this.onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          messageType: replies[0].value,
          text: replies[0].title,
          user,
        },
      ])
    } else if (replies.length > 1) {
      this.onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          messageType: replies[0].value,
          text: replies.map(reply => reply.title).join(', '),
          user,
        },
      ])
    } else {
      console.warn('replies param is not set correctly')
    }
  }

  renderQuickReplySend = () => <Text>{' custom send =>'}</Text>

  renderSend = (props: Send['props']) => (
    <Send {...props} containerStyle={{ justifyContent: 'center' }}>
      {/* <Icon type={'MaterialIcons'} fontSize={30} color={'tomato'} name={'send'} /> */}
      <Image
        source={Languages.SendButton}
        resizeMode="contain"
        style={styles.sendButtomImage}
      />
    </Send>
  )
  onLocationClicked = () => {
    this.props.navigation.navigate('MapDistanceTime', {
      startLatitude: this.state.startLatitude,
      startLongitude: this.state.startLongitude,
      destinationLatitude: this.state.destinationLatitude,
      destinationLongitude: this.state.destinationLongitude,
      orderId: this.state.orderId,
      driverName: this.state.driverName,
    });
  }

  onDriverPhoneClicked = () => {
    if (this.state.driverPhoneNumber != null && this.state.driverPhoneNumber.length > 8) {
      Linking.openURL(`tel:${this.state.driverPhoneNumber}`)
    }

  }

  deleteChatImagesFromStorage = () => {
    const messageList = [...this.state.messages];
    for (lMessageData in messageList) {
      if (messageList[lMessageData].messageType != null && messageList[lMessageData].messageType == 'IMAGE') {
        let storageRef = storage().ref(messageList[lMessageData].fileName)
        storageRef.delete().then(function () {
          // File deleted successfully

        }).catch(function (error) {

        });
      }
    }
  }

  onBackClicked = () => {
    const fromChatScreen = this.props.route.params != null ? this.props.route.params.fromChatScreen : null;
    this.setState({
      isFinished: true
    });
    if (fromChatScreen != null) {
      this.props.navigation.goBack();
    }
    else {
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
        this.props.navigation.dispatch(resetAction);
      }, 1000);
    }
  }

  onDriverPicClicked = () => {

    //showDriverImage

    if (this.state.driverImageData.length == 0) {
      const driverimage = [
        {
          uri: this.state.driverImage,
        }
      ];
      this.setState({
        driverImageData: driverimage,
        showDriverImage: true
      });
    }
    else {
      this.setState({
        showDriverImage: true
      });
    }
    //this.setState({showDriverImage: true})
  }

  onFeedbackPopUpClose = () => {
    this.setState({
      feedbackPopUp: false
    })
  }


  renderHeader = () => (
    <View style={styles.topView}>
      <View style={styles.topStyle}>
        <View style={styles.topStyleContainer}>
          <TouchableHighlight onPress={this.onBackClicked} underlayColor="none">
            <CustomIcon
              name={I18nManager.isRTL ? 'BlackArrowRTL' : 'BlackArrow'}
              type={'SVG'}
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress={this.onDriverPicClicked}
          underlayColor="none">
          {/* <Image
            source={require('../../../assets/images/Driver_Avatar.png')}
            resizeMode="contain"
            style={styles.Driver_Avatar}
          /> */}
          <View style={styles.Driver_avatar_outer}>
            <Image
              source={{ uri: this.state.driverImage }}
              // resizeMode="contain"
              style={styles.Driver_Avatar}
            />
          </View>
        </TouchableHighlight>
        <Text style={styles.topHeadingStyle}>{this.state.driverName}</Text>
        <View style={{ justifyContent: 'center', marginTop: 5 }}>
          <Image
            source={require('../../../assets/images/badge.png')}
            resizeMode="contain"
            style={styles.topStyleImageBadge}
          />
        </View>
      </View>

      <View style={styles.topStylesRight}>
        <TouchableHighlight
          onPress={this.onDriverPhoneClicked}
          underlayColor="none"
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/images/phone_green.png')}
            resizeMode="contain"
            style={styles.topImagePhone}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onLocationClicked}
          underlayColor="none"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: Screen.width * 0.025,
          }}>
          <LottieView
            source={require('../../../assets/animations/jumping_yellow_pin.json')}
            style={styles.jumpingPin}
            autoPlay
            loop
            speed={1}
          />
        </TouchableHighlight>
      </View>
    </View>
  )

  render() {
    if (!this.state.appIsReady) {
      return (
        <View>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      )
    }
    // 
    return (
      <View
        style={styles.container}
        accessible
        accessibilityLabel='main'
        testID='main'
      >
        <StatusBar translucent hidden={false} backgroundColor="transparent" barStyle='dark-content' />
        {this.renderHeader()}
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          // loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}
          parsePatterns={this.parsePatterns}
          user={user}
          scrollToBottom
          alwaysShowSend
          showUserAvatar={false}
          showAvatarForEveryMessage={false}
          //   onLongPressAvatar={user => alert(JSON.stringify(user))}
          //   onPressAvatar={() => alert('short press')}
          onQuickReply={this.onQuickReply}
          keyboardShouldPersistTaps='never'
          renderAccessory={Platform.OS === 'web' ? null : this.renderAccessory}
          // renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderTicks={this.renderTicks}
          renderSystemMessage={this.renderSystemMessage}
          renderCustomView={this.renderCustomView}
          renderSend={this.renderSend}
          quickReplyStyle={{ borderRadius: 12 }}
          renderQuickReplySend={this.renderQuickReplySend}
          inverted={Platform.OS !== 'web'}
          scrollToBottomStyle={{ backgroundColor: '#CDCDCD' }}
          timeTextStyle={{ left: { color: '#373737' }, right: { color: 'black' } }}
          isTyping={this.state.isTyping}
          infiniteScroll
        />
        <Modal
          isVisible={this.state.feedbackPopUp}
          backdropOpacity={0.9}
          backdropColor="rgba(0,0,0,0.5)"
          animationInTiming={1}
          animationOutTiming={1}
          coverScreen={false}
          deviceWidth={Dimensions.get('screen').width}
          deviceHeight={Dimensions.get('screen').height}
          style={styles.modalContent}
        >
          <FeedBackPopup
            onModalClose={this.onFeedbackPopUpClose}
            orderId={this.state.orderId}
            onSendClicked={this.onSendClicked}
          />
        </Modal>
        <ImageView
          images={this.state.driverImageData}
          imageIndex={0}
          visible={this.state.showDriverImage}
          onRequestClose={() => this.setState({ showDriverImage: false })}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ chat, User, home_view }) => {
  return {
    userChatData: chat.chatData,
    orderID: chat.orderID,
    notificationData: chat.notificationData,
    selectedRider: chat.selectedRider,
    id: User._id,
    userName: User.name,
    fcmToken: User.fcmToken,
    countryCode: User.countryCode,
    phoneNumber: User.phoneNumber,
    authToken: User.auth_token,
    selectedLanguage: User.selectedLanguage,
    VATNumber: home_view.VATNumber,
    OrderState: chat.OrderState,
    cancelledOrderId: chat.cancelledOrderId,
    cancelApiSuccess: chat.cancelApiSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUserMessage: (chatData) => {
      dispatch(addUserMessageAction(chatData));
    },
    addAllMessages: (chatData) => {
      dispatch(addAllMessagesAction(chatData));
    },
    setOrderID: (orderId) => {
      dispatch(setOrderIDAction(orderId));
    },
    CancleOrder: (obj, AuthToken) => {
      dispatch(CancleOrderAction(obj, AuthToken));
    },
    clearAllMessages: () => {
      dispatch(clearMessagesAction(''));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
//export default ChatScreen;